import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import SimpleAppBar from "../../SimpleAppBar";

import AppMenu from "../../menu/ui/AppMenu";
import FormPage from "../../FormPage";
import CompanyForm from "./form/CompanyForm";
import AppContext from "../../AppContext";


function EditCompanyPage({ match, history }) {
  const [state, setState] = useState({
    company: null,
    isLoading: true
  });
  const { services: { companies: companiesService } } = useContext(AppContext);

  const companyId = match.params.id;
  const { company, isLoading } = state;

  const companyName = isLoading ? '' : company.name;

  const fetchCompany = async () => {
    setState(state => ({ ...state, isLoading: true }));
    try {
      const result = await companiesService.getCompanyById(companyId);
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

  const onReset = (e) => {
    e.preventDefault();
    history.replace({ pathname: '/' });
  };

  const onSubmit = async (values) => {
    await companiesService.editCompany(company, values);
    history.replace({ pathname: '/' });
  };

  return (
    <AppMenu>
      <FormPage
        appBar={appBar}
        isLoading={state.isLoading}
        title={`Edit ${companyName}`}
      >
        <CompanyForm
          company={company}
          onReset={onReset}
          onSubmit={onSubmit}
        />
      </FormPage>
    </AppMenu>
  );
}

EditCompanyPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default EditCompanyPage;
