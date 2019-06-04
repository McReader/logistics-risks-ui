import { getValue } from '../models/Risk';

/**
 * @param {Risk} risk
 * @returns {boolean}
 */
export default function isHighRisk(risk) {
  return getValue(risk) > 50;
}
