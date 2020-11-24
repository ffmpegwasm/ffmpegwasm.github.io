import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 160,
    width: 200,
    padding: '16px 0px',
  },
  img: {
    height: 64,
  },
});

function TemplateCard({ img, title, url }) {
  const classes = useStyles();
  return (
    <Link href={url} target="_blank" rel="noopener" color="inherit">
      <Paper>
        <Grid className={classes.root} container direction="column" alignItems="center" spacing={1}>
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

export default TemplateCard;
