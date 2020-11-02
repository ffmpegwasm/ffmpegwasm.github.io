import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createFFmpeg } from '@ffmpeg/ffmpeg';

const useStyles = makeStyles({
  root: {
    margin: '48px 0px 48px 0px',
  },
  progress: {
    width: '100%',
  },
});

const readFromBlobOrFile = (blob) => (
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target: { error: { code } } }) => {
      reject(Error(`File could not be read! Code=${code}`));
    };
    fileReader.readAsArrayBuffer(blob);
  })
);

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function FFmpeg({ args, inFilename, outFilename, mediaType }) {
  const classes = useStyles();
  const [videoSrc, setVideoSrc] = useState('');
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const onFileUploaded = async ({ target: { files } }) => {
    const file = new Uint8Array(await readFromBlobOrFile(files[0]));
    const ffmpeg = createFFmpeg({
      log: true,
      progress: ({ ratio }) => {
        setProgress(ratio * 100);
        if (ratio === 1) {
          setInterval(() => { setProgress(0); }, 3000)
        }
      }
    })
    setMessage('Loading FFmpeg.wasm');
    await ffmpeg.load();
    await ffmpeg.write(inFilename, file);
    setMessage('Start to run command');
    await ffmpeg.run(args.join(' '));
    setMessage('Done!');
    const data = ffmpeg.read(outFilename);
    ffmpeg.remove(outFilename);
    setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: mediaType })));
  };
  return (
    <Grid className={classes.root} container direction="column" alignItems="center" spacing={2}>
      {videoSrc.length === 0 ? null : (
        <Grid item>
          <video src={videoSrc} autoPlay controls></video>,
        </Grid>
      )}
      <Grid item>
        {progress !== 0 ? (
          <CircularProgressWithLabel
            variant="static"
            color="secondary"
            value={progress}
          />
        ) : (
          <Button
            variant="contained"
            component="label"
            color="secondary"
          >
            Upload a Video File
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={onFileUploaded}
            />
          </Button>
        )}
      </Grid>
      <Grid item>
        <Typography align="center">
          {`ARGS=${args.join(' ')}`}
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center">
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FFmpeg;
