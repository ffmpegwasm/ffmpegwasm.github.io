#!/bin/bash

yarn install
cp node_modules/@ffmpeg/core/dist/* public/static/js
yarn build
