import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import WriteUpCard from './components/WriteUpCard';
import ffmpegWasmTuorialCover from './assets/ffmpeg-wasm-cover.png';
import ffmpegWasmPostPreview from './assets/ffmpeg-wasm-post-preview.png';

const WRITE_UPS = [
  {
    img: ffmpegWasmPostPreview,
    url: 'https://jeromewu.github.io/ffmpeg-wasm-a-pure-webassembly-javascript-port-of-ffmpeg/',
    title: 'FFmpeg.wasm, a pure WebAssembly / JavaScript port of FFmpeg',
    desc: 'Introduction to ffmpeg.wasm and technical details behind',
  },
  {
    img: ffmpegWasmTuorialCover,
    url: 'https://jeromewu.github.io/build-ffmpeg-webassembly-version-part-1-preparation/',
    title: 'Build FFmpeg WebAssembly version (= ffmpeg.wasm): Part.1 Preparation',
    desc: 'A series of tutorials of using Emscripten to build ffmpeg',
  },
  {
    img: ffmpegWasmTuorialCover,
    url: 'https://jeromewu.github.io/build-ffmpeg-webassembly-version-part-2-compile-with-emscripten/',
    title: 'Build FFmpeg WebAssembly version (= ffmpeg.wasm): Part.2 Compile with Emscripten',
    desc: 'A series of tutorials of using Emscripten to build ffmpeg',
  },
  {
    img: ffmpegWasmTuorialCover,
    url: 'https://jeromewu.github.io/build-ffmpeg-webassembly-version-part-3-v0.1/',
    title: 'Build FFmpeg WebAssembly version (= ffmpeg.wasm): Part.3 ffmpeg.wasm v0.1 — Transcoding avi to mp4',
    desc: 'A series of tutorials of using Emscripten to build ffmpeg',
  },
  {
    img: ffmpegWasmTuorialCover,
    url: 'https://jeromewu.github.io/build-ffmpeg-webassembly-version-part-4-v0.2/',
    title: 'Build FFmpeg WebAssembly version (= ffmpeg.wasm): Part.4 ffmpeg.wasm v0.2 — Add Libx264',
    desc: 'A series of tutorials of using Emscripten to build ffmpeg',
  },
];

const useStyles = makeStyles({
  root: {
    margin: '48px 0px 48px 0px',
  },
  desc: {
    margin: '8px 0px 24px 0px',
  },
});

function WriteUps() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column" alignItems="center">
      <Typography variant="h4">
        Useful Write-Ups
      </Typography>
      <Typography className={classes.desc} variant="h6">
        These write-ups can help know more details about ffmpeg.wasm, and even help you to build your own ffmpeg.wasm!
      </Typography>
      <Grid container direction="column" spacing={6}>
        {
          WRITE_UPS.map(({ img, url, title, desc }) => (
            <Grid item key={title}>
              <WriteUpCard img={img} url={url} title={title} desc={desc} />
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
}

export default WriteUps;
