import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import logo from './assets/images/logo.png';
import { DRAWER_WIDTH } from './constants/config';
import { HomeProvider } from './context';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#282c34',
    flex: 1,
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
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

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <HomeProvider>
        <AppBar />
        <Drawer />
        <div className={classes.root}>
          <div className={classes.main}>
            <img className={classes.logo} alt="logo" src={logo} />
            <Typography paragraph className={classes.desc}>
              ffmpeg.js is a pure Webassembly / Javascript port of FFmpeg.
              It enables video & audio record, convert and stream right inside the browser.
            </Typography>
          </div>
        </div>
      </HomeProvider>
    </ThemeProvider>
  );
}
