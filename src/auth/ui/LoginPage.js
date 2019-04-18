import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import Page from '../../Page';

import LoginForm from './form/LoginForm';


const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 8,
  },
  form: {
    margin: `${theme.spacing.unit * 8}px auto`,
    maxWidth: '360px',
  }
});

function LoginPage({ classes }) {
  return (
    <Page classes={{ root: classes.root }}>
      <Typography
        align="center"
        paragraph={false}
        variant="title"
      >
        Welcome
      </Typography>

      <Typography
        align="center"
        color="textSecondary"
      >
        to
      </Typography>

      <Typography
        align="center"
        color="primary"
        variant="headline"
      >
        Logistics Risks Calculator
      </Typography>

      <LoginForm className={classes.form} />
    </Page>
  );
}

export default withStyles(styles)(LoginPage);
