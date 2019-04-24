import cuid from 'cuid';
import formatDate from "../../../shared/date/formatDate";


export const create = ({ name, foundationDate, charterCapital }) => ({
  id: cuid(),
  charterCapital,
  foundationDate,
  name,
  createdDate: formatDate(new Date()),
});

export const getId = ({ id }) => id;

export const getName = ({ name }) => name;

export const getFoundationDate = ({ foundationDate }) => foundationDate;
