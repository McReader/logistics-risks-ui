import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CompaniesTablePage from './companies/ui/CompaniesTablePage';
import CompanyDetailsPage from './companies/ui/CompanyDetailsPage';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={CompaniesTablePage} />
        <Route path="/details/:id" component={CompanyDetailsPage} />
      </Router>
    </div>
  );
}

export default App;
