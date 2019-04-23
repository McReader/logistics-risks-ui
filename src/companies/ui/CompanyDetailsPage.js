import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import PageWithAppBar from "../../PageWithAppBar";
import SimpleAppBar from "../../SimpleAppBar";

import getCompanyById from "../domain/services/getCompanyById";
import CompanyDetails from "./details/CompanyDetails";
import AppMenu from "../../menu/ui/AppMenu";
import FormPage from "../../FormPage";


function CompanyDetailsPage({ match }) {
  const [state, setState] = useState({
    company: null,
    isLoading: true
  });

  const companyId = Number(match.params.id);
  const { company, isLoading } = state;

  const companyName = isLoading ? '' : company.name;

  const fetchCompany = async () => {
    setState(state => ({ ...state, isLoading: true }));
    try {
      const result = await getCompanyById(companyId);
      setState(state => ({
        ...state,
        company: result
      }));
    } finally {
      setState(state => ({
        ...state,
        isLoading: false
      }));
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  const appBar = (
    <SimpleAppBar
      title={isLoading ? "Please wait..." : companyName}
    />
  );

  return (
    <AppMenu>
      <FormPage
        appBar={appBar}
        isLoading={state.isLoading}
        title={`Edit ${companyName}`}
      >
        <CompanyDetails company={company}/>
      </FormPage>
    </AppMenu>
  );
}

CompanyDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CompanyDetailsPage;
