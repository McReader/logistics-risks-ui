import * as tf from "@tensorflow/tfjs";
import { create, update } from "@logistics-calc/risks/src/domain/models/Risk";

const modelUrl = 'localstorage://logistics-risks-model';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RisksService = ({ risksStore }) => {
  let listener;
  return {
    async calculate(companyId) {
      let model;

      try {
        model = await tf.loadLayersModel(modelUrl);
      } catch (e) {
        model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        model.compile({loss: 'meanSquaredError', optimizer: 'SGD'});

        const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
        const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

        await model.fit(xs, ys, {epochs: 500});

        await model.save(modelUrl)
      }

      model.predict(tf.tensor2d([[5]], [1, 1]));

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
