import lensProp from 'ramda/es/lensProp';
import view from 'ramda/es/view';

import toISOString from '@logistics-calc/date-utils/src/toISOString';

export const create = ({ name, foundationDate, charterCapital }) => ({
  charterCapital,
  foundationDate,
  lastUpdatedDate: null,
  name,
  createdDate: toISOString(new Date())
});

export const update = ({ name, foundationDate, charterCapital }, company) => ({
  ...company,
  charterCapital,
  foundationDate,
  lastUpdatedDate: toISOString(new Date()),
  name
});

export const getId = view(lensProp('_id'));

export const getName = view(lensProp('name'));

export const getFoundationDate = view(lensProp('foundationDate'));
