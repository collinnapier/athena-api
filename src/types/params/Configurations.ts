/**
 * Retrieve a list of facilities based on the search criteria provided.
 *
 * Endpoint: /v1/{practiceid}/chart/configuration/facilities
 */
export interface AllFacilitiesParams {
  /**
   * The type of facility to search for.
   */
  ordertype: string;
  /**
   * Used to help determine both whether to include which practice-configured facilities as well as help sort the results.
   */
  departmentid: number;
  /**
   * The facility to search for. This can include the name or address of the facility, in space delimited form
   */
  name: string;
  /**
   * Used to help determine which matches to return based on distance to patient and practice.
   */
  patientid?: number;
}

/**
 * Retrieves a list of medications for a given search parameters
 *
 * Endpoint: /v1/{practiceid}/reference/medications
 */
export interface AllMedicationsParams {
  /**
   * A term to search for. Must be at least 2 characters
   */
  searchvalue: string;
}

/**
 * Retrieves a list of allergies matching the search criteria
 *
 * Endpoint: /v1/{practiceid}/reference/allergies
 */
export interface AllAllergiesParams {
  /**
   * A term to search for. Must be at least 2 characters
   */
  searchvalue: string;
}

/**
 * Retrieve list of insurance packages for a given search criteria
 *
 * Endpoint: /v1/{practiceid}/insurancepackages
 */
export interface AllInsurancesParams {
  /**
   * The name of the insurer.
   */
  insuranceplanname: string;
  /**
   * The two letter state abbreviation of the insurer's location.
   */
  insurancestate?: string;
  /**
   * The zipcode of the insurer. Nine digit zipcodes are accepted in the format of 12345-6789.
   */
  insurancezip?: string;
  /**
   * The address of the insurer.
   */
  insuranceaddress?: string;
  /**
   * The patient's insurance member ID.
   */
  memberid: string;
  /**
   * Two letter state abbreviation that filters for insurances that cover this state.
   */
  stateofcoverage?: string;
  /**
   * The phone number of the insurer.
   */
  insurancephone?: string;
  /**
   * The insurance product type ID.
   */
  producttypeid?: Array<string>;
  /**
   * The city of the insurer.
   */
  insurancecity?: string;
  /**
   * Number of entries to return (default 15, max 500)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Retrieves a list of lab orders configured in the system
 *
 * Endpoint: /v1/{practiceid}/reference/order/lab
 */
export interface AllOrderTypesParams {
  /**
   * A term to search for. Must be at least 2 characters
   */
  searchvalue: string;
}

/**
 * BETA: Retrieves a list of gender identities configured for the practice
 *
 * Endpoint: /v1/{practiceid}/configuration/patients/genderidentity
 */
export interface AllGenderIdentitiesParams {
  /**
   * If passed, will return the 2015 Ed. CEHRT values for describing gender identity for a patient that should be used with the genderidentity argument to POST /patients and PUT /patients/{patientid}. Otherwise, will return a list of strings that can be used with the genderidentity argument to POST /patients and PUT /patients/{patientid} for those clients that are using the 'Gender Identity/Sexual Orientation Workflows (Transgender Patient)' or 'Population Demographics - Social Determinant Fields (Sexual orientation/Gender identity)' setting in athenaNet.
   */
  show2015edcehrtvalues?: boolean;
  /**
   * Number of entries to return (default 1500, max 5000)
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Retrieves a list of questionnaire screeners
 *
 * Endpoint: /v1/{practiceid}/chart/questionnairescreeners
 */
export interface AvailableScreeningQuestionairesParams {
  /**
   * Number of entries to return (default 1000, max 10000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}
