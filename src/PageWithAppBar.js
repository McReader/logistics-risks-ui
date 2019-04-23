import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";

import SimpleAppBar from './SimpleAppBar';
import Page from './Page';


const styles = {
  gridContainer: {
    display: 'flex',
    flexGrow: 1,
    maxHeight: '100%',
    overflow: 'auto',
  },
  progress: {
    alignSelf: 'center',
    margin: 'auto',
  },
};


function PageWithAppBar({ appBar, className, classes, children, isLoading }) {
  return (
    <Page className={className}>
      { appBar }
      <div className={classes.gridContainer}>
        {isLoading ? <CircularProgress className={classes.progress}/> : children}
      </div>
    </Page>
  )
}

PageWithAppBar.propTypes = {
  appBar: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
};

PageWithAppBar.defaultProps = {
  appBar: <SimpleAppBar />,
  isLoading: false,
};

export default withStyles(styles)(PageWithAppBar);
