FROM emscripten/emsdk:3.1.64

WORKDIR /src

RUN apt-get update \
  && apt-get install -y libdigest-sha3-perl \
  && rm -rf /var/lib/apt/lists/*
