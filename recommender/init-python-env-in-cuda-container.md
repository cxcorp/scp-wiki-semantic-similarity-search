# Steps for installing stuff inside a CUDA container

```sh
docker run --rm -it nvidia/cuda:12.1.1-devel-ubuntu22.04 bash
```

```sh
apt-get update && apt-get install -y build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev curl git \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

curl https://pyenv.run | bash

export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

cd /repo
pyenv install

python -m venv .venv-docker
source .venv-docker/bin/activate
pip install --upgrade pip

pip install -r requirements.txt

# https://pytorch.org/get-started/locally/
# stable -> linux -> pip -> python -> cuda 12.1
pip install torch torchvision torchaudio


# install xformers
# https://huggingface.co/Alibaba-NLP/new-impl#recommendation-enable-unpadding-and-acceleration-with-xformers
pip install xformers --index-url https://download.pytorch.org/whl/cu121
pip install triton setuptools

# sbert
pip install sentence-transformers

# run
python -m recommender.recommend
chown 1000:1000 <created files here>
```
