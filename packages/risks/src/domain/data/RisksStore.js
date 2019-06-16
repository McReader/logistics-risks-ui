import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

import view from 'ramda/es/view';
import lensProp from "ramda/es/lensProp";
import pipe from "ramda/es/pipe"
import head from "ramda/es/head";

PouchDB.plugin(PouchDBFind);


const RisksStore = ({ dbUrl }) => {
  const db = new PouchDB(`${dbUrl}/risks`);

  return ({
    getList() {
      return db.allDocs({ include_docs: true });
    },
    async getByCompanyId(companyId) {
      const getFirstResult = pipe(
        view(lensProp('docs')),
        head,
      );

      return db
        .find({
          selector: { companyId }
        })
        .then(getFirstResult);
    },
    async saveItem(item) {
      return db.post(item);
    },
    async updateItem(item) {
      return db.put(item);
    }
  });
};

export default RisksStore;

