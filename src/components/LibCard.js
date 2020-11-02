import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 192,
    width: 256,
    padding: '16px 0px',
  },
  img: {
    height: 64,
  },
  desc: {
    color: 'lightgrey',
  },
});

function LibCard({ img, title, desc }) {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Grid className={classes.root} container direction="column" alignItems="center" spacing={1}>
        <Grid item>
          <img className={classes.img} src={img} alt="card-img"/>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.desc}>
            {desc}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LibCard;
