import { getId } from "../models/Risk";
import { getByCompanyId } from "../models/RisksCollection";


const RisksStore = ({ localStorage, parseList = JSON.parse, formatList = JSON.stringify }) => ({
  getList() {
    return Promise.resolve(parseList(localStorage.getItem('risks')) || []);
  },
  async getByCompanyId(companyId) {
    const list = await this.getList();
    return Promise.resolve(getByCompanyId(companyId, list));
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
    localStorage.setItem('risks', formatList(list));
    return Promise.resolve();
  },
});

export default RisksStore;

