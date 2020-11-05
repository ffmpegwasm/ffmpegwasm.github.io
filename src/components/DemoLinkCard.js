import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 256,
    padding: '16px 16px',
  },
  img: {
    height: 32,
  },
});

function DemoLinkCard({ img, title, url }) {
  const classes = useStyles();
  return (
    <Link href={url} target="_blank" rel="noopener" color="inherit">
      <Paper>
        <Grid className={classes.root} container alignItems="center" justify="center" spacing={1}>
          <Grid item>
            <img className={classes.img} src={img} alt="card-img"/>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}

export default DemoLinkCard;
