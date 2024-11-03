/**
 * Retrieves a list of patients in the given practice based on search criteria Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/patients
 */
export interface AllPatientsParams {
  /**
   * The patient's mobile phone number. On input, 'declined' can be used to indicate no number. (Alternatively, hasmobile can also be set to false. "declined" simply does this for you.)  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  mobilephone?: string;
  /**
   * Patient's email address.  'declined' can be used to indicate just that.
   */
  email?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
   */
  contactpreference_billing_phone?: boolean;
  /**
   * When true, 2015 Ed. CEHRT compliant strings will be returned for describing gender identity and sexual orientation.
   */
  show2015edcehrtvalues?: boolean;
  /**
   * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
   */
  contactrelationship?: string;
  /**
   * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
   */
  agriculturalworker?: string;
  /**
   * Guarantor's country code (ISO 3166-1) (Max length: 20)
   */
  guarantorcountrycode3166?: string;
  /**
   * The ID of the mobile carrier, from /mobilecarriers or the list below.
   */
  mobilecarrierid?: string;
  /**
   * The middle name of the patient's guardian.
   */
  guardianmiddlename?: string;
  /**
   * The patient's work phone number.  Generally not used to contact a patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  workphone?: string;
  /**
   * Patient's city (Max length: 30)
   */
  city?: string;
  /**
   * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
   */
  homelesstype?: string;
  /**
   * Primary (registration) department ID. A special value of -1 can be used to search for cases where, due to an unusual import or other reasons, the registration department is not set.
   */
  departmentid?: number;
  /**
   * Used to identify this patient as school-based health center patient. Only settable if client has Social Determinant fields turned on.
   */
  schoolbasedhealthcenter?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
   */
  contactpreference_billing_sms?: boolean;
  /**
   * The MU-required field for "preferred contact method". This is not used by any automated systems.
   */
  contactpreference?: string;
  /**
   * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
   */
  consenttotext?: boolean;
  /**
   * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
   */
  ethnicitycode?: string;
  /**
   * Patient's address - 1st line (Max length: 100)
   */
  address1?: string;
  /**
   * Patient's DOB (mm/dd/yyyy)
   */
  dob?: string;
  /**
   * The patient's preferred name (i.e. nickname).
   */
  preferredname?: string;
  /**
   * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  contacthomephone?: string;
  /**
   * The patient's "current" department. This field is not always set by the practice.
   */
  primarydepartmentid?: string;
  /**
   * Guarantor's zip
   */
  guarantorzip?: string;
  /**
   *
   */
  ssn?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
   */
  contactpreference_announcement_email?: boolean;
  /**
   * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  employerphone?: string;
  /**
   * Guarantor's first name (Max length: 20)
   */
  guarantorfirstname?: string;
  /**
   * The suffix of the patient's guardian.
   */
  guardiansuffix?: string;
  /**
   * The ID of the department associated with the upcoming appointment.
   */
  appointmentdepartmentid?: number;
  /**
   * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
   */
  contactpreference_announcement_phone?: boolean;
  /**
   * The number of the patient's driver's license (Max length: 20)
   */
  driverslicensenumber?: string;
  /**
   * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  guarantorphone?: string;
  /**
   * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
   */
  consenttocall?: boolean;
  /**
   * Indicates whether or not the patient declines to provide an income level.
   */
  povertylevelincomerangedeclined?: boolean;
  /**
   * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
   */
  contactpreference_appointment_phone?: boolean;
  /**
   * Patient's last name (Max length: 20)
   */
  lastname?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
   */
  contactpreference_billing_email?: boolean;
  /**
   * The expiration date of the patient's driver's license.
   */
  driverslicenseexpirationdate?: string;
  /**
   * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
   */
  homeless?: string;
  /**
   * A comma separated list of patientids to search for.
   */
  patientidlist?: string;
  /**
   * Patient's pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
   */
  povertylevelincomepayperiod?: string;
  /**
   * The full name of the next of kin.
   */
  nextkinname?: string;
  /**
   * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
   */
  industrycode?: string;
  /**
   * The patient's preference for care summary delivery.
   */
  caresummarydeliverypreference?: string;
  /**
   * The next of kin phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  nextkinphone?: string;
  /**
   * Date the patient was registered.
   */
  registrationdate?: string;
  /**
   * Guarantor's city (Max length: 30)
   */
  guarantorcity?: string;
  /**
   * Guarantor's last name (Max length: 20)
   */
  guarantorlastname?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
   */
  contactpreference_appointment_sms?: boolean;
  /**
   * The state of the patient's driver's license. This is in the form of a 2 letter state code. (Max length: 20)
   */
  driverslicensestateid?: string;
  /**
   * Patient's address - 2nd line (Max length: 100)
   */
  address2?: string;
  /**
   * Patient's family size (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
   */
  povertylevelfamilysize?: number;
  /**
   * Patient's name suffix (Max length: 20)
   */
  suffix?: string;
  /**
   * Patient's zip.  Matching occurs on first 5 characters.
   */
  zip?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
   */
  contactpreference_announcement_sms?: boolean;
  /**
   * The last name of the patient's guardian.
   */
  guardianlastname?: string;
  /**
   * Guarantor's middle name (Max length: 20)
   */
  guarantormiddlename?: string;
  /**
   * Guarantor's DOB (mm/dd/yyyy)
   */
  guarantordob?: string;
  /**
   * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
   */
  ethnicitycodes?: string;
  /**
   * The first name of the patient's guardian.
   */
  guardianfirstname?: string;
  /**
   * If the patient is homebound, this is true.
   */
  homeboundyn?: boolean;
  /**
   * The patient race hierarchical code (Max length: 20)
   */
  hierarchicalcode?: string;
  /**
   * When true, current patient balances will not be calculated and the "balances" parameters will be omitted, speeding up the /patients endpoint.
   */
  omitbalances?: boolean;
  /**
   * The next of kin relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
   */
  nextkinrelationship?: string;
  /**
   * When true, current patient photo information will not be determined (and "patientphoto" and "patientphotourl" will be omitted), speeding up the /patients endpoint.
   */
  omitphotoinformation?: boolean;
  /**
   * The guarantor's relationship to the patient
   */
  guarantorrelationshiptopatient?: string;
  /**
   * Indicates if the patient delcines to provide "povertylevelfamilysize". Should be set to Yes if the patient declines.
   */
  povertylevelfamilysizedeclined?: boolean;
  /**
   * Patient's legal first name (Max length: 20)
   */
  firstname?: string;
  /**
   * A comma separated list of confidentiality codes to filter patients by. If not set defaults to include all confidentiality codes. Supported codes: 'N' and 'R'. Only functions if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  confidentialitycode?: Array<string>;
  /**
   * This flag is set if the patient has been given access to the portal. This may be set by the API user if a patient has been given access to the portal "by providing a preprinted brochure or flyer showing the URL where patients can access their Patient Care Summaries." The practiceinfo endpoint can provide the portal URL. While technically allowed, it would be very unusual to set this to false via the API.
   */
  portalaccessgiven?: string;
  /**
   * When true, the default NCPDPID for patients will not be determined (and "defaultpharmacyncpdpid' will be omitted), speeding up the /patients endpoint.
   */
  omitdefaultpharmacy?: boolean;
  /**
   * Guarantor's name suffix (Max length: 20)
   */
  guarantorsuffix?: string;
  /**
   * Used to identify this patient as living in public housing. Only settable if client has Social Determinant fields turned on.
   */
  publichousing?: string;
  /**
   * Language of the patient, using the ISO 639.2 code. (http://www.loc.gov/standards/iso639-2/php/code_list.php; "T" or terminology code) Special case: use "declined" to indicate that the patient declined to answer.
   */
  language6392code?: string;
  /**
   * Occupation of the patient, using the US Census occupation code (code system 2.16.840.1.113883.6.240).  "other" can be used as well.
   */
  occupationcode?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
   */
  contactpreference_lab_sms?: boolean;
  /**
   * Guarantor's address (Max length: 100)
   */
  guarantoraddress1?: string;
  /**
   * Patient's income per specified pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
   */
  povertylevelincomeperpayperiod?: number;
  /**
   * The referral / "how did you hear about us" ID.
   */
  referralsourceid?: string;
  /**
   * The "primary" provider for this patient, if set.
   */
  primaryproviderid?: string;
  /**
   * Set to true to allow ability to find patients with record restrictions and blocked patients. This should only be used when there is no reflection to the patient at all that a match was found or not found. Will also add the confidentialitycode flag to the output for the patient. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: string;
  /**
   * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
   */
  defaultpharmacyncpdpid?: string;
  /**
   * The patient's employer's ID (from /employers call)
   */
  employerid?: number;
  /**
   * Marital Status (D=Divorced, M=Married, S=Single, U=Unknown, W=Widowed, X=Separated, P=Partner)
   */
  maritalstatus?: string;
  /**
   * The "status" of the patient, one of active, inactive, prospective, or deleted.
   */
  status?: string;
  /**
   * The patient race, using the 2.16.840.1.113883.5.104 codeset.  See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple races for input.  The first race will be considered "primary".  Note: you must update all values at once if you update any.
   */
  race?: string;
  /**
   * Patient's sex (M/F)
   */
  sex?: string;
  /**
   * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
   */
  agriculturalworkertype?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
   */
  contactpreference_appointment_email?: boolean;
  /**
   * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
   */
  contactpreference_lab_email?: boolean;
  /**
   * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  homephone?: string;
  /**
   * Guarantor's state (2 letter abbreviation)
   */
  guarantorstate?: string;
  /**
   * The ID of the provider associated with the upcoming appointment.
   */
  appointmentproviderid?: string;
  /**
   * Guarantor's address - line 2 (Max length: 100)
   */
  guarantoraddress2?: string;
  /**
   * Patient's middle name (Max length: 20)
   */
  middlename?: string;
  /**
   * First name the patient uses - may differ from legal first name (Max length: 20)
   */
  firstnameused?: string;
  /**
   * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
   */
  contactpreference_lab_phone?: boolean;
  /**
   * Patient's poverty level (% of the Federal Poverty Level), as calculated from family size, income per pay period, pay period, and state. Typically only valued if client has Federal Poverty Level fields turned on.
   */
  povertylevelcalculated?: string;
  /**
   * Guarantor's SSN
   */
  guarantorssn?: string;
  /**
   * Guarantor's email address
   */
  guarantoremail?: string;
  /**
   * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields. (Max length: 20)
   */
  contactname?: string;
  /**
   * Set to false if a client has declined a phone number.
   */
  hasmobileyn?: string;
  /**
   * Set to true if a patient wishes to get e-statements instead of paper statements. Should only be set for patients with an email address and clients with athenaCommunicator. The language we use in the portal is, "Future billing statements will be sent to you securely via your Patient Portal account. You will receive an email notice when new statements are available." This language is not required, but it is given as a suggestion.
   */
  onlinestatementonlyyn?: string;
  /**
   * Notes associated with this patient.
   */
  notes?: string;
  /**
   * Patient's country code (ISO 3166-1) (Max length: 20)
   */
  countrycode3166?: string;
  /**
   * Indicates if the patient delcines to provide "povertylevelincomeperpayperiod". Should be set to Yes if the patient declines.
   */
  povertylevelincomedeclined?: boolean;
  /**
   * Patient's state (2 letter abbreviation)
   */
  state?: string;
  /**
   * Any phone number for the patient.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients.  You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.
   */
  anyphone?: string;
  /**
   * The guaranror's employer's ID (from /employers call)
   */
  guarantoremployerid?: number;
  /**
   * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
   */
  contactmobilephone?: string;
  /**
   * The clinical order type group of the clinical provider (Prescription: 10, Lab: 11, Vaccinations: 16).
   */
  clinicalordertypegroupid?: string;
  /**
   * If present, the date on which a patient died.
   */
  deceaseddate?: string;
  /**
   * Used to identify patients with appointments scheduled within the upcoming input hours (maximum 24).  Also includes results from the previous 2 hours.
   */
  upcomingappointmenthours?: number;
  /**
   * Used to identify this patient as a veteran. Only settable if client has Social Determinant fields turned on.
   */
  veteran?: string;
  /**
   * Number of entries to return (default 10, max 1000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Retrieves data of a specific patient Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}
 */
export interface FindPatientParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * This is the ID for the department of the patient you are retrieving.  If you are calling this on an enterprise practice with multiple financial groups (also called "provider groups"), this will ensure you are retrieving the correct patient and not a copy that is in a different department.
   */
  departmentid?: number;
  /**
   * Set to true to allow ability to find patients with record restrictions and blocked patients. This should only be used when there is no reflection to the patient at all that a match was found or not found. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: boolean;
  /**
   * If set, will return local patient id tied to the passed in DepartmentID.
   */
  limitlocalpatientid?: boolean;
  /**
   * Include an array of all departments the patient is a part of along with all statuses for those departments.
   */
  showallpatientdepartmentstatus?: boolean;
  /**
   * If set, validate that the session user has access to the patient record. May only be used in conjunction with INTERNALUSE and SESSIONUSER, and DEPARTMENTID. DEPARTMENTID is required because user access is department-specific. If the user does not have access to the patient record, returns a 403 error.
   */
  checkuseraccess?: boolean;
  /**
   * Include privacy custom fields for the patient when SHOWCUSTOMFIELDS also set to true.
   */
  showprivacycustomfields?: boolean;
  /**
   * A comma separated list of confidentiality codes to filter patients by. If not set defaults to include all confidentiality codes. Supported codes: 'N' and 'R'. Only functions if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  confidentialitycode?: Array<string>;
  /**
   * If set, will include portal enrollment status in response.
   */
  showportalstatus?: boolean;
  /**
   * Include information on claims where there is no outstanding patient balance. (Only to be used when showbalancedetails is selected.)
   */
  showallclaims?: boolean;
  /**
   * Include patient insurance information.
   */
  showinsurance?: boolean;
  /**
   * Use 2015 Ed. CEHRT compliant strings for describing gender identity and sexual orientation.
   */
  show2015edcehrtvalues?: boolean;
  /**
   * If set, will return the privacy information of the patient, will work only If SEPM-431-INCLUDE-PRIVACY-INFO toggle is turned ON
   */
  showprivacyinfo?: boolean;
  /**
   * If set, will show local patient id.
   */
  showlocalpatientid?: boolean;
  /**
   * Show detailed information on patient balances.
   */
  showbalancedetails?: boolean;
  /**
   * If set, will show the previous patient ID this patient was merged from.
   */
  showpreviouspatientids?: boolean;
  /**
   * If set, will show full SSN instead of a masked number.
   */
  showfullssn?: boolean;
  /**
   * Include custom fields for the patient.
   */
  showcustomfields?: boolean;
  /**
   * User name of the patient in the third party application.
   */
  THIRDPARTYUSERNAME?: string;
  /**
   * When 'true' is passed we will collect relevant data and store in our database.
   */
  PATIENTFACINGCALL?: boolean;
}

/**
 * Retrieves a list of patients based on the search criteria defined by the specific demographics that were passed. It can return multiple patients and will rank each one based off of how sure it is that this patient is the one you are looking for. Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/patients/enhancedbestmatch
 */
export interface FindBestmatchPatientsParams {
  /**
   * Set to true to allow ability to find patients with record restrictions and blocked patients. This should only be used when there is no reflection to the patient at all that a match was found or not found. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: boolean;
  /**
   * If you are only interested in matching a patient if they are above a specific confidence level, you can use this to require any patient matched to have a score greater than or equal to this value.
   */
  minscore?: number;
  /**
   * Include an array of all departments the patient is a part of along with all statuses for those departments.
   */
  showallpatientdepartmentstatus?: boolean;
  /**
   * The patient's mobile phone number.
   */
  mobilephone?: string;
  /**
   * Patient's name suffix.
   */
  suffix?: string;
  /**
   * If this field is set to true, the top five patients with a score of 16 or above will be returned.
   */
  returnbestmatches?: boolean;
  /**
   * Patient's zip.
   */
  zip?: string;
  /**
   * If set, will include portal enrollment status in response.
   */
  showportalstatus?: boolean;
  /**
   * Patient's social security number.
   */
  ssn?: string;
  /**
   * Patient's email address.
   */
  email?: string;
  /**
   * Include information on claims where there is no outstanding patient balance. (Only to be used when showbalancedetails is selected.)
   */
  showallclaims?: boolean;
  /**
   * Use 2015 Ed. CEHRT compliant strings for describing gender identity and sexual orientation.
   */
  show2015edcehrtvalues?: boolean;
  /**
   * If set, will show local patient id.
   */
  showlocalpatientid?: boolean;
  /**
   * The patient's home phone number.
   */
  homephone?: string;
  /**
   * If set, will show the previous patient ID this patient was merged from.
   */
  showpreviouspatientids?: boolean;
  /**
   * The patient's work phone number. Generally not used to contact a patient.
   */
  workphone?: string;
  /**
   * Include custom fields for the patient.
   */
  showcustomfields?: boolean;
  /**
   * Guarantor's phone number.
   */
  guarantorphone?: string;
  /**
   * This is the ID for the department of the patient you are retrieving.  If you are calling this on an enterprise practice with multiple financial groups (also called "provider groups"), this will ensure you are retrieving the correct patient and not a copy that is in a different department.
   */
  departmentid?: number;
  /**
   * Guarantor's email address.
   */
  guarantoremail?: string;
  /**
   * If set, will return local patient id tied to the passed in DepartmentID.
   */
  limitlocalpatientid?: boolean;
  /**
   * Patient's first name.
   */
  firstname: string;
  /**
   * Patient's last name.
   */
  lastname: string;
  /**
   * If set, validate that the session user has access to the patient record. May only be used in conjunction with INTERNALUSE and SESSIONUSER, and DEPARTMENTID. DEPARTMENTID is required because user access is department-specific. If the user does not have access to the patient record, returns a 403 error.
   */
  checkuseraccess?: boolean;
  /**
   * Include privacy custom fields for the patient when SHOWCUSTOMFIELDS also set to true.
   */
  showprivacycustomfields?: boolean;
  /**
   * A comma separated list of confidentiality codes to filter patients by. If not set defaults to include all confidentiality codes. Supported codes: 'N' and 'R'. Only functions if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  confidentialitycode?: Array<string>;
  /**
   * Include patient insurance information.
   */
  showinsurance?: boolean;
  /**
   * If set, will return the privacy information of the patient, will work only If SEPM-431-INCLUDE-PRIVACY-INFO toggle is turned ON
   */
  showprivacyinfo?: boolean;
  /**
   * Show detailed information on patient balances.
   */
  showbalancedetails?: boolean;
  /**
   * If this field is set to true, search patients based on a soundex search. Soundex searching is disabled by default.
   */
  usesoundexsearch?: boolean;
  /**
   * If set, will show full SSN instead of a masked number.
   */
  showfullssn?: boolean;
  /**
   * Patient's preferred name (or nickname).
   */
  preferredname?: string;
  /**
   * Patient's DOB (mm/dd/yyyy).
   */
  dob: string;
}

/**
 * Add a new patient record in the system Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/patients
 */
export interface CreatePatientParams {
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Modifies data of a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}
 */
export interface UpdatePatientParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Modifies data of a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}
 */
export interface DeletePatientParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Records a problem in the patient's active problem list
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/problems
 */
export interface CreatePatientProblemParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves patient's active problems list
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/problems
 */
export interface FindPatientProblemsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * Also show inactive (but not soft deleted) problems.
   */
  showinactive?: boolean;
  /**
   * If true, will include every encounter and associated diagnosis with each problem. Also fills the bestmatchicd10code field with the best conversion from the problem SNOMED code to ICD10 code if there is no user-selected ICD10 code in an encounter diagnosis event. Please note that the bestmatchicd10code may not always be accurate.
   */
  showdiagnosisinfo?: boolean;
  /**
   * User name of the patient in the third party application.
   */
  THIRDPARTYUSERNAME?: string;
  /**
   * When 'true' is passed we will collect relevant data and store in our database.
   */
  PATIENTFACINGCALL?: boolean;
}

/**
 * Retrieves a list of patient encounters
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/encounters
 */
export interface PatientEncountersParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Find the encounter for this appointment.
   */
  appointmentid?: number;
  /**
   * Omit any encounters later than this date
   */
  enddate?: string;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * The ID of the provider for this encounter
   */
  providerid?: number;
  /**
   * Query diagnosis information for every encounter
   */
  showdiagnoses?: boolean;
  /**
   * Retrieve all encounter types, by default only VISIT and ORDERSONLY are retrieved.
   */
  showalltypes?: boolean;
  /**
   * By default only encounters in OPEN, CLOSED, or REVIEW status are retrieved, with this flag, encounters aren't filtered by status.
   */
  showallstatuses?: boolean;
  /**
   * Omit any encounters earlier than this date
   */
  startdate?: string;
  /**
   * Number of entries to return (default 1000, max 10000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Retrieves the patients laboratory results.
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/labresults
 */
export interface PatientLabResultsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Filter the results based on the lab result's result status. Since the result status is a free text field, this list is not exhaustive, but does represent a majority of the used statuses.
   */
  labresultstatus?: string;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * If true, interpretation template added to the document is also returned.
   */
  showtemplate?: boolean;
  /**
   * ID used when the lab results sends the exact same result multiple times.
   */
  exactduplicatedocumentid?: number;
  /**
   * If true, filters out results that have been marked as an as exact duplicate of another.
   */
  hideduplicate?: boolean;
  /**
   * Filter the results based on the analyte's result status. Since the result status is a free text field, this list is not exhaustive, but does represent a majority of the used statuses.
   */
  analyteresultstatus?: string;
  /**
   * Includes the lab results and analytes marked as hidden. Hidden lab results and analytes are created when they are manually entered, for example on the qm tab or in flowsheets.
   */
  showhidden?: boolean;
  /**
   * Include the translation of the abnormalflag into HL7 code standards.
   */
  showabnormaldetails?: boolean;
  /**
   * ID used when the lab sends a result and later sends a more complete version of the result with additional information.
   */
  supersededdocumentid?: number;
  /**
   * If true, result codified data is returned.
   */
  showresultcodifieddata?: boolean;
  /**
   * Filter lab orders not individual results that are on or before this date. Example: enddate=1/21/2018. If no enddate is specified, all lab orders found since startdate will be included if specified.
   */
  enddate?: string;
  /**
   * If true, only documents published to the portal at the time of this call are returned.
   */
  showportalonly?: boolean;
  /**
   * ID used to return lab results for a specific encounter.
   */
  allresultsbyencounterid?: number;
  /**
   * Filter lab orders not individual results that are on or after this date. Example: startdate=6/21/2015. If no startdate is specified, all prior lab orders will be included until enddate if specified.
   */
  startdate?: string;
  /**
   * Number of entries to return (default 1000, max 10000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
  /**
   * User name of the patient in the third party application.
   */
  THIRDPARTYUSERNAME?: string;
  /**
   * When 'true' is passed we will collect relevant data and store in our database.
   */
  PATIENTFACINGCALL?: boolean;
}

/**
 * Retrieves a specific lab result document information
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/documents/labresult/{labresultid}
 */
export interface PatientLabResultDocumentParams {
  /**
   * labresultid
   */
  labresultid: number;
  /**
   * patientid
   */
  patientid: number;
  /**
   * If true, interpretation template added to the document is also returned.
   */
  showtemplate?: boolean;
  /**
   * If true, entityid and entitytype will be returned. entityid will be populated in createduser attribute.
   */
  getentityinfo?: boolean;
  /**
   * If true, codified data consisting of ordercodes are returned.
   */
  showresultcodifieddata?: boolean;
}

/**
 * Retrieves medical history of a specific patient
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/medicalhistory
 */
export interface PatientMedicalHistoryParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department ID.
   */
  departmentid: number;
}

/**
 * Updates the medical history of a specific patient
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/medicalhistory
 */
export interface UpdatePatientMedicalHistoryParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves a list of prescription document information for a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/documents/prescription
 */
export interface PatientPrescriptionsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * Show only documents attached to this encounter.
   */
  encounterid?: number;
  /**
   * An optional filter to specify the end of the documents search date range (MM/DD/YYYY). Inclusive.
   */
  enddate?: string;
  /**
   * The status of the task to filter document results.
   */
  status?: string;
  /**
   * The class(es) of document(s) comma separated.
   */
  documentclass?: string;
  /**
   * The document subclass to filter document results.
   */
  documentsubclass?: string;
  /**
   * By default, deleted documents are not listed.  Set to list these.
   */
  showdeleted?: boolean;
  /**
   * If set, include orders that were declined
   */
  showdeclinedorders?: boolean;
  /**
   * An optional filter to specify the start of the documents search date range (MM/DD/YYYY). Inclusive.
   */
  startdate?: string;
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
 * Retrieves the list of patient lab analytes
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/analytes
 */
export interface PatientAnalytesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Filter the results based on the lab result's result status. Since the result status is a free text field, this list is not exhaustive, but does represent a majority of the used statuses.
   */
  labresultstatus?: string;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * If true, interpretation template added to the document is also returned.
   */
  showtemplate?: boolean;
  /**
   * ID used when the lab results sends the exact same result multiple times.
   */
  exactduplicatedocumentid?: number;
  /**
   * If true, filters out results that have been marked as an as exact duplicate of another.
   */
  hideduplicate?: boolean;
  /**
   * Filter the results based on the analyte's result status. Since the result status is a free text field, this list is not exhaustive, but does represent a majority of the used statuses.
   */
  analyteresultstatus?: string;
  /**
   * Includes the lab results and analytes marked as hidden. Hidden lab results and analytes are created when they are manually entered, for example on the qm tab or in flowsheets.
   */
  showhidden?: boolean;
  /**
   * Include the translation of the abnormalflag into HL7 code standards.
   */
  showabnormaldetails?: boolean;
  /**
   * ID used when the lab sends a result and later sends a more complete version of the result with additional information.
   */
  supersededdocumentid?: number;
  /**
   * If true, result codified data is returned.
   */
  showresultcodifieddata?: boolean;
  /**
   * Filter lab orders not individual results that are on or before this date. Example: enddate=1/21/2018. If no enddate is specified, all lab orders found since startdate will be included if specified.
   */
  enddate?: string;
  /**
   * If true, only documents published to the portal at the time of this call are returned.
   */
  showportalonly?: boolean;
  /**
   * ID used to return lab results for a specific encounter.
   */
  allresultsbyencounterid?: number;
  /**
   * Filter lab orders not individual results that are on or after this date. Example: startdate=6/21/2015. If no startdate is specified, all prior lab orders will be included until enddate if specified.
   */
  startdate?: string;
  /**
   * Number of entries to return (default 1000, max 10000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Retrieves a list of patient's appointments
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/appointments
 */
export interface PatientAppointmentsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Show appointments that were before today
   */
  showpast?: string;
  /**
   * Show indicator for if this is a native athenatelehealth appointment
   */
  showtelehealth?: boolean;
  /**
   * Sort order by appointment date
   */
  sortorder?: string;
  /**
   * Show expected procedure codes.
   */
  showexpectedprocedurecodes?: string;
  /**
   * End of the appointment search date range (mm/dd/yyyy).  Inclusive.
   */
  enddate?: string;
  /**
   * By default, the expected co-pay is returned. For performance purposes, you can set this to false and copay will not be populated.
   */
  showcopay?: boolean;
  /**
   * Show cancelled appointments
   */
  showcancelled?: string;
  /**
   * Start of the appointment search date range (mm/dd/yyyy).  Inclusive.
   */
  startdate?: string;
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
 * Retrieve a list of documents for a specific patient Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/documents
 */
export interface PatientDocumentsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * When "true" is passed we will return filetype, filesize and originalfilename if applicable
   */
  showmetadata?: boolean;
  /**
   * Show only documents attached to this encounter.
   */
  encounterid?: number;
  /**
   * The status of the task to filter document results.
   */
  status?: string;
  /**
   * An optional filter to specify the end of the documents search date range (MM/DD/YYYY). Inclusive.
   */
  enddate?: string;
  /**
   * The class(es) of document(s) comma separated.
   */
  documentclass?: string;
  /**
   * The document subclass to filter document results.
   */
  documentsubclass?: string;
  /**
   * By default, deleted documents are not listed.  Set to list these.
   */
  showdeleted?: boolean;
  /**
   * If true, entityid and entitytype will be returned. entityid will be populated in createduser attribute.
   */
  getentityinfo?: boolean;
  /**
   * If set, include orders that were declined
   */
  showdeclinedorders?: boolean;
  /**
   * An optional filter to specify the start of the documents search date range (MM/DD/YYYY). Inclusive.
   */
  startdate?: string;
  /**
   * Number of entries to return (default 1000, max 10000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Create a document in patient's chart based on the document subclass
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/documents
 */
export interface CreatePatientDocumentParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Creates a document record of a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/documents/encounterdocument
 */
export interface CreatePatientEncounterDocumentParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves the patient's default pharmacy information
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/pharmacies/default
 */
export interface PatientDefaultPharmacyParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
}

/**
 * Modifies patient's default pharmacy information
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/pharmacies/default
 */
export interface SetPatientDefaultPharmacyParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieve preferred pharmacy for a specific patient chart
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/pharmacies/preferred
 */
export interface PatientPreferredPharmaciesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * Number of entries to return (default 100, max 1000)Please note that this endpoint has a different default and max than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Modifies preferred pharmacy for a specific patient chart
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/pharmacies/preferred
 */
export interface AddPatientPreferredPharmacyParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieve preferred laboratory information for a specific patient chart
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/labs/default
 */
export interface PatientDefaultLaboratoryParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
}

/**
 * Modifies preferred laboratory for a specific patient chart
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/labs/default
 */
export interface SetPatientDefaultLaboratoryParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves a list of selected social history templates for specific patient
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/socialhistory/templates
 */
export interface PatientSocialHistoryTemplatesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
}

/**
 * No description
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/socialhistory/templates
 */
export interface SetPatientSocialHistoryTemplatesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Modifies the social history information of a specific patient
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/socialhistory
 */
export interface UpdatePatientSocialHistoryParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves the social history information of a specific patient
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/socialhistory
 */
export interface PatientSocialHistoryParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * Include questions that the provider did not perform.
   */
  shownotperformedquestions?: boolean;
  /**
   * The intended audience for the data. If given, questions marked as confidential for this audience will be withheld.
   */
  recipientcategory?: string;
  /**
   * Include questions where there is no current answer.
   */
  showunansweredquestions?: boolean;
}

/**
 * Retrieves list of patient's medication and medication details
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/medications
 */
export interface PatientMedicationsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenanet department ID
   */
  departmentid: number;
  /**
   * Shows the list of NDC numbers related to the medication.
   */
  showndc?: boolean;
  /**
   * Shows the list of RxNorm Identifiers related to the medication. The list may contain both branded and generic identifiers. Note: Not All medications would include RX Norm.
   */
  showrxnorm?: boolean;
  /**
   * Historical or Active or Denied. Will return a list of a patient's active or historical or denied medications.
   */
  medicationtype?: string;
  /**
   * Include pending medications associated with approved future orders. These medications have not yet been submitted.
   */
  showpend?: boolean;
  /**
   * User name of the patient in the third party application.
   */
  THIRDPARTYUSERNAME?: string;
  /**
   * When 'true' is passed we will collect relevant data and store in our database.
   */
  PATIENTFACINGCALL?: boolean;
}

/**
 * Add a new medication to the patient's medication list
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/medications
 */
export interface AddPatientMedicationParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Modifies the patient 's existing medication
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/medications
 */
export interface UpdatePatientMedicationsParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves list of allergens, allergy reactions, severity documented in the patient chart
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/allergies
 */
export interface PatientAllergiesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * The athenaNet department id.
   */
  departmentid: number;
  /**
   * Include deactivated allergies
   */
  showinactive?: boolean;
  /**
   * User name of the patient in the third party application.
   */
  THIRDPARTYUSERNAME?: string;
  /**
   * When 'true' is passed we will collect relevant data and store in our database.
   */
  PATIENTFACINGCALL?: boolean;
}

/**
 * Modifies list of allergies documented in the patient chart
 *
 * Endpoint: /v1/{practiceid}/chart/{patientid}/allergies
 */
export interface UpdatePatientAllergiesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Modifies a patient's verified privacy information
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/privacyinformationverified
 */
export interface VerifyPatientPrivacyInformationParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Creates a new record of patient insurance for a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/insurances
 */
export interface CreatePatientInsuranceParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Updates a patient insurances for a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/insurances
 */
export interface UpdatePatientInsuranceParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Deletes the record of patient insurances for a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/insurances
 */
export interface DeletePatientInsuranceParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * 1 = primary, 2 = secondary.
   */
  sequencenumber: number;
  /**
   * If set, we will use the department id in an attempt to cancel insurance for the local patient.
   */
  departmentid?: number;
  /**
   * Optional note as to why this is being cancelled. Maximum 400 characters
   */
  cancellationnote?: string;
}

/**
 * Modifies existing patient's insurance-card image
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/insurances/{insuranceid}/image
 */
export interface UpdatePatientInsuranceCardImageParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * insuranceid
   */
  insuranceid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Records the data related to a cash, check, or non-CCP credit card patient payment
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/recordpayment
 */
export interface RecordPaymentParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves all patient insurances for a specific patient Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/insurances
 */
export interface PatientInsurancesParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * If set, we will use the department id in an attempt to find the local patient.
   */
  departmentid?: number;
  /**
   * Set to true to allow ability to find patients with record restrictions and blocked patients. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: boolean;
  /**
   * If set, will show full SSN instead of a masked number.
   */
  showfullssn?: boolean;
  /**
   * If set, include cancelled and expired insurances.
   */
  showcancelled?: boolean;
  /**
   * Number of entries to return (default 100, max 5000)Please note that this endpoint has a different default than normal.
   */
  limit?: number;
  /**
   * Starting point of entries; 0-indexed
   */
  offset?: number;
}

/**
 * Create a record of patient's image in the system
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/photo
 */
export interface UpdatePatientPhotoParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Creates a patient case document record of a specific patient
 *
 * Endpoint: /v1/{practiceid}/patients/{patientid}/documents/patientcase
 */
export interface CreatePatientCaseParams {
  /**
   * patientid
   */
  patientid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}
