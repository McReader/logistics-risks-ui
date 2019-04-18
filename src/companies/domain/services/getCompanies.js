import companies from '../_mocks/companies';

export default function getCompanies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(companies);
    }, 3000);
  });
}
