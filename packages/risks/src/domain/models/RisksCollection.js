import { getCompanyId } from "./Risk";

export const getByCompanyId = (companyId, risks) => risks.find(risk => getCompanyId(risk) === companyId);
