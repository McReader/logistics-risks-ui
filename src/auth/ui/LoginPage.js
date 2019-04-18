import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { FORM_ERROR } from "final-form";

import Page from '../../Page';

import authenticate from '../domain/services/authenticate';

import LoginForm from './form/LoginForm';
import UserNotFoundError from "../domain/errors/UserNotFoundError";
import IncorrectPasswordError from "../domain/errors/IncorrectPasswordError";


const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 8,
  },
  form: {
    margin: `${theme.spacing.unit * 8}px auto`,
    maxWidth: '360px',
  }
});

function LoginPage({ classes, history }) {
  const onSubmit = async (values) => {
    try {
      await authenticate(values);
      history.replace({ pathname: '/' });
    } catch(e) {
      if (e instanceof UserNotFoundError) {
        return { login: e.message };
      } else if (e instanceof IncorrectPasswordError) {
        return { [FORM_ERROR]: 'Incorrect credentials' };
      }

      throw e;
    }
  };

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

      <LoginForm
        className={classes.form}
        onSubmit={onSubmit}
      />
    </Page>
  );
}

export default withStyles(styles)(LoginPage);
