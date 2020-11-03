import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TemplateCard from './components/TemplateCard';
import react from './assets/react.png';
import js from './assets/js.png';

const TEMPLATES = [
  {
    img: react,
    title: 'React',
    url: 'https://github.com/ffmpegwasm/react-app',
  },
  {
    img: js,
    title: 'JS (Browser)',
    url: 'https://github.com/ffmpegwasm/ffmpeg.wasm/tree/master/examples/browser',
  },
  {
    img: js,
    title: 'JS (Node)',
    url: 'https://github.com/ffmpegwasm/ffmpeg.wasm/tree/master/examples/node',
  }
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
        Use ffmpeg.wasm the way you like!
      </Typography>
      <Typography className={classes.desc} variant="h6">
        Template repositories for you to quick adopt ffmpeg.wasm into your project!
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={4}>
        {
          TEMPLATES.map(({ img, url, title }) => (
            <Grid item key={title}>
              <TemplateCard img={img} url={url} title={title} />
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
}

export default WriteUps;
