import toISOString from "../../../shared/date/toISOString";
import { getId } from "../models/Company";


const CompaniesStore = ({ localStorage, parseList = JSON.parse, formatList = JSON.stringify }) => ({
  getList() {
    return Promise.resolve(parseList(localStorage.getItem('companies')) || []);
  },
  async getById(id) {
    const list = await this.getList();
    return Promise.resolve(list.find(item => getId(item) === id));
  },
  async saveItem(item) {
    const list = await this.getList();
    const updatedList = [...list, item];
    return this.saveList(updatedList);
  },
  async updateItem(item) {
    const list = await this.getList();
    const updatedList = list.map((i) => {
      if (getId(i) !== getId(item)) {
        return i;
      }

      return item;
    });
    return this.saveList(updatedList);
  },
  saveList(list) {
    localStorage.setItem('companies', formatList(list));
    return Promise.resolve();
  },
});

export default CompaniesStore;
