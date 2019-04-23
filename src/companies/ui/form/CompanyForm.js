import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

import { COMPANY_SHAPE } from "../constants";


export default function CompanyForm({ company }) {
  return (
    <Grid container spacing={40} direction="column">
      <Grid
        item
      >
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name"
          defaultValue={company.name}
        />
      </Grid>
      <Grid
        item
      >
        <TextField
          fullWidth
          id="name"
          label="Faundation date"
          defaultValue={company.foundationDate}
        />
      </Grid>
    </Grid>
  );
}

CompanyForm.propTypes = {
  company: COMPANY_SHAPE.isRequired,
};
