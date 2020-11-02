import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import millify from 'millify';
import logo from './assets/logo.svg';

const TITLE_WIDTH = 6;
const GH_API_URL = 'https://api.github.com/repos/ffmpegwasm/ffmpeg.wasm';
const GH_URL = 'https://github.com/ffmpegwasm/ffmpeg.wasm';

const useStyles = makeStyles({
  root: {
    height: 64,
  },
  logo: {
    width: 32,
    height: 32,
  },
  starRoot: {
    padding: '4px 4px',
    margin: '0px 8px',
  },
  starText: {
    paddingLeft: 4,
  },
});

function AppBar() {
  const classes = useStyles();
  const [star, setStar] = useState('----');
  fetch(GH_API_URL)
    .then(res => res.json())
    .then(({ stargazers_count }) => setStar(millify(stargazers_count)));
  return (
    <Grid container direction="row" alignItems="center" className={classes.root}>
      <Grid item xs={TITLE_WIDTH}>
        <img src={logo} className={classes.logo} alt="logo" />
      </Grid>
      <Grid
        item
        xs={12 - TITLE_WIDTH}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="flex-end"
        >
          <IconButton
            aria-label="github"
            href={GH_URL}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <Paper>
            <Grid
              className={classes.starRoot}
              container
              direction="row"
              alignItems="center"
            >
              <StarIcon />
              <Typography className={classes.starText}>
                {star}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AppBar;
