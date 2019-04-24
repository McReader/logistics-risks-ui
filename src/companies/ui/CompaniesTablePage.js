import React, { useContext, useEffect, useState } from "react";

import PageWithAppBar from "../../PageWithAppBar";

import CompaniesTable from "./table/CompaniesTable";
import AppMenu from "../../menu/ui/AppMenu";
import AppContext from "../../AppContext";


function CompaniesTablePage({ history }) {
  const [state, setState] = useState({
    companies: [],
    isLoading: false,
    risks: [],
  });
  const { services: { companies: companiesService, risks: risksService } } = useContext(AppContext);

  const fetchCompanies = async () => {
    setState({ isLoading: true });
    const companies = await companiesService.getCompanies();
    setState({
      companies,
      isLoading: false
    });
  };

  const fetchRisks = async () => {
    const risks = await risksService.getList();
    setState(state => ({ ...state, risks }));
  };

  useEffect(() => {
    fetchCompanies();
    risksService.subscribe(() => {
      fetchRisks();
    });
    fetchRisks();
    return () => {
      risksService.unsubscribe();
    };
  }, []);

  const onAddButtonClick = () => {
    history.push({ pathname: '/company/' });
  };

  const onRecalculate = (categoryId) => {
    risksService.calculate(categoryId);
  };

  return (
    <AppMenu>
      <PageWithAppBar
        isLoading={state.isLoading}
      >
        <CompaniesTable
          companies={state.companies}
          onAddButtonClick={onAddButtonClick}
          onRecalculate={onRecalculate}
          risks={state.risks}
        />
      </PageWithAppBar>
    </AppMenu>
  );
}

export default CompaniesTablePage;
