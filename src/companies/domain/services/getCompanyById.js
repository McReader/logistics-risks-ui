import companies from '../_mocks/companies';

export default function getCompanyById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const company = companies.find((c) => c.id === id);

      if (!company) {
        reject(new Error(`Company with id (${id}) is not found`));
        return;
      }

      resolve(company);
    }, 3000);
  });
}
