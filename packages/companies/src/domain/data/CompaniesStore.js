import PouchDb from 'pouchdb';


const CompaniesStore = ({ dbUrl }) => {
  const db = new PouchDb(`${dbUrl}/companies`);

  return ({
    getList() {
      return db.allDocs({ include_docs: true });
    },
    async getById(id) {
      return db.get(id);
    },
    async saveItem(item) {
      return db.post(item);
    },
    async updateItem(item) {
      return db.put(item);
    },
  });
};

export default CompaniesStore;
