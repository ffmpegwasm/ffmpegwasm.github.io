import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import logo from './assets/images/logo.png';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#282c34',
    flex: 1,
    color: 'white',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '64px 8px 64px 8px',
    maxWidth: 672,
  },
  desc: {
    fontSize: 28,
  },
  logo: {
    width: 128,
    height: 128,
    margin: '0px 0px 16px 0px',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <div className={classes.root}>
        <div className={classes.main}>
          <img className={classes.logo} alt="logo" src={logo} />
          <p className={classes.desc}>
            ffmpeg.js is a pure Webassembly / Javascript port of FFmpeg.
            It supports video & audio record, convert and stream right inside the browser.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}
