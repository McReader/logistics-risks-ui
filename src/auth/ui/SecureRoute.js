import React from 'react';
import { Redirect } from 'react-router-dom';

import isAuthenticated from "../domain/services/isAuthenticated";

function SecureRoute({ children }) {
  if (!isAuthenticated()) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    )
  }

  return children;
}

export default SecureRoute;
