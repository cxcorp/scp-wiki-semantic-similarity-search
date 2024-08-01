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
3. Build the customized sql.js with emscripten
   1. install Docker if you don't already have it
   2. `cd webapp`
   3. `docker build -t sqljs-builder -f sqljs-builder.Dockerfile .`
   4. `docker run --rm -it -v "$(pwd)/vendor/sql.js:/src" sqljs-builder npm run build`
4. now, back in the `webapp` directory
5. `npm i`
6. `npm run dev`

## Deploy webapp to gh-pages

1. `cd webapp`
2. `npm run build`
3. clone this repo again into a different directory, checkout the branch `gh-pages`
4. delete everything in that directory except `.git`, copy everything from inside the `webapp/dist` directory in this repo to that repo's directory
5. add everything, commit, push

## License

### The code in this repository

The content of this repository is licensed under the GPLv3 license (see `LICENSE-GPLv3` for full license terms), with some exceptions. The git submodules have their own licensing information. The data files `corpus.txt`, `hubs.sqlite` and `matches.bin` are content relating to or derived from content relating to the SCP Foundation, have a different license. See next section.

```
scp-wiki-semantic-similarity-search
Copyright (C) 2024  Joona Heikkilä

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

### Content derived from SCP Foundation content

The data files `corpus.txt`, `hubs.sqlite` and `matches.bin` whose contents are presented in the web app are content relating to or derived from content relating to the SCP Foundation. Content relating to the SCP Foundation, including the SCP Foundation logo, is licensed under [Creative Commons Attribution-Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (CC BY-SA 3.0) and all concepts originate from https://scpwiki.com/ and its authors. The aforementioned data files, being derived from this content, are hereby also released under Creative Commons Attribution-Sharealike 3.0 (CC BY-SA 3.0).
