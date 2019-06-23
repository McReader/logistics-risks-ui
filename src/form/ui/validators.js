import isValid from 'date-fns/is_valid';

export const required = value =>
  Boolean(value) ? undefined : 'Value is required';
export const isDataValid = value =>
  isValid(new Date(value)) ? undefined : 'Date should be in format MM/DD/YYYY';
export const isNumber = value =>
  Number.isInteger(parseInt(value)) ? undefined : 'Should be a number';
