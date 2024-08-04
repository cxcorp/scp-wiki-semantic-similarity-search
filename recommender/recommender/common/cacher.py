import pickle
import numpy as np
import os


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

    def _read_pickle(self, filename: str):
        with open(self.get_file_path(filename), "rb") as fp:
            return pickle.load(fp)

    def write_pages(self, data: list[tuple[str, str]]):
        self._write_pickle("pages-cache.pickle", data)

    def read_pages(self) -> list[tuple[str, str]]:
        return self._read_pickle("pages-cache.pickle")

    def write_embeddings(self, data: np.ndarray):
        self._write_pickle("embeddings-cache.pickle", data)

    def read_embeddings(self) -> np.ndarray:
        return self._read_pickle("embeddings-cache.pickle")

    def write_similarities(self, data: np.ndarray):
        self._write_pickle("similarities-np-cache.pickle", data)

    def read_similarities(self) -> np.ndarray:
        return self._read_pickle("similarities-np-cache.pickle")


class DummyCacher(Cacher):
    def __init__(self, version_prefix: str, cache_path: str = "./cache"):
        super().__init__(version_prefix, cache_path=cache_path)

    def write_pages(self, data):
        pass

    def write_embeddings(self, data):
        pass

    def write_similarities(self, data):
        pass
