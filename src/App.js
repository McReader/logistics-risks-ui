import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import CompaniesTablePage from "./companies/ui/CompaniesTablePage";
import CompanyDetailsPage from "./companies/ui/CompanyDetailsPage";
import LoginPage from "./auth/ui/LoginPage";
import SecureRoute from "./auth/ui/SecureRoute";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage}/>

          <SecureRoute>
            <Route exact path="/" component={CompaniesTablePage}/>
            <Route path="/company/:id" component={CompanyDetailsPage}/>
          </SecureRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
