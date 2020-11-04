import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import logo from './assets/logo.svg';

// const ICON_WIDTH = 4;

const DOC_URL = 'https://github.com/ffmpegwasm/ffmpeg.wasm/blob/master/docs/api.md';

const useStyles = makeStyles({
  root: {
    height: 512,
  },
  logo: {
    width: '70%',
    height: '70%',
  },
  docBtn: {
    margin: '0px 8px',
  },
});

function Banner() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container alignItems="center">
      {/*
      <Grid item xs={ICON_WIDTH}>
        <Grid container alignItems="center" justify="flex-end">
          <img className={classes.logo} src={logo} alt="banner-logo" />
        </Grid>
      </Grid>
      */}
      <Grid item xs={12}>
        <Grid container direction="column" alignItems="flex-start" spacing={4}>
          <Grid item>
            <Typography variant="h3">
              FFMPEG.WASM
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              ffmpeg.wasm is a pure WebAssembly / JavaScript port of FFmpeg. It enables video & audio record, convert and stream right inside browsers.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" href="#installation">Get Started</Button>
            <Button className={classes.docBtn} variant="outlined" href={DOC_URL} target="_blank" rel="noopener">Documentation</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;
