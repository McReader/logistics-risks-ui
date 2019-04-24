import React, { useContext } from "react";
import PropTypes from "prop-types";

import SimpleAppBar from "../../SimpleAppBar";

import AppMenu from "../../menu/ui/AppMenu";
import FormPage from "../../FormPage";
import CompanyForm from "./form/CompanyForm";
import AppContext from "../../AppContext";


function CreateCompanyPage({ history }) {
  const { services: { companies } } = useContext(AppContext);

  const appBar = (
    <SimpleAppBar
      title="Create new company"
    />
  );

  const onReset = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.replace('/');
  };

  const onSubmit = async (values) => {
    await companies.createCompany(values);
    history.replace('/');
  };

  return (
    <AppMenu>
      <FormPage
        appBar={appBar}
        title={`Create new company`}
      >
        <CompanyForm
          onReset={onReset}
          onSubmit={onSubmit}
        />
      </FormPage>
    </AppMenu>
  );
}

CreateCompanyPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default CreateCompanyPage;
