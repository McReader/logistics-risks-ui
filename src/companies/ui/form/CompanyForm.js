import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

import append from 'ramda/es/append';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography/Typography';

import formatDate from '@logistics-calc/date-utils/src/formatDate';
import {
  getFoundationDate,
  getPaymentHistory
} from '@logistics-calc/companies/src/domain/models/Company';
import { create as createPayment } from '@logistics-calc/companies/src/domain/models/Payment';

import { required, isDataValid } from '../../../form/ui/validators';
import Permit from '../../../priveleges/Permit';

import PaymentHistory from '../payment-history/PaymentHistory';
import PaymentForm from '../payment-form/PaymentForm';

import { COMPANY_SHAPE } from '../constants';

export default function CompanyForm({ company, onReset, onSubmit }) {
  const onSubmitAdapter = values => {
    onSubmit({
      ...values,
      foundationDate: new Date(values.foundationDate),
      charterCapital: Number(values.charterCapital)
    });
  };

  const formattedCompany = useMemo(() => {
    if (!company) {
      return company;
    }

    return {
      ...company,
      foundationDate: formatDate(getFoundationDate(company)),
      paymentHistory: getPaymentHistory(company)
    };
  }, [company]);

  return (
    <Form initialValues={formattedCompany} onSubmit={onSubmitAdapter}>
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
            <Field name="name" validate={required}>
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
              validate={value => required(value) || isDataValid(value)}
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
            <Field name="charterCapital" validate={required}>
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

          <Field name="paymentHistory">
            {({ input: { value, onChange } }) => (
              <>
                <Permit>
                  <Grid item>
                    <Typography variant="caption">New payment</Typography>

                    <PaymentForm
                      onSubmit={values => {
                        const payment = createPayment({
                          date: new Date(values.date),
                          amount: Number(values.amount),
                          plannedDate: new Date(values.plannedDate)
                        });
                        onChange(append(payment, value));
                      }}
                    />
                  </Grid>
                </Permit>

                <Grid item>
                  <Typography variant="caption">Payment history</Typography>
                  <PaymentHistory paymentHistory={value} />
                </Grid>
              </>
            )}
          </Field>

          <Grid item>
            <Grid container justify="flex-end" spacing={16}>
              <Grid item>
                <Button type="reset">Cancel</Button>
              </Grid>
              <Permit>
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
              </Permit>
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
  onSubmit: PropTypes.func.isRequired
};
