import { errorCheck } from "../error/errorCheck";
import { athenaConfig, toUrlParams } from "../globals";
import { PatientAllergiesParams, PatientAllergiesResponse } from "../types";

/**
 * Retrieves list of allergens, allergy reactions, severity documented in the patient chart
 *
 * @param {PatientAllergiesParams} params - Query Options
 * @returns {Promise<PatientMedicationsResponse>} Athena patient data
 * @throws {AthenaError}
 * @see {@link https://docs.athenahealth.com/api/sandbox#/Chart/getPracticeidChartPatientidMedications|Athena API Docs}
 */
export async function getAthenaAllergies(
  params: PatientAllergiesParams
): Promise<PatientAllergiesResponse> {
  const { patientid, ...query } = params;
  const apiUrl = new URL(
    `${athenaConfig?.origin}/chart/${patientid}/allergies`
  );
  apiUrl.search = toUrlParams(query).toString();
  console.log(apiUrl.toString());
  const response = await fetch(apiUrl, {
    headers: { Authorization: athenaConfig?.auth ?? "" },
  });

  const responseData: PatientAllergiesResponse = await response.json();

  await errorCheck(response);

  return responseData;
}
