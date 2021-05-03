import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import LibCard from './components/LibCard';
import x264 from './assets/x264.png';
import x265 from './assets/x265.webp';
import libvpx from './assets/libvpx.png';
import theora from './assets/theora.png';
import wavpack from './assets/wavpack.gif';
import lame from './assets/lame.gif';
import fdkaac from './assets/fdk-aac.svg';
import vorbis from './assets/vorbis.png';
import freetype from './assets/freetype.png';
import opus from './assets/opus.png';
import webp from './assets/webp.png';

const ISSUE_LINK = 'https://github.com/ffmpegwasm/ffmpeg.wasm/issues/61';

const EXTERNAL_LIBS = [
  {
    img: x264,
    title: 'x264',
    desc: 'H.264 codec',
  },
  {
    img: x265,
    title: 'x265',
    desc: 'H.265 codec',
  },
  {
    img: libvpx,
    title: 'libvpx',
    desc: 'VP8/VP9 codec',
  },
  {
    img: theora,
    title: 'theora',
    desc: 'OGV codec',
  },
  {
    img: wavpack,
    title: 'wavpack',
    desc: 'WAV/WV codec',
  },
  {
    img: lame,
    title: 'lame',
    desc: 'MP3 codec',
  },
  {
    img: fdkaac,
    title: 'fdk-aac',
    desc: 'AAC codec',
  },
  {
    img: vorbis,
    title: 'vorbis',
    desc: 'OGG codec',
  },
  {
    img: opus,
    title: 'opus',
    desc: 'OPUS codec',
  },
  {
    img: freetype,
    title: 'freetype2',
    desc: 'Font file renderer',
  },
  {
    img: freetype,
    title: 'libass',
    desc: 'subtitle renderer',
  },
  {
    img: webp,
    title: 'libwebp',
    desc: 'WEBP codec',
  },
];

const useStyles = makeStyles({
  root: {
    margin: '0px 0px 48px 0px',
  },
  desc: {
    margin: '8px 0px 24px 0px',
  },
});

function Libraries() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column" alignItems="center">
      <Typography variant="h4">
        External Libraries
      </Typography>
      <Typography className={classes.desc} variant="h6">
        ffmpeg.wasm is built with common external libraries, and more of libraries to be added!
        (You can request them <Link href={ISSUE_LINK} color="primary" target="_blank" rel="noopener">HERE</Link>)
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={4}>
        {
          EXTERNAL_LIBS.map(({ img, title, desc }) => (
            <Grid item key={title}>
              <LibCard
                img={img}
                title={title}
                desc={desc}
              />
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
}

export default Libraries;
