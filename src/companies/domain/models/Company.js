import cuid from 'cuid';
import toISOString from "../../../shared/date/toISOString";


export const create = ({ name, foundationDate, charterCapital }) => ({
  id: cuid(),
  charterCapital,
  foundationDate,
  lastUpdatedDate: null,
  name,
  createdDate: toISOString(new Date()),
});

export const update = ({ name, foundationDate, charterCapital }, company) => ({
  ...company,
  charterCapital,
  foundationDate,
  lastUpdatedDate: toISOString(new Date()),
  name,
});

export const getId = ({ id }) => id;

export const getName = ({ name }) => name;

export const getFoundationDate = ({ foundationDate }) => foundationDate;
