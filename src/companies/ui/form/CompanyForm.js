import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Form, Field } from "react-final-form";
import format from 'date-fns/format';

import { required } from '../../../form/ui/validators';

import { getFoundationDate } from "../../domain/models/Company";

import { COMPANY_SHAPE } from "../constants";
import formatDate from "../../../shared/date/formatDate";


export default function CompanyForm({ company, onReset, onSubmit }) {
  const onSubmitAdapter = (values) => {
    onSubmit({
      ...values,
      foundationDate: new Date(values.foundationDate),
      charterCapital: Number(values.charterCapital),
    });
  };

  const formattedCompany = useMemo(() => {
    if (!company) {
      return company;
    }

    return {
      ...company,
      foundationDate: formatDate(getFoundationDate(company)),
    };
  }, [company]);

  return (
    <Form initialValues={formattedCompany} onSubmit={onSubmitAdapter} >
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
            <Field
              name="name"
              validate={required}
            >
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  autoFocus
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
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
                  placeholder="2/25/2012"
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
  company: COMPANY_SHAPE,
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
