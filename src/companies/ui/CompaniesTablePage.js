import React, { useEffect, useState } from 'react';

import PageWithAppBar from '../../PageWithAppBar';

import CompaniesTable from './table/CompaniesTable';
import getCompanies from '../domain/services/getCompanies';


function CompaniesTablePage() {
  const [state, setState] = useState({
    companies: [],
    isLoading: false,
    risks: [],
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
    <PageWithAppBar isLoading={state.isLoading}>
      <CompaniesTable companies={state.companies} />
    </PageWithAppBar>
  );
}

export default CompaniesTablePage;
