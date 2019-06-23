import cuid from "cuid";
import construct from "ramda/es/construct";
import view from "ramda/es/view";
import lensProp from "ramda/es/lensProp";

import toISOString from "@logistics-calc/date-utils/src/toISOString";

function Payment({ date, amount, description }) {
  return {
    _id: cuid(),
    date: toISOString(date),
    amount,
    description,
  };
}

export const create = construct(Payment);
export const getId = view(lensProp("_id"));
export const getDate = view(lensProp("date"));
export const getAmount = view(lensProp("amount"));
export const getDescription = view(lensProp("description"));
