import React, { useContext, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemLink from './ListItemLink';
import { DRAWER_WIDTH } from '../constants/config';
import { HomeContext } from '../context';
import pkg from '../../package.json';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Drawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { state: { drawerOpen }, dispatch } = useContext(HomeContext);
  const onExamplesToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
        <span>
          {pkg.dependencies['@ffmpeg/ffmpeg'].replace('^', 'v')}
        </span>
      </div>
      <Divider />
      <List>
        <ListItemLink to="/get-started" primary="Get Started" />
        <ListItem button onClick={onExamplesToggle}>
          <ListItemText primary="Examples" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemLink className={classes.nested} to="/examples/transcode" primary="Transcode" />
            <ListItemLink className={classes.nested} to="/examples/trim" primary="Trim" />
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <MuiDrawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerOpen}
          onClose={() => dispatch({ type: 'TOGGLE_DRAWER' })}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MuiDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
    </nav>
  );
}

export default Drawer;
