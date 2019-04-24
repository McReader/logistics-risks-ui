import { create, update } from "../models/Company";

const CompaniesService = ({ companiesStore }) => ({
  createCompany: (data) => {
    const company = create(data);
    return companiesStore.saveItem(company);
  },
  editCompany: (company, data) => {
    const updatedCompany = update(data, company);
    return companiesStore.updateItem(updatedCompany);
  },
  getCompanies: () => companiesStore.getList(),
  getCompanyById: (id) => companiesStore.getById(id),
});

export default CompaniesService;
