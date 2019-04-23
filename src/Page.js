import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    height: '100%',
  },
};

function Page({ className, classes, children }) {
  return <div className={classnames(classes.root, className)}>{ children }</div>
}

export default withStyles(styles)(Page);
