import React, { useEffect, useState } from "react";

import PageWithAppBar from "../../PageWithAppBar";

import CompaniesTable from "./table/CompaniesTable";
import getCompanies from "../domain/services/getCompanies";
import AppMenu from "../../menu/ui/AppMenu";


function CompaniesTablePage() {
  const [state, setState] = useState({
    companies: [],
    isLoading: false,
    risks: []
  });

  const fetchCompanies = async () => {
    setState({ isLoading: true });
    const companies = await getCompanies();
    setState({
      companies,
      isLoading: false
    });
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <AppMenu>
      <PageWithAppBar
        isLoading={state.isLoading}
      >
        <CompaniesTable companies={state.companies}/>
      </PageWithAppBar>
    </AppMenu>
  );
}

export default CompaniesTablePage;
