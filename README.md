ffmpeg.wasm Homepage
==================

[![Netlify Status](https://api.netlify.com/api/v1/badges/b0e1bd73-a15c-4706-b5b1-993035c5bf2f/deploy-status)](https://app.netlify.com/sites/ffmpegwasm/deploys)
[![Deploy to Github Pages](https://github.com/ffmpegwasm/ffmpegwasm.github.io/actions/workflows/deploy-to-gh-pages.yml/badge.svg)](https://github.com/ffmpegwasm/ffmpegwasm.github.io/actions/workflows/deploy-to-gh-pages.yml)
![CodeQL](https://github.com/ffmpegwasm/ffmpegwasm.github.io/workflows/CodeQL/badge.svg)

Official homepage for ffmpeg.wasm.

## Development

```
$ yarn install
# copy ffmpeg.wasm-core assets
$ cp node_modules/@ffmpeg/core/dist/* public/static/js
$ yarn build
```

MIT License

Copyright (c) 2021 ffmpeg.wasm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
