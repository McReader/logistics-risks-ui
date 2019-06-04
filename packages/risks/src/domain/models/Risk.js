import cuid from "cuid";
import toISOString from "@logistics-calc/date-utils/src/toISOString";


export const create = ({ companyId, value }) => ({
  id: cuid(),
  value,
  companyId,
  createdDate: toISOString(new Date()),
  lastUpdatedDate: null,
});

export const update = ({ value }, risk) => ({
  ...risk,
  value,
  lastUpdatedDate: toISOString(new Date()),
});

export const getId = ({ id }) => id;

export const getCompanyId = ({ companyId }) => companyId;

export const getValue = ({ value }) => value;
