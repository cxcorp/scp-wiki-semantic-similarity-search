import os
import pickle
import shutil
import sqlite3
import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
import time
import re
import torch

from recommender.common.constants import DB_PATH


class Cacher:
    def __init__(self, version_prefix: str, cache_path: str = "./cache"):
        self.version_prefix = version_prefix
        os.makedirs(cache_path, exist_ok=True)
        self.cache_path = cache_path

    def get_file_path(self, filename: str):
        return os.path.join(self.cache_path, f"{self.version_prefix}-{filename}")

    def _write_pickle(self, filename: str, data):
        with open(self.get_file_path(filename), "wb") as fp:
            pickle.dump(data, fp)

    def write_pages(self, data: list[tuple[str, str]]):
        self._write_pickle("pages-cache.pickle", data)

    def write_embeddings(self, data: np.ndarray):
        self._write_pickle("embeddings-cache.pickle", data)

    def write_similarities(self, data: np.ndarray):
        self._write_pickle("similarities-np-cache.pickle", data)


class DummyCacher(Cacher):
    def __init__(self, version_prefix: str, cache_path: str = "./cache"):
        super(Cacher, self).__init__(version_prefix, cache_path=cache_path)

    def write_pages(self, data):
        pass

    def write_embeddings(self, data):
        pass

    def write_similarities(self, data):
        pass


write_cache = True
cache_path = "./cache"
version_prefix = "v6-multilingual"


def main():
    cacher = (
        Cacher(version_prefix, cache_path)
        if write_cache
        else DummyCacher(version_prefix, cache_path)
    )

    # with open("./target_links.txt", "r") as fp:
    #     target_links = fp.readlines()

    start = time.time()
    with sqlite3.connect(DB_PATH) as con:
        cur = con.cursor()

        res = cur.execute("SELECT link, text FROM pages WHERE LENGTH(text) > 100")
        # res = cur.execute(
        #     f"SELECT link, text FROM pages WHERE link IN ({','.join(['?'] * len(target_links))})",
        #     target_links,
        # )
        pages = res.fetchall()

        # res = cur.execute("SELECT link, text FROM pages WHERE link = 'unforgettable-that-s-what-you-are' LIMIT 1")
        # reference = res.fetchone()
    end = time.time()
    print(f"sqlite {end-start}s")

    # https://sbert.net/docs/sentence_transformer/usage/semantic_textual_similarity.html
    model = SentenceTransformer(
        # https://huggingface.co/Alibaba-NLP/gte-base-en-v1.5
        "Alibaba-NLP/gte-base-en-v1.5",
        trust_remote_code=True,
        model_kwargs={
            "torch_dtype": torch.float16,
        },
        config_kwargs={
            "unpad_inputs": True,
            "use_memory_efficient_attention": True,
        },
    )

    # pages = [reference, *pages]

    scp_regex = re.compile(r"scp-\d+", re.IGNORECASE)

    def cleanup(arg: tuple[str, str]):
        # TODO: move to preprocess if works
        link, text = arg

        if scp_regex.fullmatch(link) is None:
            return (link, text)

        text = re.sub(r"\bitem\s*#\s*:\s*", "Item #: ", text, flags=re.IGNORECASE)

        this_scp_regex = rf"(?<!Item #: )\b{re.escape(link)}\b"
        text = re.sub(this_scp_regex, "The SCP", text, flags=re.IGNORECASE)
        return (link, text)

    pages = [cleanup(p) for p in pages]
    corpus = [row[1] for row in pages]

    start = time.time()
    # Batch size appears to have a non-negligible effect on the results,
    # possibly due to a different code path resulting in different matrix float operations?
    # batch_size > 1 seems to be alright.
    # Even though there's enough VRAM for batch_size=12 (maybe 14), the nvidia-smi reports
    # sm% to be 100% even with batch_size=2 so the actual speedup only shows after the
    # very large documents have been processed (when moving to the "smart chunks" with
    # smaller size). However, at that point the larger batch sizes have been slowed down so much
    # by the large batch size it's faster to run with a small batch size overall.
    embeddings = model.encode(
        corpus, batch_size=2, show_progress_bar=True, convert_to_numpy=True
    )
    end = time.time()
    print(f"encode {end-start}s")
    print(embeddings.shape)
    # [14000, 768]

    cacher.write_pages(pages)
    cacher.write_embeddings(embeddings)

    # 3. Calculate the embedding similarities
    similarities = model.similarity(embeddings, embeddings)
    print(similarities)
    # tensor([[1.0000, 0.6660, 0.1046],
    #         [0.6660, 1.0000, 0.1411],
    #         [0.1046, 0.1411, 1.0000]])
    t_np = similarities.numpy()  # convert to Numpy array

    cacher.write_similarities(t_np)
    # with open(f"./{version}-similarities-np-cache.pickle", "rb") as fp:
    #     t_np = pickle.load(fp)

    print("Writing top 50 to file")

    top_k = 50
    # # # use argpartition instead of argsort on the big matrix because it's faster
    # # # it partitions the rows so that the top 50 are first, but not in sorted order
    # # # (we then just sort those top50 elements, which is faster)
    # # partition_indices = np.argpartition(t_np, -top_k, axis=1)[:, -top_k:]
    # # top_50_values = np.take_along_axis(t_np, partition_indices, axis=1)

    # # # now sort the top50 elements
    # # sorted_order = np.argsort(-top_50_values, axis=1)
    # # sorted_indices = np.take_along_axis(partition_indices, sorted_order, axis=1)
    # # sorted_values = np.take_along_axis(top_50_values, sorted_order, axis=1)
    sorted_indices = np.argsort(t_np, axis=1)[:, -top_k:]
    sorted_values = np.take_along_axis(t_np, sorted_indices, axis=1)

    num_rows, _ = t_np.shape
    # Step 3: Create a structured array
    dtype = np.dtype([("index", np.uint16), ("value", np.float32)])
    structured_array = np.zeros((num_rows, top_k), dtype=dtype)

    for i in range(num_rows):
        structured_array[i]["index"] = np.flip(sorted_indices[i])
        structured_array[i]["value"] = np.flip(sorted_values[i])

    # Step 4: Write the structured array into a binary file
    matches_path = cacher.get_file_path("matches.bin")
    structured_array.tofile(matches_path)

    # best_50 = np.flip(np.argsort(t_np[0]))[:50]
    # df = pd.DataFrame(t_np)  # convert to a dataframe
    # df.to_csv(f"{version}-testfile.csv", index=False)  # save to file
    print("Writing corpus to file")

    corpus_path = cacher.get_file_path("corpus.txt")
    with open(corpus_path, "w") as fp:
        fp.write("\n".join([p[0] for p in pages]))

    shutil.copyfile(corpus_path, "../webapp/public/corpus.txt")
    shutil.copyfile(matches_path, "../webapp/public/matches.bin")


main()


# batch_size=12
# 501 encodings in 55.72s
# -> 8.99 per second
