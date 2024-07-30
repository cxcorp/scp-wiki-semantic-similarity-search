import pickle
import shutil
import sqlite3
import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
import time
import os
import re

import torch

from recommender.common.constants import DB_PATH

target_links = [
    "scp-6706",
    "scp-6058",
    "numbed-owls-feasting",
    "scp-7775",
    "the-death-of-dr-fern",
    "scp-3929",
    "the-halloween-breach",
    "scp-2762",
    "scp-5992",
    "scp-1321",
    "the-emperor-of-many-voices",
    "tribunal",
    "scp-1823",
    "scp-7268",
    "gdp2-a-little-chat",
    "scp-1644",
    "the-scarlet-truth",
    "scp-6606",
    "test-subjects",
    "scp-3134",
    "scp-3088",
    "milligan-s-truck-story",
    "demoted-to-d-class-part-2",
    "scp-5803",
    "scp-3047",
    "scp-1310",
    "scp-2460",
    "akiva-counter-operating-instructions",
    "until-death-do-us-part",
    "scp-6112",
    "scp-4270",
    "scp-859",
    "scp-006",
    "scp-4961",
    "scp-3829",
    "scp-7171",
    "scp-3724",
    "scp-526",
    "inverted-swiss-cheese",
    "scp-5626",
    "scp-5045",
    "nine-tales-from-the-cativerse",
    "scp-6435",
    "scp-1089",
    "scp-4636",
    "scp-5264",
    "scp-6557",
    "scp-2385",
    "the-ranger-with-the-big-iron-on-his-hip",
    "scp-4633",
    "scp-3489",
    "first-lessons",
    "friday-afternoon",
    "scp-5575",
    "scp-072",
    "scp-7553",
    "scp-7326",
    "the-wasteland",
    "footsteps",
    "scp-6465",
    "scp-5299",
    "waffling-about",
    "moonlighting",
    "scp-6501",
    "scp-4228",
    "the-woven-man",
    "theogenesis",
    "scp-1865",
    "pilgrimage",
    "scp-7952",
    "scp-8023",
    "scp-7585",
    "masayang-palaka",
    "scp-961",
    "heistoween",
    "scp-6046",
    "broadcast",
    "matterminded",
    "scp-7886",
    "scp-1863",
    "the-scent-of-the-worm",
    "scp-4912",
    "amor-pati-or-love-to-suffer",
    "scp-3548",
    "aar-1320-chacaltaya",
    "scp-2229",
    "scp-5762",
    "not-yet",
    "dorer-dances",
    "scp-7008",
    "scp-5284",
    "scp-2609",
    "scp-2346",
    "scp-6988",
    "scp-7639",
    "veilfall",
    "scp-1214",
    "scp-6776",
    "scp-7540",
    "interlude-new-toys",
    "scp-7113",
    "scp-2638",
    "public-static-void",
    "scp-2763",
    "scp-924",
    "scp-2090",
    "scp-1080",
    "scp-8623",
    "nobody-runs-site-19",
    "scp-4641",
    "a-transcribed-collection-of-graffiti-from-site-42",
    "scp-7049",
    "the-case-of-the-missing-hand",
    "heatwave",
    "scp-4542",
    "da-capo-al-fine",
    "scp-6828",
    "scp-3957",
    "whole",
    "urine-over-your-head",
    "hint-the-thing-is-173",
    "scp-7606",
    "scp-6248",
    "scp-3050",
    "disintegration",
    "scp-7894",
    "scp-412",
    "scp-5025",
    "scp-3974",
    "scp-1675",
    "scp-6241",
    "contempt",
    "scp-5729",
    "scp-1955",
    "scp-1335",
    "scp-2595",
    "a-greater-darkness",
    "doctor-cimmerian-cookbook",
    "old-daevite-language",
    "scp-4600",
    "scp-3029",
    "scp-7689",
    "the-place-to-find-yourself",
    "knee-deep-in-the-keter",
    "evolution-of-mind",
    "scp-140",
    "scp-116",
    "it-wasn-t-a-vacation",
    "outback-law",
    "make-america-normaler",
    "scp-6667",
    "scp-1225",
    "scp-058",
    "scp-1550",
    "and-i-feel-fine",
    "scp-1829",
    "scp-109",
    "a-circus-with-paranoia",
    "scp-1625",
    "scp-1104",
    "scp-1352",
    "come-back-kid",
    "daddy",
    "scp-2093",
    "khornecon",
    "of-able",
    "scp-1221",
    "scp-113",
    "chowderclef",
    "sa-jin-photo",
    "green-pawn",
    "autonomy-part-ii",
    "scp-2028",
    "scp-107",
    "dreams-of-the-dead-sea",
    "prantortiz-the-vile",
    "scp-160",
    "main-office-iii",
    "cryptocurrency-and-its-consequences",
    "scp-011",
    "lord-blackwood-and-the-land-of-the-unclean",
    "freedom-forever",
    "another-soul-joins-the-halkost",
    "quiet-game",
    "a-bearly-thought-out-plan",
    "scp-1752",
    "enansi-si-gnihtyreve",
    "knowledge-is-a-deadly-friend",
    "festival-of-arthropods",
    "scp-1565",
    "dissertation",
    "osiris-wentworth-and-his-wonderful-day-at-work",
    "rebar-nightmares",
    "scp-118",
]


def main():
    version_prefix = "cache/v5"

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
    embeddings = model.encode(corpus, batch_size=2, show_progress_bar=True)
    end = time.time()
    print(f"encode {end-start}s")
    print(embeddings.shape)
    # [14000, 768]

    with open(f"./{version_prefix}-pages-cache.pickle", "wb") as fp:
        pickle.dump(pages, fp)
    with open(f"./{version_prefix}-embeddings-cache.pickle", "wb") as fp:
        pickle.dump(embeddings, fp)

    # 3. Calculate the embedding similarities
    similarities = model.similarity(embeddings, embeddings)
    print(similarities)
    # tensor([[1.0000, 0.6660, 0.1046],
    #         [0.6660, 1.0000, 0.1411],
    #         [0.1046, 0.1411, 1.0000]])
    t_np = similarities.numpy()  # convert to Numpy array
    with open(f"./{version_prefix}-similarities-np-cache.pickle", "wb") as fp:
        pickle.dump(t_np, fp)
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
    structured_array.tofile(f"./{version_prefix}-matches.bin")

    # best_50 = np.flip(np.argsort(t_np[0]))[:50]
    # df = pd.DataFrame(t_np)  # convert to a dataframe
    # df.to_csv(f"{version}-testfile.csv", index=False)  # save to file
    print("Writing corpus to file")

    with open(f"{version_prefix}-corpus.txt", "w") as fp:
        fp.write("\n".join([p[0] for p in pages]))
    
    shutil.copyfile(f"{version_prefix}-corpus.txt", "../webapp/public/corpus.txt")
    shutil.copyfile(f"{version_prefix}-matches.bin", "../webapp/public/matches.bin")

main()


# batch_size=12
# 501 encodings in 55.72s
# -> 8.99 per second
