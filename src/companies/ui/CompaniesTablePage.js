import React, { useContext, useEffect, useState } from "react";

import PageWithAppBar from "../../PageWithAppBar";

import CompaniesTable from "./table/CompaniesTable";
import AppMenu from "../../menu/ui/AppMenu";
import AppContext from "../../AppContext";


function CompaniesTablePage({ history }) {
  const [state, setState] = useState({
    companies: [],
    isLoading: false,
    risks: []
  });
  const { services: { companies: companiesService } } = useContext(AppContext);

  const fetchCompanies = async () => {
    setState({ isLoading: true });
    const companies = await companiesService.getCompanies();
    setState({
      companies,
      isLoading: false
    });
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const onAddButtonClick = () => {
    history.push({ pathname: '/company/' });
  };

  return (
    <AppMenu>
      <PageWithAppBar
        isLoading={state.isLoading}
      >
        <CompaniesTable
          companies={state.companies}
          onAddButtonClick={onAddButtonClick}
        />
      </PageWithAppBar>
    </AppMenu>
  );
}

export default CompaniesTablePage;
