import React from 'react';
import { Field, Form } from 'react-final-form';

import either from 'ramda/es/either';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

import { required, isDataValid, isNumber } from '../../../form/ui/validators';

export default function PaymentForm({ onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <Grid
          alignItems="center"
          container
          direction="row"
          spacing={32}
          wrap="nowrap"
        >
          <Grid item>
            <Field name="date" validate={either(required, isDataValid)}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
                  label="Date"
                  placeholder="2/25/2012"
                />
              )}
            </Field>
          </Grid>
          <Grid item>
            <Field name="amount" validate={either(required, isNumber)}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
                  label="Amount"
                  placeholder="1000"
                />
              )}
            </Field>
          </Grid>
          <Grid item>
            <Field name="description" validate={required}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  error={touched && Boolean(error)}
                  fullWidth
                  helperText={touched && error}
                  label="Description"
                />
              )}
            </Field>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              disabled={submitting}
              onClick={handleSubmit}
              size="small"
              variant="outlined"
            >
              <Add fontSize="small" />
            </Button>
          </Grid>
        </Grid>
      )}
    </Form>
  );
}
