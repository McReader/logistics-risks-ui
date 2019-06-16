import React, { useContext, useEffect, useState } from 'react';

import lensProp from 'ramda/es/lensProp';
import view from 'ramda/es/view';
import map from 'ramda/es/map';
import pipe from 'ramda/es/pipe';

import PageWithAppBar from '../../PageWithAppBar';

import CompaniesTable from './table/CompaniesTable';
import AppMenu from '../../menu/ui/AppMenu';
import AppContext from '../../AppContext';

const getRows = view(lensProp('rows'));
const mapDocs = map(view(lensProp('doc')));
const selectDocumentsList = pipe(
  getRows,
  mapDocs
);

function CompaniesTablePage({ history }) {
  const [state, setState] = useState({
    companies: [],
    isLoading: false,
    risks: []
  });
  const {
    services: { companies: companiesService, risks: risksService }
  } = useContext(AppContext);

  const fetchCompanies = async () => {
    setState({ isLoading: true });
    const response = await companiesService.getCompanies();
    setState({
      companies: selectDocumentsList(response),
      isLoading: false
    });
  };

  const fetchRisks = async () => {
    const response = await risksService.getList();
    setState(state => ({ ...state, risks: selectDocumentsList(response) }));
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

  const onRecalculate = categoryId => {
    risksService.calculate(categoryId);
  };

  return (
    <AppMenu>
      <PageWithAppBar isLoading={state.isLoading}>
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
