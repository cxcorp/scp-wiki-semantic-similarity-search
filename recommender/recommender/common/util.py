from collections.abc import Iterable
from typing import TypeVar

T = TypeVar("T")


def flatten(iterable: Iterable[Iterable[T]]) -> Iterable[T]:
    return (x for sublist in iterable for x in sublist)
