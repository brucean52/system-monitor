import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CpuLoadCard = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.data.map( (item, index) => {
        return (
          <div key={item.name}>
          <h6>{item.name}: {item.value}%</h6>
            <div>
              <LinearProgress variant="determinate" value={item.value} />
            </div> 
          </div>
        )
      })}
    </div>
  );
}

export default CpuLoadCard;
