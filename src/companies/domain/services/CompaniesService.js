

const CompaniesService = ({ companiesStore }) => ({
  createCompany: (data) => {
    const company = create(data);
    return companiesStore.saveItem(company);
  },
  updateCompany: (update, company) => {
    return companiesStore.updateItem(update, company);
  },
  getCompanies: () => companiesStore.getList(),
  getCompanyById: (id) => companiesStore.getById(id),
});

export default CompaniesService;
