#!/bin/bash

wget https://github.com/ffmpegwasm/ffmpeg.wasm-core/releases/download/v0.10.0/ffmpeg-core.zip
unzip ffmpeg-core.zip -d public/static/js
yarn install
yarn build
