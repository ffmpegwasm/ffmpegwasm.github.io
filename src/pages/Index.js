import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '64px 12px 64px 12px',
    maxWidth: 684,
  },
  desc: {
    fontSize: 24,
  },
  logo: {
    width: 128,
    height: 128,
    margin: '0px 0px 32px 0px',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <img className={classes.logo} alt="logo" src={logo} />
      <Typography paragraph className={classes.desc}>
        ffmpeg.js is a pure Webassembly / Javascript port of FFmpeg.
        It enables video & audio record, convert and stream right inside the browser.
      </Typography>
    </div>
  );
};
