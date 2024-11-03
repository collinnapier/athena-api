export interface AllFacilitiesResponse {
  /**
   * The city of the facility
   */
  city: string;
  /**
   * The name of the facility
   */
  name: string;
  /**
   * The state of the facility
   */
  state: string;
  /**
   * The physical address of the facility
   */
  address: string;
  /**
   * The NCPDP ID of the given facility, if applicable.
   */
  ncpdpid: number;
  /**
   * The zip code of the facility
   */
  zipcode: string;
  /**
   * How far the facility is from the department or patient (if patientid is given), in miles.
   */
  distance: string;
  /**
   * The fax number of the facility
   */
  faxnumber: string;
  /**
   * The athena ID of this facility, to be used when adding orders
   */
  facilityid: number;
  /**
   * The phone number of the facility
   */
  phonenumber: string;
  /**
   * For pharmacies, whether this is a RETAIL or MAILORDER pharmacy.
   */
  pharmacytype: string;
}
export interface AllMedicationsResponse {
  /**
   * The name of the medication
   */
  medication: string;
  /**
   * The athena ID of the medication
   */
  medicationid: number;
}
export interface AllAllergiesResponse {
  /**
   * DEPRECATED. Use allergenname instead. The name of the allergen.
   */
  allergy: string;
  /**
   * DEPRECATED. Use allergenid instead. The athena ID of the allergen.
   */
  allergyid: number;
  /**
   * The athena ID of the allergen
   */
  allergenid: number;
  /**
   * The name of the allergen
   */
  allergenname: string;
}
export interface AllInsurancesResponse {
  /**
   * The addresses associated with this insurance package. The default address is listed first.
   */
  addresslist: string[];
  /**
   * The affiliations associated with this insurance package.
   */
  affiliations: string[];
  /**
   * Name of the specific insurance package.
   */
  insuranceplanname: string;
  /**
   * The athena insurance package ID.
   */
  insurancepackageid: number;
}
export interface AllOrderTypesResponse {
  /**
   * The name of the order
   */
  name: string;
  /**
   * The athena ID of the type of order
   */
  ordertypeid: number;
}
export interface AllGenderIdentitiesResponse {
  /**
   * An array of strings describing a gender identity field that can be used to describe a patient in this practice.
   */
  genderidentityfields: string[];
}
export interface AvailableScreeningQuestionairesResponse {
  /**
   * The questionnaire name
   */
  name: string;
  /**
   * List of screener codes attached to this questionnaire
   */
  screenercodes: {
    /**
     * The questionnaire name
     */
    name: string;
  }[];
  /**
   * The template ID of the questionnaire. Required to activate a questionnaire for a given encounter.
   */
  templateid: number;
  /**
   * Boolean to flag whether the questionnaire is score only or not.
   */
  templatetype: string;
}
