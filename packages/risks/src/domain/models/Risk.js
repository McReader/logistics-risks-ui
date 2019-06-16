import view from "ramda/es/view";
import lensProp from "ramda/es/lensProp";

import toISOString from "@logistics-calc/date-utils/src/toISOString";


export const create = ({ companyId, value }) => ({
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

export const getId = view(lensProp('_id'));

export const getCompanyId = view(lensProp('companyId'));

export const getValue = view(lensProp('value'));
