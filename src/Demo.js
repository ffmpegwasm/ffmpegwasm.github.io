import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import vsDark from 'prism-react-renderer/themes/vsDark';
import FFmpeg from './components/FFmpeg';

const TESTDATA_URL = 'https://github.com/ffmpegwasm/testdata';

const CONFIGS = {
  x264: `
{
  args: ['-i', 'video.avi', '-c:v', 'libx264', 'video.mp4'],
  inFilename: 'video.avi',
  outFilename: 'video.mp4',
  mediaType: 'video/mp4',
}`.trim('\n'),
  libvpx: `
{
  args: ['-i', 'video.avi', '-c:v', 'libvpx', 'video.webm'],
  inFilename: 'video.avi',
  outFilename: 'video.webm',
  mediaType: 'video/webm',
}`.trim('\n'),
  lame: `
{
  args: ['-i', 'audio.wav', '-c:v', 'libmp3lame', 'audio.mp3'],
  inFilename: 'audio.wav',
  outFilename: 'audio.mp3',
  mediaType: 'audio/mp3',
}`.trim('\n'),
};

const useStyles = makeStyles({
  root: {
    margin: '48px 0px 48px 0px',
  },
  para: {
    margin: '16px 0px 24px 0px',
  },
});

function Demo() {
  const classes = useStyles();
  const [config, setConfig] = useState('x264');
  const onConfigChanged = (evt) => {
    setConfig(evt.target.value);
  };
  const IS_COMPATIBLE = typeof SharedArrayBuffer === 'function';
  return (
    <Grid className={classes.root} container direction="column" >
      <Typography align="center" variant="h4">
        Demo
      </Typography>
      <Typography className={classes.para} align="center" variant="h6">
        Try ffmpeg.wasm now!
      </Typography>
      {
        !IS_COMPATIBLE ? (
          <Typography align="center" variant="h6">
            Your browser doesn't support SharedArrayBuffer, thus ffmpeg.wasm cannot execute. Please use latest version of Chromium or any other browser supports SharedArrayBuffer.
          </Typography>
        ) : (
          <>
            <LiveProvider
              theme={vsDark}
              code={CONFIGS[config]}
              scope={{ FFmpeg }}
              transformCode={(code) => (
                `() => { const props=${code}; return <FFmpeg {...props} />;}`
              )}
            >
              <LivePreview />
              <Grid container justify="space-between" alignItems="flex-end">
                <Grid item>
                  <Typography>
                    Edit the code block below to test your scenario (<Link href={TESTDATA_URL} target="_blank" rel="noopener" color="secondary">Download Sample Video/Audio</Link>):
                  </Typography>
                </Grid>
                <Grid item>
                  <InputLabel id="config-select-label">Choose a sample config</InputLabel>
                  <Select
                    labelId="config-select-label"
                    id="config-select"
                    value={config}
                    onChange={onConfigChanged}
                  >
                    <MenuItem value="x264">x264 (mp4)</MenuItem>
                    <MenuItem value="libvpx">libvpx (webm)</MenuItem>
                    <MenuItem value="lame">lame (mp3)</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <LiveEditor style={{ fontSize: 18, marginTop: 8 }}/>
              <LiveError />
            </LiveProvider>
          </>
        )
      }
    </Grid>
  );
}

export default Demo;
