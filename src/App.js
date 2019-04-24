import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import CompaniesTablePage from "./companies/ui/CompaniesTablePage";
import EditCompanyPage from "./companies/ui/EditCompanyPage";
import CreateCompanyPage from "./companies/ui/CreateCompanyPage";
import CompaniesStore from "./companies/domain/data/CompaniesStore";
import CompaniesService from "./companies/domain/services/CompaniesService";
import LoginPage from "./auth/ui/LoginPage";
import SecureRoute from "./auth/ui/SecureRoute";
import AppContext from './AppContext';
import RisksStore from "./risks/domain/data/RisksStore";
import RisksService from "./risks/domain/services/RisksService";

import "./App.css";


const companiesStore = CompaniesStore({ localStorage });
const companiesService = CompaniesService({ companiesStore });
const risksStore = RisksStore({ localStorage });
const risksService = RisksService({ risksStore });

function App() {
  return (
    <div className="App">
      <AppContext.Provider
        value={{ services: { companies: companiesService, risks: risksService } }}
      >
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage}/>

            <SecureRoute>
              <Route exact path="/" component={CompaniesTablePage}/>
              <Route exact path="/company/" component={CreateCompanyPage}/>
              <Route path="/company/:id" component={EditCompanyPage}/>
            </SecureRoute>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
