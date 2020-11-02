import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import vsDark from 'prism-react-renderer/themes/vsDark';
import FFmpeg from './components/FFmpeg';

const FFMPEG_WASM_CODE = `
<FFmpeg
  args={['-i', 'video.avi', '-c:v', 'libx264', 'video.mp4']}
  inFilename="video.avi"
  outFilename="video.mp4"
  mediaType="video/mp4"
/>
`.trim('\n');

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
  return (
    <Grid className={classes.root} container direction="column" >
      <Typography align="center" variant="h4">
        Demo
      </Typography>
      <Typography className={classes.para} align="center" variant="h6">
        Try ffmpeg.wasm now!
      </Typography>
      <LiveProvider
        theme={vsDark}
        code={FFMPEG_WASM_CODE}
        scope={{ FFmpeg }}
      >
        <LivePreview />
        <Typography>
          You can edit the code block below to test your scenario:
        </Typography>
        <LiveEditor style={{ fontSize: 18, marginTop: 8 }}/>
        <LiveError />
    </LiveProvider>
    </Grid>
  );
}

export default Demo;
