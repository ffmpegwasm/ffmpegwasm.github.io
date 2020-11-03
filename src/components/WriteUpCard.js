import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 192,
    padding: '16px 32px',
  },
  img: {
    width: 224,
  },
  desc: {
    margin: '16px 0px 0px 0px',
    color: 'lightgrey',
  },
});

function WriteUpCard({ img, url, title, desc }) {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Grid className={classes.root} container justify="space-between" spacing={4}>
        <Grid item xs={8}>
          <Typography variant="h6">
            <Link href={url} target="_blank" rel="noopener" color="inherit">{title}</Link>
          </Typography>
          <Typography className={classes.desc}>
            {desc}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img className={classes.img} src={img} alt="card-img"/>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default WriteUpCard;
