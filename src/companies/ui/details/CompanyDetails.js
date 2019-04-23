import React from 'react';
import { COMPANY_SHAPE } from '../constants';
import CompanyForm from "../form/CompanyForm";


function CompanyDetails({ company }) {
  return (
    <CompanyForm company={company} />
  );
}

CompanyDetails.propTypes = {
  company: COMPANY_SHAPE.isRequired,
};


export default CompanyDetails;
