import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function StarRating(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name='half-rating'
        defaultValue={props.rating}
        precision={0.5}
        readOnly={true}
      />
    </div>
  );
}

export default StarRating;
