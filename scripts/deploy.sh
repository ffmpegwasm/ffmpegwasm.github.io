#!/bin/bash

pwd && yarn install
pwd && cp ./node_modules/@ffmpeg/core/dist/* ./public/static/js
yarn build
