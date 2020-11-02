import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const MY_LINK = 'https://jeromewu.github.io';

const useStyles = makeStyles({
  root: {
    height: 64,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container alignItems="center">
      <Typography variant="h6">
        Made by <Link href={MY_LINK} target="_blank" rel="noopener">@jeromewu</Link>. All rights reserved.
      </Typography>
    </Grid>
  );
}

export default Footer;
