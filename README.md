# scp-wiki-semantic-similarity-search

A webapp for discovering similar [SCP Wiki](https://scp-wiki.wikidot.com/) articles and stories based on cosine similarity of their embeddings, calculated with [Sentence Transformers (Sentence-BERT)](https://sbert.net/).

Try it out: https://cxcorp.github.io/scp-wiki-semantic-similarity-search/

## Directories

### webapp

The web app

### recommender

The Python project that calculates the embeddings. Needs CUDA 12.1.

## Installing for development

1. clone repo
2. pull the submodules:
   ```
   git submodule update --init --recursive
   ```

### Recommender

0. Install CUDA 12.1.x, make sure it works (`nvidia-smi` can be ran)
1. Install pyenv (https://github.com/pyenv/pyenv)
2. `cd recommender`
3. install the python version specified by .python-version, idk `pyenv install` or `pyenv local` or something
    - make sure it works in your PATH (`python --version` says 3.12)
4. Make a virtualenv
   ```
   python -m venv .ven
   ```
5. Activate the virtualenv
   ```
   source .venv/bin/activate
   ```
6. Install deps
   ```
   pip install -f requirements.txt
   ```
7. run preprocess pipeline to test that it works
   ```
   python -m recommender.preprocess
   ```

You should now have a `wiki.sqlite3` file.

You can now run `python -m recommender.gen_recommend` followed by `python -m recommender.gen_hubs_sqlite` to generate the embeddings, calculate the article similarities, and write out the required datafiles into `webapp/public/`.

### Webapp

1. Install Node 20 (https://nodejs.org/en/download/).
2. `cd webapp`
3. `npm i`
4. `npm run dev`

## Deploy webapp to gh-pages

1. `cd webapp`
2. `npm run build`
3. clone this repo again into a different directory, checkout the branch `gh-pages`
4. delete everything in that directory except `.git`, copy everything from inside the `webapp/dist` directory in this repo to that repo's directory
5. add everything, commit, push