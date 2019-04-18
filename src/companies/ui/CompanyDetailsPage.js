import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import PageWithAppBar from "../../PageWithAppBar";
import SimpleAppBar from "../../SimpleAppBar";

import getCompanyById from "../domain/services/getCompanyById";
import CompanyDetails from "./details/CompanyDetails";
import AppMenu from "../../menu/ui/AppMenu";


function CompanyDetailsPage({ match }) {
  const [state, setState] = useState({
    company: null,
    isLoading: true
  });

  const companyId = Number(match.params.id);
  const { company, isLoading } = state;

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
      title={isLoading ? "Please wait..." : (company.name || undefined)}
    />
  );

  return (
    <AppMenu>
      <PageWithAppBar
        appBar={appBar}
        isLoading={state.isLoading}
      >
        {!isLoading && company ? (
          <CompanyDetails company={company}/>
        ) : null}
      </PageWithAppBar>
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
