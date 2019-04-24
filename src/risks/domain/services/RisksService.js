import { create, update } from "../models/Risk";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RisksService = ({ risksStore }) => {
  let listener;
  return {
    async calculate(companyId) {
      const risk = await risksStore.getByCompanyId(companyId);

      const value = getRandomInt(10, 100);

      if (risk) {
        await risksStore.updateItem(update({ value }, risk));
      } else {
        await risksStore.saveItem(create({ value, companyId }));
      }

      if (listener) {
        listener();
      }
    },
    getList() {
      return risksStore.getList();
    },
    subscribe(l) {
      listener = l;
    },
    unsubscribe() {
      listener = null;
    }
  };
};

export default RisksService;
