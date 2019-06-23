import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import PageWithAppBar from './PageWithAppBar';

const styles = ({ spacing }) => ({
  gridContainer: {
    justifyContent: 'center',
    paddingTop: spacing.unit * 4
  },
  formContainer: {
    flex: 1,
    maxWidth: '700px'
  }
});

function FormPage({ children, classes, isLoading, title, ...restProps }) {
  return (
    <PageWithAppBar
      {...restProps}
      classes={{ gridContainer: classes.gridContainer }}
      isLoading={isLoading}
    >
      <Grid
        className={classes.formContainer}
        container
        direction="column"
        wrap="nowrap"
        spacing={40}
      >
        <Grid component={Typography} item variant="title">
          {title}
        </Grid>
        <Grid item>{isLoading ? null : children}</Grid>
      </Grid>
    </PageWithAppBar>
  );
}

export default withStyles(styles)(FormPage);
