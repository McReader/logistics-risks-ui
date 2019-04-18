import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function LoginForm({ className }) {
  return (
    <Grid
      alignContent="center"
      className={className}
      component="form"
      container
      spacing={40}
    >
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="login"
          placeholder="Login"
          error
          helperText="test"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="password"
          placeholder="Password"
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LoginForm;
