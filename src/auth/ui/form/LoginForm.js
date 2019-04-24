import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { required } from '../../../form/ui/validators';


function LoginForm({ className, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitError, submitting }) => (
        <Grid
          alignContent="center"
          className={className}
          component="form"
          container
          onSubmit={handleSubmit}
          spacing={40}
        >
          {submitError ? (
            <Grid
              color="error"
              component={Typography}
              item
              xs={12}
            >
              {submitError}
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Field
              name="login"
              validate={required}
            >
              {({ input, meta: { error, touched, submitError } }) => (
                <TextField
                  {...input}
                  autoFocus
                  error={touched && Boolean(error || submitError)}
                  fullWidth
                  helperText={touched && (error || submitError)}
                  placeholder="Login"
                />
              )}
            </Field>
          </Grid>

          <Grid item xs={12}>
            <Field
              name="password"
              validate={required}
            >
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
                  placeholder="Password"
                  type="password"
                />
              )}
            </Field>
          </Grid>

          <Grid item xs={12}>
            <Button
              color="primary"
              disabled={submitting}
              fullWidth
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      )}
    </Form>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
  className: ""
};

export default LoginForm;
