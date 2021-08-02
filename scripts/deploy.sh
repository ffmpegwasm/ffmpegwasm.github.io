#!/bin/bash

yarn install
ls -l node_modules
mv node_modules/@ffmpeg/core/dist/* public/static/js
yarn build
