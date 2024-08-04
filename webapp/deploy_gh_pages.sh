#!/bin/bash
set -euxo pipefail

rm -rf ./dist
npm run build

rm -rf ../../scp-wiki-semantic-similarity-search-gh-pages/*
cp -r dist/* ../../scp-wiki-semantic-similarity-search-gh-pages/

git_commit="$(git rev-parse HEAD)"
cd ../../scp-wiki-semantic-similarity-search-gh-pages || exit 1
git add .
git commit -m "$git_commit"
git push
