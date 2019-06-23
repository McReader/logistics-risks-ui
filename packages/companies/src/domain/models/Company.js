import lensProp from 'ramda/es/lensProp';
import view from 'ramda/es/view';
import pipe from "ramda/es/pipe";
import defaultTo from "ramda/es/defaultTo";

import toISOString from '@logistics-calc/date-utils/src/toISOString';

export const create = ({ name, foundationDate, charterCapital }) => ({
  charterCapital,
  foundationDate,
  lastUpdatedDate: null,
  name,
  createdDate: toISOString(new Date()),
  paymentHistory: [],
});

export const update = ({ name, foundationDate, charterCapital, paymentHistory }, company) => ({
  ...company,
  charterCapital,
  foundationDate,
  lastUpdatedDate: toISOString(new Date()),
  paymentHistory,
});

export const getId = view(lensProp('_id'));
export const getName = view(lensProp('name'));
export const getFoundationDate = view(lensProp('foundationDate'));
export const getPaymentHistory = pipe(
  view(lensProp("paymentHistory")),
  defaultTo([])
);
