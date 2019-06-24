import cuid from "cuid";
import construct from "ramda/es/construct";
import view from "ramda/es/view";
import lensProp from "ramda/es/lensProp";

import toISOString from "@logistics-calc/date-utils/src/toISOString";

function Payment({ date, amount, plannedDate }) {
  return {
    _id: cuid(),
    date: toISOString(date),
    amount,
    plannedDate: toISOString(plannedDate),
  };
}

export const create = construct(Payment);
export const getId = view(lensProp("_id"));
export const getDate = view(lensProp("date"));
export const getPlannedDate = view(lensProp("plannedDate"));
export const getAmount = view(lensProp("amount"));
