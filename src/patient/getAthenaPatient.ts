import { AthenaError } from "../error";
import { errorCheck } from "../error/errorCheck";
import { athenaConfig, toUrlParams } from "../globals";
import { FindPatientParams } from "../types/params";
import { FindPatientResponse } from "../types/responses";

/**
 * Retrieves data of a specific patient Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see Permissioned Rollout of APIs for more information if you are experiencing issues.
 * @param params
 * @returns {Promise<FindPatientResponse | undefined>} - Athena patient data
 */
export async function getAthenaPatient(
  params: FindPatientParams
): Promise<Response> {
  const { patientid, ...query } = params;
  const apiUrl = new URL(`${athenaConfig?.origin}/patients/${patientid}`);
  apiUrl.search = toUrlParams(query).toString();
  console.log(apiUrl.toString());
  const response = await fetch(apiUrl, {
    headers: { Authorization: athenaConfig?.auth ?? "" },
  });

  await errorCheck(response);

  return response;
}
