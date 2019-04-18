import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    height: '100%',
  },
};

function Page({ classes, children }) {
  return <div className={classes.root}>{ children }</div>
}

export default withStyles(styles)(Page);
