import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const required = (value) => Boolean(value) ? undefined : 'Value is required';

function LoginForm({ className, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Grid
          alignContent="center"
          className={className}
          component="form"
          container
          onSubmit={handleSubmit}
          spacing={40}
        >
          <Grid item xs={12}>
            <Field
              name="login"
              validate={required}
            >
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  autoFocus
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
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
