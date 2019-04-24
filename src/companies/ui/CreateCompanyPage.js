import React from "react";
import PropTypes from "prop-types";

import SimpleAppBar from "../../SimpleAppBar";

import AppMenu from "../../menu/ui/AppMenu";
import FormPage from "../../FormPage";
import CompanyForm from "./form/CompanyForm";


function CreateCompanyPage({ history }) {
  const appBar = (
    <SimpleAppBar
      title="Create new company"
    />
  );

  const onReset = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const onSubmit = (values) => {
    console.log(values);
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
