import React from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Form, Field } from "react-final-form";

import { required } from '../../../form/ui/validators';

import { COMPANY_SHAPE } from "../constants";


export default function CompanyForm({ company, onReset, onSubmit }) {
  return (
    <Form initialValues={company} onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <Grid
          component="form"
          container
          direction="column"
          onReset={onReset}
          onSubmit={handleSubmit}
          spacing={40}
        >
          <Grid item>
            <Field name="name">
              {({ input }) => (
                <TextField
                  {...input}
                  autoFocus
                  fullWidth
                  label="Name"
                />
              )}
            </Field>
          </Grid>
          <Grid item>
            <Field
              name="foundationDate"
              validate={required}
            >
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
                  label="Foundation date"
                />
              )}
            </Field>
          </Grid>
          <Grid item>
            <Field
              name="charterCapital"
              validate={required}
            >
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
                  label="Charter capital"
                  type="number"
                />
              )}
            </Field>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="flex-end"
              spacing={16}
            >
              <Grid item>
                <Button type="reset">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  disabled={submitting}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Form>
  );
}

CompanyForm.propTypes = {
  company: COMPANY_SHAPE.isRequired,
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
