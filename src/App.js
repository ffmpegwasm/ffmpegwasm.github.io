import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Index from './pages/Index';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
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
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <HomeProvider>
        <Router>
          <AppBar />
          <Drawer />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/get-started">
                <p>Get Started</p>
              </Route>
              <Route path="/examples/transcode">
                <p>Transcode Example</p>
              </Route>
              <Route path="/examples/trim">
                <p>Trim Example</p>
              </Route>
            </Switch>
          </div>
        </Router>
      </HomeProvider>
    </ThemeProvider>
  );
}
