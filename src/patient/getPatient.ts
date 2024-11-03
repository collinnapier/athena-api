import { errorCheck } from "../error/errorCheck";
import { athenaConfig, toUrlParams } from "../globals";
import { FindPatientParams, FindPatientResponse } from "../types";

/**
 * Retrieves data of a specific patient.
 *
 * Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see Permissioned Rollout of APIs for more information if you are experiencing issues.
 *
 * @param {FindPatientParams} params - Query Options
 * @returns {Promise<FindPatientResponse>} Athena patient data
 * @throws {AthenaError}
 * @see {@link https://docs.athenahealth.com/api/sandbox#/Chart/getPracticeidChartPatientidAllergies|Athena API Docs}
 */
export async function getAthenaPatient(
  params: FindPatientParams
): Promise<FindPatientResponse> {
  const { patientid, ...query } = params;
  const apiUrl = new URL(
    `${athenaConfig?.origin}/chart/${patientid}/allergies`
  );
  apiUrl.search = toUrlParams(query).toString();
  console.log(apiUrl.toString());
  const response = await fetch(apiUrl, {
    headers: { Authorization: athenaConfig?.auth ?? "" },
  });

  const patient: FindPatientResponse = await response.json();

  await errorCheck(response);

  return patient;
}
