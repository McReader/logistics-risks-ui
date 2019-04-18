import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import CompaniesTablePage from './companies/ui/CompaniesTablePage';
import CompanyDetailsPage from './companies/ui/CompanyDetailsPage';
import LoginPage from './auth/ui/LoginPage';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={CompaniesTablePage} />
        <Route path="/details/:id" component={CompanyDetailsPage} />
      </Router>
    </div>
  );
}

export default App;
