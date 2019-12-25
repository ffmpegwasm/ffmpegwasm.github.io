import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { DRAWER_WIDTH } from '../constants/config';
import { HomeContext } from '../context';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBar() {
  const classes = useStyles();
  const { dispatch } = useContext(HomeContext);

  return (
    <MuiAppBar color="inherit" position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          ffmpeg.js
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
