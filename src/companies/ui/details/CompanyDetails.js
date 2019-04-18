import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { COMPANY_SHAPE } from '../constants';


function CompanyDetails({ company }) {
  return (
    <Grid container spacing={40}>
      <Grid
        item
        xs={6}
      >
        <TextField
          autoFocus
          id="name"
          label="Name"
          defaultValue={company.name}
        />
      </Grid>
    </Grid>
  );
}

CompanyDetails.propTypes = {
  company: COMPANY_SHAPE.isRequired,
};


export default CompanyDetails;
