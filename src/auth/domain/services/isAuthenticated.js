function isAuthenticated() {
  return localStorage.getItem('isAuthenticated') === 'true';
}

export default isAuthenticated;
