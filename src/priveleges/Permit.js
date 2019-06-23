export default function Permit({ children }) {
  return localStorage.getItem('isAdmin') === 'true' ? children : null;
}
