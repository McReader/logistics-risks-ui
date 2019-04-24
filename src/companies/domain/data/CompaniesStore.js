import formatDate from "../../../shared/date/formatDate";
import { getId } from "../models/Company";


const CompaniesStore = ({ localStorage, parseList = JSON.parse, formatList = JSON.stringify }) => ({
  getList: () => {
    return Promise.resolve(parseList(localStorage.getItem('companies')));
  },
  getById: (id) => {
    const list = this.getList();
    return Promise.resolve(list.find(item => getId(item) === id));
  },
  saveItem: (item) => {
    const list = this.getList();
    const itemWithUpdatedMeta = {
      ...item,
      lastUpdatedDate: formatDate(new Date()),
    };
    const updatedList = [...list, itemWithUpdatedMeta];
    return this.saveList(updatedList);
  },
  saveList: (list) => {
    localStorage.setItem('companies', formatList(list));
    return Promise.resolve();
  },
});

export default CompaniesStore;
