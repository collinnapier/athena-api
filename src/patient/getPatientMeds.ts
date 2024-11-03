import { errorCheck } from "../error/errorCheck";
import { athenaConfig, toUrlParams } from "../globals";
import { PatientMedicationsParams, PatientMedicationsResponse } from "../types";

/**
 * Retrieves list of patient's medication and medication details
 *
 * @param {PatientMedicationsParams} params - Query Options
 * @returns {Promise<PatientMedicationsResponse>} Athena patient data
 * @throws {AthenaError}
 * @see {@link https://docs.athenahealth.com/api/sandbox#/Chart/getPracticeidChartPatientidMedications|Athena API Docs}
 */
export async function getPatientMeds(
  params: PatientMedicationsParams
): Promise<PatientMedicationsResponse> {
  const { patientid, ...query } = params;
  const apiUrl = new URL(
    `${athenaConfig?.origin}/chart/${patientid}/medications`
  );
  apiUrl.search = toUrlParams(query).toString();
  console.log(apiUrl.toString());
  const response = await fetch(apiUrl, {
    headers: { Authorization: athenaConfig?.auth ?? "" },
  });

  const responseData: PatientMedicationsResponse = await response.json();

  await errorCheck(response);

  return responseData;
}
