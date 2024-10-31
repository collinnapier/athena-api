export type AllPatientsResponse = {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
  driverslicenseexpirationdate: string;
  driverslicensenumber: string;
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's legal first name
     */
  firstname: string;
    /**
     * First name the patient uses - may differ from legal first name
     */
  firstnameused: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * The patient race hierarchical code
     */
  hierarchicalcode: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;
    /**
     * List of active patient insurance packages. Only shown for a single patient and if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
  driverslicenseexpirationdate: string;
  driverslicensenumber: string;
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's legal first name
     */
  firstname: string;
    /**
     * First name the patient uses - may differ from legal first name
     */
  firstnameused: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * The patient race hierarchical code
     */
  hierarchicalcode: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;}[];
    /**
     * Language of the patient, using the ISO 639.2 code. (http://www.loc.gov/standards/iso639-2/php/code_list.php; "T" or terminology code) Special case: use "declined" to indicate that the patient declined to answer.
     */
  language6392code: string;
    /**
     * The last appointment for this patient (before today), excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  lastappointment: string;
    /**
     * Tthe last email for this patient on file.
     */
  lastemail: string;
    /**
     * Patient's last name
     */
  lastname: string;
    /**
     * Marital Status (D=Divorced, M=Married, S=Single, U=Unknown, W=Widowed, X=Separated, P=Partner)
     */
  maritalstatus: string;
    /**
     * The long version of the marital status.
     */
  maritalstatusname: string;
    /**
     * Medication history consent status.  If a practice doesn't have RXHub or Surescripts enabled, this will be null
     */
  medicationhistoryconsentverified: boolean;
    /**
     * Patient's middle name
     */
  middlename: string;
    /**
     * The ID of the mobile carrier, from /mobilecarriers or the list below.
     */
  mobilecarrierid: string;
    /**
     * The patient's mobile phone number. On input, 'declined' can be used to indicate no number. (Alternatively, hasmobile can also be set to false. "declined" simply does this for you.)  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  mobilephone: string;
    /**
     * The full name of the next of kin.
     */
  nextkinname: string;
    /**
     * The next of kin phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  nextkinphone: string;
    /**
     * The next of kin relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  nextkinrelationship: string;
    /**
     * Notes associated with this patient.
     */
  notes: string;
    /**
     * Occupation of the patient, using the US Census occupation code (code system 2.16.840.1.113883.6.240).  "other" can be used as well.
     */
  occupationcode: string;
    /**
     * Set to true if a patient wishes to get e-statements instead of paper statements. Should only be set for patients with an email address and clients with athenaCommunicator. The language we use in the portal is, "Future billing statements will be sent to you securely via your Patient Portal account. You will receive an email notice when new statements are available." This language is not required, but it is given as a suggestion.
     */
  onlinestatementonlyyn: string;
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
    /**
     * The URL to the patient photo
     */
  patientphotourl: string;
    /**
     * True if the patient has a photo uploaded
     */
  patientphotoyn: boolean;
    /**
     * This flag is set if the patient has been given access to the portal. This may be set by the API user if a patient has been given access to the portal "by providing a preprinted brochure or flyer showing the URL where patients can access their Patient Care Summaries." The practiceinfo endpoint can provide the portal URL. While technically allowed, it would be very unusual to set this to false via the API.
     */
  portalaccessgiven: string;
  portalsignatureonfile: boolean;
    /**
     * Portal status details.  See /patients/{patientid}/portalstatus for details.
     */
  portalstatus: string;
  portaltermsonfile: boolean;
    /**
     * Patient's poverty level (% of the Federal Poverty Level), as calculated from family size, income per pay period, pay period, and state. Typically only valued if client has Federal Poverty Level fields turned on.
     */
  povertylevelcalculated: string;
    /**
     * Patient's family size (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelfamilysize: string;
    /**
     * Indicates if the patient delcines to provide "povertylevelfamilysize". Should be set to Yes if the patient declines.
     */
  povertylevelfamilysizedeclined: string;
    /**
     * Indicates if the patient delcines to provide "povertylevelincomeperpayperiod". Should be set to Yes if the patient declines.
     */
  povertylevelincomedeclined: string;
    /**
     * Patient's pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelincomepayperiod: string;
    /**
     * Patient's income per specified pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelincomeperpayperiod: string;
    /**
     * Indicates whether or not the patient declines to provide an income level.
     */
  povertylevelincomerangedeclined: string;
    /**
     * The patient's preferred name (i.e. nickname).
     */
  preferredname: string;
    /**
     * The patient's "current" department. This field is not always set by the practice.
     */
  primarydepartmentid: string;
    /**
     * The "primary" provider for this patient, if set.
     */
  primaryproviderid: string;
    /**
     * This flag is set if the patient's privacy information has been verified. Privacy information returns True if all of the items referenced in GET /patients/{patientid}/privacyinformationverified are true. Privacy information returns false if any of the items referenced in the GET /patients/{patientid}/privacyinformationverified API are false or expired.
     */
  privacyinformationverified: boolean;
    /**
     * Used to identify this patient as living in public housing. Only settable if client has Social Determinant fields turned on.
     */
  publichousing: string;
    /**
     * The patient race, using the 2.16.840.1.113883.5.104 codeset.  See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple races for input.  The first race will be considered "primary".  Note: you must update all values at once if you update any.
     */
  race: string;
    /**
     * The patient's primary race name.  See race for more complete details.
     */
  racename: string;
    /**
     * The referral / "how did you hear about us" ID.
     */
  referralsourceid: string;
    /**
     * Date the patient was registered.
     */
  registrationdate: string;
    /**
     * Used to identify this patient as school-based health center patient. Only settable if client has Social Determinant fields turned on.
     */
  schoolbasedhealthcenter: string;
    /**
     * Patient's sex (M/F)
     */
  sex: string;
  ssn: string;
    /**
     * Patient's state (2 letter abbreviation)
     */
  state: string;
    /**
     * The "status" of the patient, one of active, inactive, prospective, or deleted.
     */
  status: string;
    /**
     * Patient's name suffix
     */
  suffix: string;
    /**
     * Used to identify this patient as a veteran. Only settable if client has Social Determinant fields turned on.
     */
  veteran: string;
    /**
     * The patient's work phone number.  Generally not used to contact a patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  workphone: string;
    /**
     * Patient's zip.  Matching occurs on first 5 characters.
     */
  zip: string;
}
export type FindPatientResponse = {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;
    /**
     * List of active patient insurance packages. Only shown for a single patient and if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;}[];
    /**
     * Language of the patient, using the ISO 639.2 code. (http://www.loc.gov/standards/iso639-2/php/code_list.php; "T" or terminology code) Special case: use "declined" to indicate that the patient declined to answer.
     */
  language6392code: string;
    /**
     * The last appointment for this patient (before today), excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  lastappointment: string;
    /**
     * The last email for this patient on file.
     */
  lastemail: string;
    /**
     * Patient's last name
     */
  lastname: string;
    /**
     * Date on which patient record was last updated.
     */
  lastupdated: string;
    /**
     * User who last updated the patient record.
     */
  lastupdatedby: string;
    /**
     * 'Given showlocalpatientid is true, comma separated local patient id will be returned, if patient id is enterprise id else given patient id will be displayed.'
     */
  localpatientid: string;
    /**
     * Marital Status (D=Divorced, M=Married, S=Single, U=Unknown, W=Widowed, X=Separated, P=Partner)
     */
  maritalstatus: string;
    /**
     * The long version of the marital status.
     */
  maritalstatusname: string;
    /**
     * Medication history consent status.  If a practice doesn't have RXHub or Surescripts enabled, this will be null
     */
  medicationhistoryconsentverified: boolean;
    /**
     * Patient's middle name
     */
  middlename: string;
    /**
     * The ID of the mobile carrier, from /mobilecarriers or the list below.
     */
  mobilecarrierid: string;
    /**
     * The patient's mobile phone number. On input, 'declined' can be used to indicate no number. (Alternatively, hasmobile can also be set to false. "declined" simply does this for you.)  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  mobilephone: string;
    /**
     * The full name of the next of kin.
     */
  nextkinname: string;
    /**
     * The next of kin phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  nextkinphone: string;
    /**
     * The next of kin relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  nextkinrelationship: string;
    /**
     * Notes associated with this patient.
     */
  notes: string;
    /**
     * Occupation of the patient, using the US Census occupation code (code system 2.16.840.1.113883.6.240).  "other" can be used as well.
     */
  occupationcode: string;
    /**
     * Set to true if a patient wishes to get e-statements instead of paper statements. Should only be set for patients with an email address and clients with athenaCommunicator. The language we use in the portal is, "Future billing statements will be sent to you securely via your Patient Portal account. You will receive an email notice when new statements are available." This language is not required, but it is given as a suggestion.
     */
  onlinestatementonlyyn: string;
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
    /**
     * The URL to the patient photo
     */
  patientphotourl: string;
    /**
     * True if the patient has a photo uploaded
     */
  patientphotoyn: boolean;
    /**
     * This flag is set if the patient has been given access to the portal. This may be set by the API user if a patient has been given access to the portal "by providing a preprinted brochure or flyer showing the URL where patients can access their Patient Care Summaries." The practiceinfo endpoint can provide the portal URL. While technically allowed, it would be very unusual to set this to false via the API.
     */
  portalaccessgiven: string;
    /**
     * This flag is set if the patient's signature is on file
     */
  portalsignatureonfile: boolean;
    /**
     * Portal status details.  See /patients/{patientid}/portalstatus for details.
     */
  portalstatus: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;
    /**
     * List of active patient insurance packages. Only shown for a single patient and if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;}[];
    /**
     * Language of the patient, using the ISO 639.2 code. (http://www.loc.gov/standards/iso639-2/php/code_list.php; "T" or terminology code) Special case: use "declined" to indicate that the patient declined to answer.
     */
  language6392code: string;
    /**
     * The last appointment for this patient (before today), excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  lastappointment: string;
    /**
     * The last email for this patient on file.
     */
  lastemail: string;
    /**
     * Patient's last name
     */
  lastname: string;
    /**
     * Date on which patient record was last updated.
     */
  lastupdated: string;
    /**
     * User who last updated the patient record.
     */
  lastupdatedby: string;
    /**
     * 'Given showlocalpatientid is true, comma separated local patient id will be returned, if patient id is enterprise id else given patient id will be displayed.'
     */
  localpatientid: string;
    /**
     * Marital Status (D=Divorced, M=Married, S=Single, U=Unknown, W=Widowed, X=Separated, P=Partner)
     */
  maritalstatus: string;
    /**
     * The long version of the marital status.
     */
  maritalstatusname: string;
    /**
     * Medication history consent status.  If a practice doesn't have RXHub or Surescripts enabled, this will be null
     */
  medicationhistoryconsentverified: boolean;
    /**
     * Patient's middle name
     */
  middlename: string;
    /**
     * The ID of the mobile carrier, from /mobilecarriers or the list below.
     */
  mobilecarrierid: string;
    /**
     * The patient's mobile phone number. On input, 'declined' can be used to indicate no number. (Alternatively, hasmobile can also be set to false. "declined" simply does this for you.)  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  mobilephone: string;
    /**
     * The full name of the next of kin.
     */
  nextkinname: string;
    /**
     * The next of kin phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  nextkinphone: string;
    /**
     * The next of kin relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  nextkinrelationship: string;
    /**
     * Notes associated with this patient.
     */
  notes: string;
    /**
     * Occupation of the patient, using the US Census occupation code (code system 2.16.840.1.113883.6.240).  "other" can be used as well.
     */
  occupationcode: string;
    /**
     * Set to true if a patient wishes to get e-statements instead of paper statements. Should only be set for patients with an email address and clients with athenaCommunicator. The language we use in the portal is, "Future billing statements will be sent to you securely via your Patient Portal account. You will receive an email notice when new statements are available." This language is not required, but it is given as a suggestion.
     */
  onlinestatementonlyyn: string;
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
    /**
     * The URL to the patient photo
     */
  patientphotourl: string;
    /**
     * True if the patient has a photo uploaded
     */
  patientphotoyn: boolean;
    /**
     * This flag is set if the patient has been given access to the portal. This may be set by the API user if a patient has been given access to the portal "by providing a preprinted brochure or flyer showing the URL where patients can access their Patient Care Summaries." The practiceinfo endpoint can provide the portal URL. While technically allowed, it would be very unusual to set this to false via the API.
     */
  portalaccessgiven: string;
    /**
     * This flag is set if the patient's signature is on file
     */
  portalsignatureonfile: boolean;}[];
    /**
     * Flag determining whether or not the patient has accepted the Terms and Conditions for the patient portal.
     */
  portaltermsonfile: boolean;
    /**
     * Patient's poverty level (% of the Federal Poverty Level), as calculated from family size, income per pay period, pay period, and state. Typically only valued if client has Federal Poverty Level fields turned on.
     */
  povertylevelcalculated: number;
    /**
     * Patient's family size (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelfamilysize: string;
    /**
     * Indicates if the patient delcines to provide "povertylevelfamilysize". Should be set to Yes if the patient declines.
     */
  povertylevelfamilysizedeclined: string;
    /**
     * Indicates if the patient delcines to provide "povertylevelincomeperpayperiod". Should be set to Yes if the patient declines.
     */
  povertylevelincomedeclined: string;
    /**
     * Patient's pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelincomepayperiod: string;
    /**
     * Patient's income per specified pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelincomeperpayperiod: string;
    /**
     * Indicates if the patient declines to provide an income range level. True if the patient declines.
     */
  povertylevelincomerangedeclined: string;
    /**
     * The patient's preferred name (i.e. nickname).
     */
  preferredname: string;
    /**
     * Pronoun this patient uses.
     */
  preferredpronouns: string;
    /**
     * The IDs of the patient this one was merged from.
     */
  previouspatientids: number[];
    /**
     * The patient's "current" department. This field is not always set by the practice.
     */
  primarydepartmentid: string;
    /**
     * The "primary" provider for this patient, if set.
     */
  primaryproviderid: string;
    /**
     * This flag is set if the patient's privacy information has been verified. Privacy information returns True if all of the items referenced in GET /patients/{patientid}/privacyinformationverified are true. Privacy information returns false if any of the items referenced in the GET /patients/{patientid}/privacyinformationverified API are false or expired.
     */
  privacyinformationverified: boolean;
    /**
     * Used to identify this patient as living in public housing. Only settable if client has Social Determinant fields turned on.
     */
  publichousing: string;
    /**
     * The patient race, using the 2.16.840.1.113883.5.104 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple races for input.  The first race will be considered "primary".  Note: you must update all values at once if you update any.
     */
  race: string;
    /**
     * The patient race hierarchical code as specified in Race & Ethnicity - CDC
   * (2.16.840.1.113883.1.11.14914)
     */
  racecode: string;
    /**
     * The patient's primary race name.  See race for more complete details.
     */
  racename: string;
    /**
     * The referral / "how did you hear about us" ID.
     */
  referralsourceid: string;
    /**
     * If choosing "other" for referral source, this is the text field that can be filled out.
     */
  referralsourceother: string;
    /**
     * Date the patient was registered.
     */
  registrationdate: string;
    /**
     * Used to identify this patient as school-based health center patient. Only settable if client has Social Determinant fields turned on.
     */
  schoolbasedhealthcenter: string;
    /**
     * Patient's sex (M/F)
     */
  sex: string;
    /**
     * Sexual orientation of this patient.
     */
  sexualorientation: string;
    /**
     * If a patient does not identify with any prescribed sexual orientation choice, this field stores the patient-provided description of sexual orientation.
     */
  sexualorientationother: string;
    /**
     * The date on which the patient's consent to receive text messages as per FCC requirements was recorded. In order for this to be valid, a valid mobile phone number must be set and the practice setting 'Hide SMS Opt-in option' must be set to Off.
     */
  smsoptindate: string;
    /**
     * The patient's SSN
     */
  ssn: string;
    /**
     * Patient's state (2 letter abbreviation)
     */
  state: string;
    /**
     * The "status" of the patient, one of active, inactive, prospective, or deleted.
     */
  status: string;
    /**
     * Patient's name suffix
     */
  suffix: string;
    /**
     * Used to identify this patient as a veteran. Only settable if client has Social Determinant fields turned on.
     */
  veteran: string;
    /**
     * The patient's work phone number.  Generally not used to contact a patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  workphone: string;
    /**
     * Patient's zip.  Matching occurs on first 5 characters.
     */
  zip: string;
}
export type FindBestmatchPatientsResponse = {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;
    /**
     * List of active patient insurance packages. Only shown for a single patient and if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;}[];
    /**
     * Language of the patient, using the ISO 639.2 code. (http://www.loc.gov/standards/iso639-2/php/code_list.php; "T" or terminology code) Special case: use "declined" to indicate that the patient declined to answer.
     */
  language6392code: string;
    /**
     * The last appointment for this patient (before today), excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  lastappointment: string;
    /**
     * The last email for this patient on file.
     */
  lastemail: string;
    /**
     * Patient's last name
     */
  lastname: string;
    /**
     * Date on which patient record was last updated.
     */
  lastupdated: string;
    /**
     * User who last updated the patient record.
     */
  lastupdatedby: string;
    /**
     * 'Given showlocalpatientid is true, comma separated local patient id will be returned, if patient id is enterprise id else given patient id will be displayed.'
     */
  localpatientid: string;
    /**
     * Marital Status (D=Divorced, M=Married, S=Single, U=Unknown, W=Widowed, X=Separated, P=Partner)
     */
  maritalstatus: string;
    /**
     * The long version of the marital status.
     */
  maritalstatusname: string;
    /**
     * Medication history consent status.  If a practice doesn't have RXHub or Surescripts enabled, this will be null
     */
  medicationhistoryconsentverified: boolean;
    /**
     * Patient's middle name
     */
  middlename: string;
    /**
     * The ID of the mobile carrier, from /mobilecarriers or the list below.
     */
  mobilecarrierid: string;
    /**
     * The patient's mobile phone number. On input, 'declined' can be used to indicate no number. (Alternatively, hasmobile can also be set to false. "declined" simply does this for you.)  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  mobilephone: string;
    /**
     * The full name of the next of kin.
     */
  nextkinname: string;
    /**
     * The next of kin phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  nextkinphone: string;
    /**
     * The next of kin relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  nextkinrelationship: string;
    /**
     * Notes associated with this patient.
     */
  notes: string;
    /**
     * Occupation of the patient, using the US Census occupation code (code system 2.16.840.1.113883.6.240).  "other" can be used as well.
     */
  occupationcode: string;
    /**
     * Set to true if a patient wishes to get e-statements instead of paper statements. Should only be set for patients with an email address and clients with athenaCommunicator. The language we use in the portal is, "Future billing statements will be sent to you securely via your Patient Portal account. You will receive an email notice when new statements are available." This language is not required, but it is given as a suggestion.
     */
  onlinestatementonlyyn: string;
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
    /**
     * The URL to the patient photo
     */
  patientphotourl: string;
    /**
     * True if the patient has a photo uploaded
     */
  patientphotoyn: boolean;
    /**
     * This flag is set if the patient has been given access to the portal. This may be set by the API user if a patient has been given access to the portal "by providing a preprinted brochure or flyer showing the URL where patients can access their Patient Care Summaries." The practiceinfo endpoint can provide the portal URL. While technically allowed, it would be very unusual to set this to false via the API.
     */
  portalaccessgiven: string;
    /**
     * This flag is set if the patient's signature is on file
     */
  portalsignatureonfile: boolean;
    /**
     * Portal status details.  See /patients/{patientid}/portalstatus for details.
     */
  portalstatus: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;
    /**
     * List of active patient insurance packages. Only shown for a single patient and if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;
    /**
     * Includes Patients privacy information
     */
  detailedprivacyinfo: {    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;
    /**
     * Same as /patients/{patientid}/customfields call, but without the department ID. Depending on setup, and only in large practices, the custom field values may or may not be the same between departments. If this is a concern, using the /patients/{patientid}/customfields call is preferred. Only for a single patient when showcustomfields is set to true.
     */
  customfields: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;
    /**
     * Claim level details on patient balances.  (This is only included when SHOWBALANCEDETAILS is set.)
     */
  claimbalancedetails: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;
    /**
     * List of balances owed by the patient, broken down by provider (financial) group.
     */
  balances: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;
  allpatientstatuses: {
    /**
     * Patient's address - 1st line
     */
  address1: string;
    /**
     * Patient's address - 2nd line
     */
  address2: string;
    /**
     * Used to identify this patient as an agricultural worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworker: string;
    /**
     * For patients that are agricultural workers, identifies the type of worker. Only settable if client has Social Determinant fields turned on.
     */
  agriculturalworkertype: string;}[];
    /**
     * Alternate first name that differs from legal name.
     */
  altfirstname: string;
    /**
     * Sex that this patient was assigned at birth.
     */
  assignedsexatbirth: string;}[];
    /**
     * The patient's preference for care summary delivery.
     */
  caresummarydeliverypreference: string;
    /**
     * Patient's city
     */
  city: string;}[];
    /**
     * Gives the confidentiality code for the patient. Only returned when IGNORERESTRICTIONS is set to true, or the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * The flag is used to record the consent of a patient to receive automated calls per FCC requirements. The requested legal language is 'Entry of any telephone contact number constitutes written consent to receive any automated, prerecorded, and artificial voice telephone calls initiated by the Practice. To alter or revoke this consent, visit the Patient Portal "Contact Preferences" page.'
     */
  consenttocall: boolean;
    /**
     * The flag is used to record the consent of a patient to receive text messages per FCC requirements. In order for this to be true, a valid mobile phone number must be set and the practice setting "Hide SMS Opt-in option" must be set to Off.
     */
  consenttotext: boolean;
    /**
     * Emergency contact home phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contacthomephone: string;
    /**
     * Emergency contact mobile phone.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  contactmobilephone: string;
    /**
     * The name of the (emergency) person to contact about the patient. The contactname, contactrelationship, contacthomephone, and contactmobilephone fields are all related to the emergency contact for the patient. They are NOT related to the contractpreference_* fields.
     */
  contactname: string;
    /**
     * The MU-required field for "preferred contact method". This is not used by any automated systems.
     */
  contactpreference: string;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_announcement_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_announcement_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "announcement" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_announcement_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_appointment_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_appointment_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "appointment" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_appointment_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_billing_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_billing_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "billing" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_billing_sms: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via email.  Note that this will not be present if the practice or patient has not set it.For completeness, turning email off is supported via the API, but it is discouraged. When email is off, patients may not not get messages from the patient portal.
     */
  contactpreference_lab_email: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via phone.  Note that this will not be present if the practice or patient has not set it.
     */
  contactpreference_lab_phone: boolean;
    /**
     * If set, the patient has indicated a preference to get or not get "lab" communications delivered via SMS.  Note that this will not be present if the practice or patient has not set it.For SMS, there is specific terms of service language that must be used when displaying this as an option to be turned on.  Turning on must be an action by the patient, not a practice user.
     */
  contactpreference_lab_sms: boolean;
    /**
     * Emergency contact relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  contactrelationship: string;
    /**
     * Patient's country code
     */
  countrycode: string;
    /**
     * Patient's country code (ISO 3166-1)
     */
  countrycode3166: string;}[];
    /**
     * If present, the date on which a patient died.
     */
  deceaseddate: string;
    /**
     * The NCPDP ID of the patient's preferred pharmacy.  See http://www.ncpdp.org/ for details. Note: if updating this field, please make sure to have a CLINICALORDERTYPEGROUPID field as well.
     */
  defaultpharmacyncpdpid: string;
    /**
     * Primary (registration) department ID.
     */
  departmentid: string;};
    /**
     * Patient's DOB (mm/dd/yyyy)
     */
  dob: string;
    /**
     * Warning! This patient will not receive any communication from the practice if this field is set to true.
     */
  donotcallyn: boolean;
    /**
     * The expiration date of the patient's driver's license.
     */
  driverslicenseexpirationdate: string;
    /**
     * The number of the patient's driver's license
     */
  driverslicensenumber: string;
    /**
     * The state of the patient's driver's license. This is in the form of a 2 letter state code.
     */
  driverslicensestateid: string;
    /**
     * The URL to the patient's driver's license
     */
  driverslicenseurl: string;
    /**
     * True if the patient has a driver's license uploaded
     */
  driverslicenseyn: boolean;
    /**
     * Patient's email address.  'declined' can be used to indicate just that.
     */
  email: string;
    /**
     * True if email exists. False if patient declined. Null if status is unknown.
     */
  emailexistsyn: boolean;
    /**
     * The patient's employer's address.
     */
  employeraddress: string;
    /**
     * The patient's employer's city.
     */
  employercity: string;
    /**
     * The patient's employer's fax.
     */
  employerfax: string;
    /**
     * The patient's employer's ID (from /employers call)
     */
  employerid: string;
    /**
     * The patient's employer's name.
     */
  employername: string;
    /**
     * The patient's employer's phone number. Normally, this is set by setting employerid. However, setting this value can be used to override this on an individual patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  employerphone: string;
    /**
     * The patient's employer's state.
     */
  employerstate: string;
    /**
     * The patient's employer's zip.
     */
  employerzip: string;
    /**
     * Ethnicity of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer.
     */
  ethnicitycode: string;
    /**
     * Ethnicities of the patient, using the 2.16.840.1.113883.5.50 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple ethnicities for input.  The first ethnicity will be considered "primary".  Note: you must update all values at once if you update any.
     */
  ethnicitycodes: string;
    /**
     * The first appointment for this patient, excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  firstappointment: string;
    /**
     * Patient's first name
     */
  firstname: string;
    /**
     * Gender with which this patient identifies.
     */
  genderidentity: string;
    /**
     * If a patient does not identify with any prescribed gender identity choice, this field stores the patient-provided description of gender identity.
     */
  genderidentityother: string;
    /**
     * Guarantor's address
     */
  guarantoraddress1: string;
    /**
     * Guarantor's address - line 2
     */
  guarantoraddress2: string;
    /**
     * The address of the guarantor is the same as the patient.
     */
  guarantoraddresssameaspatient: boolean;
    /**
     * Guarantor's city
     */
  guarantorcity: string;
    /**
     * Guarantor's country code
     */
  guarantorcountrycode: string;
    /**
     * Guarantor's country code (ISO 3166-1)
     */
  guarantorcountrycode3166: string;
    /**
     * Guarantor's DOB (mm/dd/yyyy)
     */
  guarantordob: string;
    /**
     * Guarantor's email address
     */
  guarantoremail: string;
    /**
     * The guaranror's employer's ID (from /employers call)
     */
  guarantoremployerid: string;
    /**
     * Guarantor's first name
     */
  guarantorfirstname: string;
    /**
     * Guarantor's last name
     */
  guarantorlastname: string;
    /**
     * Guarantor's middle name
     */
  guarantormiddlename: string;
    /**
     * Guarantor's phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  guarantorphone: string;
    /**
     * The guarantor's relationship to the patient
     */
  guarantorrelationshiptopatient: string;
    /**
     * Guarantor's SSN
     */
  guarantorssn: string;
    /**
     * Guarantor's state (2 letter abbreviation)
     */
  guarantorstate: string;
    /**
     * Guarantor's name suffix
     */
  guarantorsuffix: string;
    /**
     * Guarantor's zip
     */
  guarantorzip: string;
    /**
     * The first name of the patient's guardian.
     */
  guardianfirstname: string;
    /**
     * The last name of the patient's guardian.
     */
  guardianlastname: string;
    /**
     * The middle name of the patient's guardian.
     */
  guardianmiddlename: string;
    /**
     * The suffix of the patient's guardian.
     */
  guardiansuffix: string;
    /**
     * Set to false if a client has declined a phone number.
     */
  hasmobileyn: string;
    /**
     * If the patient is homebound, this is true.
     */
  homeboundyn: boolean;
    /**
     * Used to identify this patient as homeless. Only settable if client has Social Determinant fields turned on.
     */
  homeless: string;
    /**
     * For patients that are homeless, provides more detail regarding the patient's homeless situation. Only settable if client has Social Determinant fields turned on.
     */
  homelesstype: string;
    /**
     * The patient's home phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  homephone: string;
    /**
     * Industry of the patient, using the US Census industry code (code system 2.16.840.1.113883.6.310).  "other" can be used as well.
     */
  industrycode: string;}[];
    /**
     * Language of the patient, using the ISO 639.2 code. (http://www.loc.gov/standards/iso639-2/php/code_list.php; "T" or terminology code) Special case: use "declined" to indicate that the patient declined to answer.
     */
  language6392code: string;
    /**
     * The last appointment for this patient (before today), excluding cancelled or no-show appointments. (mm/dd/yyyy h24:mi)
     */
  lastappointment: string;
    /**
     * The last email for this patient on file.
     */
  lastemail: string;
    /**
     * Patient's last name
     */
  lastname: string;
    /**
     * Date on which patient record was last updated.
     */
  lastupdated: string;
    /**
     * User who last updated the patient record.
     */
  lastupdatedby: string;
    /**
     * 'Given showlocalpatientid is true, comma separated local patient id will be returned, if patient id is enterprise id else given patient id will be displayed.'
     */
  localpatientid: string;
    /**
     * Marital Status (D=Divorced, M=Married, S=Single, U=Unknown, W=Widowed, X=Separated, P=Partner)
     */
  maritalstatus: string;
    /**
     * The long version of the marital status.
     */
  maritalstatusname: string;
    /**
     * Medication history consent status.  If a practice doesn't have RXHub or Surescripts enabled, this will be null
     */
  medicationhistoryconsentverified: boolean;
    /**
     * Patient's middle name
     */
  middlename: string;
    /**
     * The ID of the mobile carrier, from /mobilecarriers or the list below.
     */
  mobilecarrierid: string;
    /**
     * The patient's mobile phone number. On input, 'declined' can be used to indicate no number. (Alternatively, hasmobile can also be set to false. "declined" simply does this for you.)  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  mobilephone: string;
    /**
     * The full name of the next of kin.
     */
  nextkinname: string;
    /**
     * The next of kin phone number.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  nextkinphone: string;
    /**
     * The next of kin relationship (one of SPOUSE, PARENT, CHILD, SIBLING, FRIEND, COUSIN, GUARDIAN, OTHER)
     */
  nextkinrelationship: string;
    /**
     * Notes associated with this patient.
     */
  notes: string;
    /**
     * Occupation of the patient, using the US Census occupation code (code system 2.16.840.1.113883.6.240).  "other" can be used as well.
     */
  occupationcode: string;
    /**
     * Set to true if a patient wishes to get e-statements instead of paper statements. Should only be set for patients with an email address and clients with athenaCommunicator. The language we use in the portal is, "Future billing statements will be sent to you securely via your Patient Portal account. You will receive an email notice when new statements are available." This language is not required, but it is given as a suggestion.
     */
  onlinestatementonlyyn: string;
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
    /**
     * The URL to the patient photo
     */
  patientphotourl: string;
    /**
     * True if the patient has a photo uploaded
     */
  patientphotoyn: boolean;
    /**
     * This flag is set if the patient has been given access to the portal. This may be set by the API user if a patient has been given access to the portal "by providing a preprinted brochure or flyer showing the URL where patients can access their Patient Care Summaries." The practiceinfo endpoint can provide the portal URL. While technically allowed, it would be very unusual to set this to false via the API.
     */
  portalaccessgiven: string;
    /**
     * This flag is set if the patient's signature is on file
     */
  portalsignatureonfile: boolean;}[];
    /**
     * Flag determining whether or not the patient has accepted the Terms and Conditions for the patient portal.
     */
  portaltermsonfile: boolean;
    /**
     * Patient's poverty level (% of the Federal Poverty Level), as calculated from family size, income per pay period, pay period, and state. Typically only valued if client has Federal Poverty Level fields turned on.
     */
  povertylevelcalculated: number;
    /**
     * Patient's family size (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelfamilysize: string;
    /**
     * Indicates if the patient delcines to provide "povertylevelfamilysize". Should be set to Yes if the patient declines.
     */
  povertylevelfamilysizedeclined: string;
    /**
     * Indicates if the patient delcines to provide "povertylevelincomeperpayperiod". Should be set to Yes if the patient declines.
     */
  povertylevelincomedeclined: string;
    /**
     * Patient's pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelincomepayperiod: string;
    /**
     * Patient's income per specified pay period (used for determining poverty level). Only settable if client has Federal Poverty Level fields turned on.
     */
  povertylevelincomeperpayperiod: string;
    /**
     * Indicates if the patient declines to provide an income range level. True if the patient declines.
     */
  povertylevelincomerangedeclined: string;
    /**
     * The patient's preferred name (i.e. nickname).
     */
  preferredname: string;
    /**
     * Pronoun this patient uses.
     */
  preferredpronouns: string;
    /**
     * The IDs of the patient this one was merged from.
     */
  previouspatientids: number[];
    /**
     * The patient's "current" department. This field is not always set by the practice.
     */
  primarydepartmentid: string;
    /**
     * The "primary" provider for this patient, if set.
     */
  primaryproviderid: string;
    /**
     * This flag is set if the patient's privacy information has been verified. Privacy information returns True if all of the items referenced in GET /patients/{patientid}/privacyinformationverified are true. Privacy information returns false if any of the items referenced in the GET /patients/{patientid}/privacyinformationverified API are false or expired.
     */
  privacyinformationverified: boolean;
    /**
     * Used to identify this patient as living in public housing. Only settable if client has Social Determinant fields turned on.
     */
  publichousing: string;
    /**
     * The patient race, using the 2.16.840.1.113883.5.104 codeset. See http://www.hl7.org/implement/standards/fhir/terminologies-v3.html Special case: use "declined" to indicate that the patient declined to answer. Multiple values or a tab-seperated list of codes is acceptable for multiple races for input.  The first race will be considered "primary".  Note: you must update all values at once if you update any.
     */
  race: string;
    /**
     * The patient race hierarchical code as specified in Race & Ethnicity - CDC
   * (2.16.840.1.113883.1.11.14914)
     */
  racecode: string;
    /**
     * The patient's primary race name.  See race for more complete details.
     */
  racename: string;
    /**
     * The referral / "how did you hear about us" ID.
     */
  referralsourceid: string;
    /**
     * If choosing "other" for referral source, this is the text field that can be filled out.
     */
  referralsourceother: string;
    /**
     * Date the patient was registered.
     */
  registrationdate: string;
    /**
     * Used to identify this patient as school-based health center patient. Only settable if client has Social Determinant fields turned on.
     */
  schoolbasedhealthcenter: string;
    /**
     * Patient's sex (M/F)
     */
  sex: string;
    /**
     * Sexual orientation of this patient.
     */
  sexualorientation: string;
    /**
     * If a patient does not identify with any prescribed sexual orientation choice, this field stores the patient-provided description of sexual orientation.
     */
  sexualorientationother: string;
    /**
     * The date on which the patient's consent to receive text messages as per FCC requirements was recorded. In order for this to be valid, a valid mobile phone number must be set and the practice setting 'Hide SMS Opt-in option' must be set to Off.
     */
  smsoptindate: string;
    /**
     * The patient's SSN
     */
  ssn: string;
    /**
     * Patient's state (2 letter abbreviation)
     */
  state: string;
    /**
     * The "status" of the patient, one of active, inactive, prospective, or deleted.
     */
  status: string;
    /**
     * Patient's name suffix
     */
  suffix: string;
    /**
     * Used to identify this patient as a veteran. Only settable if client has Social Determinant fields turned on.
     */
  veteran: string;
    /**
     * The patient's work phone number.  Generally not used to contact a patient.  Invalid numbers in a GET/PUT will be ignored.  Patient phone numbers and other data may change, and one phone number may be associated with multiple patients. You are responsible for taking additional steps to verify patient identity and for using this data in accordance with applicable law, including HIPAA.  Invalid numbers in a POST will be ignored, possibly resulting in an error.
     */
  workphone: string;
    /**
     * Patient's zip.  Matching occurs on first 5 characters.
     */
  zip: string;
}
export type CreatePatientResponse = {
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
    /**
     * Error message will be returned if show error message flag is set to true and patient match found.
     */
  errormessage: string;
}
export type UpdatePatientResponse = {
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
}
export type DeletePatientResponse = {
    /**
     * Please remember to never disclose this ID to patients since it may result in inadvertant disclosure that a patient exists in a practice already.
     */
  patientid: string;
}
export type CreatePatientProblemResponse = {
    /**
     * Whether the operation was successful or not.
     */
  success: boolean;
    /**
     * If successful, the athena ID of the newly created problem
     */
  problemid: number;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type FindPatientProblemsResponse = {
    /**
     * List of problems, grouped by problem code
     */
  problems: {
}[];
    /**
     * Total number of problems
     */
  totalcount: number;
    /**
     * Deprecated, used LASTMODIFIEDDATETIME instead. The last date any of the problems in the returned list were updated. Does not include no known problems or the section note, and is date precision.
     */
  lastupdated: string;
    /**
     * The problem section note
     */
  sectionnote: string;
    /**
     * The username of the user who last modified the note, no known problems checkbox, or problems.
     */
  lastmodifiedby: string;
    /**
     * Whether the no known problems checkbox is checked. This is an explicit statement separate from a patient who has no documented problems so far.
     */
  noknownproblems: boolean;
    /**
     * The username of the user who last modified the note.
     */
  notelastmodifiedby: string;
    /**
     * The date and time the note, no known problems checkbox, or problems were last updated.
     */
  lastmodifieddatetime: string;
    /**
     * The date and time the section note was last updated.
     */
  notelastmodifieddatetime: string;
}
export type PatientEncountersResponse = {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;
    /**
     * List of diagnoses for this encounter
     */
  diagnoses: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;}[];
    /**
     * date when this encounter was closed
     */
  closeddate: string;
    /**
     * Username of the provider who closed this encounter
     */
  closeduser: string;
    /**
     * The ID of the provider for this encounter
     */
  providerid: number;
    /**
     * Athena ID for this encounter
     */
  encounterid: number;
    /**
     * The date the encounter was last updated
     */
  lastupdated: string;
    /**
     * The athena department ID of this encounter
     */
  departmentid: number;
    /**
     * The date the encounter was last reopened. The field will not be present if the encounter has not be closed.
     */
  lastreopened: string;
    /**
     * Athena appointment ID resulting in this encounter
     */
  appointmentid: number;
    /**
     * Date when this encounter occured
     */
  encounterdate: string;
    /**
     * Type of encounter (FLOWSHEET, ORDERSONLY, VISIT, etc.). By default only VISIT and ORDERSONLY are shown, use INCLUDEALLtypeS flag to see others.
     */
  encountertype: string;
    /**
     * Patient status
     */
  patientstatus: string;
    /**
     * Phone number of the provider for this encounter
     */
  providerphone: string;
    /**
     * Patient location
     */
  patientlocation: string;
    /**
     * Athena ID for the patient status
     */
  patientstatusid: number;
    /**
     * Last name of the provider for this encounter
     */
  providerlastname: string;
    /**
     * Athena ID for the patient location
     */
  patientlocationid: number;
    /**
     * First name of the provider for this encounter
     */
  providerfirstname: string;
    /**
     * The visit name for this encounter
     */
  encountervisitname: string;
    /**
     * Array ref of username and datetime of user who amended and closed the encounter.
     */
  encounteramendments: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;
    /**
     * List of diagnoses for this encounter
     */
  diagnoses: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;}[];
    /**
     * date when this encounter was closed
     */
  closeddate: string;
    /**
     * Username of the provider who closed this encounter
     */
  closeduser: string;
    /**
     * The ID of the provider for this encounter
     */
  providerid: number;
    /**
     * Athena ID for this encounter
     */
  encounterid: number;
    /**
     * The date the encounter was last updated
     */
  lastupdated: string;
    /**
     * The athena department ID of this encounter
     */
  departmentid: number;
    /**
     * The date the encounter was last reopened. The field will not be present if the encounter has not be closed.
     */
  lastreopened: string;
    /**
     * Athena appointment ID resulting in this encounter
     */
  appointmentid: number;
    /**
     * Date when this encounter occured
     */
  encounterdate: string;
    /**
     * Type of encounter (FLOWSHEET, ORDERSONLY, VISIT, etc.). By default only VISIT and ORDERSONLY are shown, use INCLUDEALLtypeS flag to see others.
     */
  encountertype: string;
    /**
     * Patient status
     */
  patientstatus: string;
    /**
     * Phone number of the provider for this encounter
     */
  providerphone: string;
    /**
     * Patient location
     */
  patientlocation: string;
    /**
     * Athena ID for the patient status
     */
  patientstatusid: number;
    /**
     * Last name of the provider for this encounter
     */
  providerlastname: string;
    /**
     * Athena ID for the patient location
     */
  patientlocationid: number;
    /**
     * First name of the provider for this encounter
     */
  providerfirstname: string;
    /**
     * The visit name for this encounter
     */
  encountervisitname: string;}[];
    /**
     * Username of provider who reviewed and signed the encounter.
     */
  reviewedandsignedby: string;
    /**
     * Date and time of when encounter was reviewed and signed off.
     */
  reviewedandsigneddate: string;
    /**
     * List of Additional Encounter Signature of user/provider.
     */
  additionalencountersignatures: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;
    /**
     * List of diagnoses for this encounter
     */
  diagnoses: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;}[];
    /**
     * date when this encounter was closed
     */
  closeddate: string;
    /**
     * Username of the provider who closed this encounter
     */
  closeduser: string;
    /**
     * The ID of the provider for this encounter
     */
  providerid: number;
    /**
     * Athena ID for this encounter
     */
  encounterid: number;
    /**
     * The date the encounter was last updated
     */
  lastupdated: string;
    /**
     * The athena department ID of this encounter
     */
  departmentid: number;
    /**
     * The date the encounter was last reopened. The field will not be present if the encounter has not be closed.
     */
  lastreopened: string;
    /**
     * Athena appointment ID resulting in this encounter
     */
  appointmentid: number;
    /**
     * Date when this encounter occured
     */
  encounterdate: string;
    /**
     * Type of encounter (FLOWSHEET, ORDERSONLY, VISIT, etc.). By default only VISIT and ORDERSONLY are shown, use INCLUDEALLtypeS flag to see others.
     */
  encountertype: string;
    /**
     * Patient status
     */
  patientstatus: string;
    /**
     * Phone number of the provider for this encounter
     */
  providerphone: string;
    /**
     * Patient location
     */
  patientlocation: string;
    /**
     * Athena ID for the patient status
     */
  patientstatusid: number;
    /**
     * Last name of the provider for this encounter
     */
  providerlastname: string;
    /**
     * Athena ID for the patient location
     */
  patientlocationid: number;
    /**
     * First name of the provider for this encounter
     */
  providerfirstname: string;
    /**
     * The visit name for this encounter
     */
  encountervisitname: string;
    /**
     * Array ref of username and datetime of user who amended and closed the encounter.
     */
  encounteramendments: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;
    /**
     * List of diagnoses for this encounter
     */
  diagnoses: {
    /**
     * Last stage of the encounter
     */
  stage: string;
    /**
     * Status of this encounter (CLOSED, OPEN, PEND). By default only OPEN, CLOSED, and REVIEW statuses are shown, use INCLUDEALLSTATUSES flag to see others.
     */
  status: string;}[];
    /**
     * date when this encounter was closed
     */
  closeddate: string;
    /**
     * Username of the provider who closed this encounter
     */
  closeduser: string;
    /**
     * The ID of the provider for this encounter
     */
  providerid: number;
    /**
     * Athena ID for this encounter
     */
  encounterid: number;
    /**
     * The date the encounter was last updated
     */
  lastupdated: string;
    /**
     * The athena department ID of this encounter
     */
  departmentid: number;
    /**
     * The date the encounter was last reopened. The field will not be present if the encounter has not be closed.
     */
  lastreopened: string;
    /**
     * Athena appointment ID resulting in this encounter
     */
  appointmentid: number;
    /**
     * Date when this encounter occured
     */
  encounterdate: string;
    /**
     * Type of encounter (FLOWSHEET, ORDERSONLY, VISIT, etc.). By default only VISIT and ORDERSONLY are shown, use INCLUDEALLtypeS flag to see others.
     */
  encountertype: string;
    /**
     * Patient status
     */
  patientstatus: string;
    /**
     * Phone number of the provider for this encounter
     */
  providerphone: string;
    /**
     * Patient location
     */
  patientlocation: string;
    /**
     * Athena ID for the patient status
     */
  patientstatusid: number;
    /**
     * Last name of the provider for this encounter
     */
  providerlastname: string;
    /**
     * Athena ID for the patient location
     */
  patientlocationid: number;
    /**
     * First name of the provider for this encounter
     */
  providerfirstname: string;
    /**
     * The visit name for this encounter
     */
  encountervisitname: string;}[];
    /**
     * Username of provider who reviewed and signed the encounter.
     */
  reviewedandsignedby: string;
    /**
     * Date and time of when encounter was reviewed and signed off.
     */
  reviewedandsigneddate: string;}[];
}
export type PatientLabResultsResponse = {
    /**
     * Individual lab result observations/analytes
     */
  analytes: {
}[];
    /**
     * This flag depicts if the lab result has a scanned document attachment or not.
     */
  attachmentexists: boolean;
    /**
     * The created date associated with this lab result. Returned in mm/dd/yyyy format.
     */
  createddate: string;
    /**
     * The created date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  createddatetime: string;
    /**
     * Description for this lab result
     */
  description: string;
    /**
     * The exactduplicatedocumentid of the document.
     */
  exactduplicatedocumentid: number;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country. These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The 'Internal Note' attached to this document.
     */
  internalnote: string;
    /**
     * The interpretation template added to the lab result.
     */
  interpretationtemplate: {    /**
     * Individual lab result observations/analytes
     */
  analytes: {
}[];
    /**
     * This flag depicts if the lab result has a scanned document attachment or not.
     */
  attachmentexists: boolean;
    /**
     * The created date associated with this lab result. Returned in mm/dd/yyyy format.
     */
  createddate: string;
    /**
     * The created date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  createddatetime: string;
    /**
     * Description for this lab result
     */
  description: string;
    /**
     * The exactduplicatedocumentid of the document.
     */
  exactduplicatedocumentid: number;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country. These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The 'Internal Note' attached to this document.
     */
  internalnote: string;};
    /**
     * Whether the lab result has been reivewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * Observation date associated with this lab result
     */
  labresultdate: string;
    /**
     * The observation date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  labresultdatetime: string;
    /**
     * Athena ID for this lab result
     */
  labresultid: number;
    /**
     * The LOINC for the result document or associated order.
     */
  labresultloinc: string;
    /**
     * Additional note associated with this lab result, if any
     */
  labresultnote: string;
    /**
     * The athena ID of the associated order document
     */
  orderid: number;
    /**
     * The external note for the patient.
     */
  patientnote: string;
    /**
     * This is the address1 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress1: string;
    /**
     * This is the address2 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress2: string;
    /**
     * This is the city of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabcity: string;
    /**
     * This is the name of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabname: string;
    /**
     * This is the state of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabstate: string;
    /**
     * This is the zip code of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabzip: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * The provider ID for this document.
     */
  providerid: number;
    /**
     * The lab result codified data.
     */
  resultcodifieddata: {    /**
     * Individual lab result observations/analytes
     */
  analytes: {
}[];
    /**
     * This flag depicts if the lab result has a scanned document attachment or not.
     */
  attachmentexists: boolean;
    /**
     * The created date associated with this lab result. Returned in mm/dd/yyyy format.
     */
  createddate: string;
    /**
     * The created date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  createddatetime: string;
    /**
     * Description for this lab result
     */
  description: string;
    /**
     * The exactduplicatedocumentid of the document.
     */
  exactduplicatedocumentid: number;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country. These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The 'Internal Note' attached to this document.
     */
  internalnote: string;
    /**
     * The interpretation template added to the lab result.
     */
  interpretationtemplate: {    /**
     * Individual lab result observations/analytes
     */
  analytes: {
}[];
    /**
     * This flag depicts if the lab result has a scanned document attachment or not.
     */
  attachmentexists: boolean;
    /**
     * The created date associated with this lab result. Returned in mm/dd/yyyy format.
     */
  createddate: string;
    /**
     * The created date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  createddatetime: string;
    /**
     * Description for this lab result
     */
  description: string;
    /**
     * The exactduplicatedocumentid of the document.
     */
  exactduplicatedocumentid: number;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country. These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The 'Internal Note' attached to this document.
     */
  internalnote: string;};
    /**
     * Whether the lab result has been reivewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * Observation date associated with this lab result
     */
  labresultdate: string;
    /**
     * The observation date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  labresultdatetime: string;
    /**
     * Athena ID for this lab result
     */
  labresultid: number;
    /**
     * The LOINC for the result document or associated order.
     */
  labresultloinc: string;
    /**
     * Additional note associated with this lab result, if any
     */
  labresultnote: string;
    /**
     * The athena ID of the associated order document
     */
  orderid: number;
    /**
     * The external note for the patient.
     */
  patientnote: string;
    /**
     * This is the address1 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress1: string;
    /**
     * This is the address2 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress2: string;
    /**
     * This is the city of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabcity: string;
    /**
     * This is the name of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabname: string;
    /**
     * This is the state of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabstate: string;
    /**
     * This is the zip code of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabzip: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * The provider ID for this document.
     */
  providerid: number;};
    /**
     * The ResultsReported date and time associated with this lab result. Returned in mm/dd/yyyy hh24:mi:ss format.
     */
  resultsreporteddatetime: string;
    /**
     * The status of the result (e.g., "final", "preliminary", "corrected", etc.)
     */
  resultstatus: string;
    /**
     * The supersededid of the Document.
     */
  supersededdocumentid: string;
}
export type PatientLabResultDocumentResponse = {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};
    /**
     * An array of image pages associated with this document.
     */
  pages: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};}[];
    /**
     * External note for the patient.
     */
  patientnote: string;
    /**
     * This is the address1 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress1: string;
    /**
     * This is the address2 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress2: string;
    /**
     * This is the city of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabcity: string;
    /**
     * This is the name of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabname: string;
    /**
     * This is the state of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabstate: string;
    /**
     * This is the zip code of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabzip: string;
    /**
     * The date the document was published to the portal in format (yyyy-mm-ddThh:mm:ss).
     */
  portalpublisheddatetime: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * Provider ID for this document
     */
  providerid: number;
    /**
     * The username of the provider associated with this lab result document.
     */
  providerusername: string;
    /**
     * The code as received from the facility via HL7 in OBR.4.
     */
  receivedfacilityordercode: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};
    /**
     * An array of image pages associated with this document.
     */
  pages: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};}[];
    /**
     * External note for the patient.
     */
  patientnote: string;
    /**
     * This is the address1 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress1: string;
    /**
     * This is the address2 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress2: string;
    /**
     * This is the city of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabcity: string;
    /**
     * This is the name of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabname: string;
    /**
     * This is the state of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabstate: string;
    /**
     * This is the zip code of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabzip: string;
    /**
     * The date the document was published to the portal in format (yyyy-mm-ddThh:mm:ss).
     */
  portalpublisheddatetime: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * Provider ID for this document
     */
  providerid: number;
    /**
     * The username of the provider associated with this lab result document.
     */
  providerusername: string;};
    /**
     * The status of the report.
     */
  reportstatus: string;
    /**
     * The category of the result.
     */
  resultcategory: string;
  resultcodifieddata: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};
    /**
     * An array of image pages associated with this document.
     */
  pages: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};}[];
    /**
     * External note for the patient.
     */
  patientnote: string;
    /**
     * This is the address1 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress1: string;
    /**
     * This is the address2 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress2: string;
    /**
     * This is the city of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabcity: string;
    /**
     * This is the name of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabname: string;
    /**
     * This is the state of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabstate: string;
    /**
     * This is the zip code of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabzip: string;
    /**
     * The date the document was published to the portal in format (yyyy-mm-ddThh:mm:ss).
     */
  portalpublisheddatetime: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * Provider ID for this document
     */
  providerid: number;
    /**
     * The username of the provider associated with this lab result document.
     */
  providerusername: string;
    /**
     * The code as received from the facility via HL7 in OBR.4.
     */
  receivedfacilityordercode: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};
    /**
     * An array of image pages associated with this document.
     */
  pages: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * URL and content-type to download the original document. "originaldocument" is returned when document source is FAX or UPLOAD and originally faxed or uploaded file is not split into multiple documents. Please use "pages" to download document pages when "originaldocument" is not available.
     */
  originaldocument: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Individual observation details
     */
  observations: {
    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;
    /**
     * The interpretation template added to the imaging result.
     */
  interpretationtemplate: {    /**
     * The most recent action note for a document
     */
  actionnote: string;
    /**
     * The number days until a document will go into followup after being sent to the portal.
     */
  alarmdays: string;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * The user who created this document.
     */
  createduser: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * Description of the document type
     */
  description: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The ID of the description for this document
     */
  documenttypeid: number;
    /**
     * Date of the encounter associated with this document
     */
  encounterdate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Type of entity creating the document. Possible values are PROVIDER, PATIENT and OTHERS.
     */
  entitytype: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * External note for the patient.
     */
  externalnoteonly: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * The practice entered interpretation of this result.
     */
  interpretation: string;};
    /**
     * If true, this result document should not be shown to the patient.
     */
  isconfidential: boolean;
    /**
     * Whether the lab result has been reviewed by a provider
     */
  isreviewedbyprovider: boolean;
    /**
     * The primary key for labresult class of documents
     */
  labresultid: number;
    /**
     * Laboratory code that identifies the overall result.
     */
  labresultloinc: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddate: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * A note from lab.
     */
  notefromlab: string;
    /**
     * Date/time the observation was taken
     */
  observationdate: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;}[];
    /**
     * Order type group name
     */
  ordertype: string;};}[];
    /**
     * External note for the patient.
     */
  patientnote: string;
    /**
     * This is the address1 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress1: string;
    /**
     * This is the address2 field of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabaddress2: string;
    /**
     * This is the city of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabcity: string;
    /**
     * This is the name of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabname: string;
    /**
     * This is the state of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabstate: string;
    /**
     * This is the zip code of the performing lab. For point-of-care tests this is the department. Otherwise, it is the clinical provider
     */
  performinglabzip: string;
    /**
     * The date the document was published to the portal in format (yyyy-mm-ddThh:mm:ss).
     */
  portalpublisheddatetime: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * Provider ID for this document
     */
  providerid: number;
    /**
     * The username of the provider associated with this lab result document.
     */
  providerusername: string;};
    /**
     * The status of the report.
     */
  reportstatus: string;
    /**
     * The category of the result.
     */
  resultcategory: string;};
    /**
     * Result note on a document.
     */
  resultnotes: string;
    /**
     * The status of the result.
     */
  resultstatus: string;
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Link to retrieve the tied to surgery/procedure document.
     */
  tiedtoprocedureorsurgery: string;
    /**
     * Order ID of the order this document is tied to, if any
     */
  tietoorderid: number;
}
export type PatientMedicalHistoryResponse = {
    /**
     * List of questions corresponding to patient medical history
     */
  questions: {
}[];
    /**
     * Additional notes for the entire medical history section, if any
     */
  sectionnote: string;
    /**
     * Username that last modified Medical History note.
     */
  notelastmodifiedby: string;
    /**
     * Date and time Medical History note was last modified.
     */
  notelastmodifieddatetime: string;
}
export type UpdatePatientMedicalHistoryResponse = {
    /**
     * Whether the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type PatientPrescriptionsResponse = {
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * The athenaNet patient ID.
     */
  patientid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * Provider ID for this document
     */
  providerid: number;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * A number corresponding to the level of restriction the drug is placed under by the DEA.
     */
  deaschedule: number;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * NPI (National Provider Identity) of the provider for this prescription.
     */
  providernpi: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * External note for the patient.
     */
  externalnote: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * Ordering Mode for a prescription.  One of Prescribe, Adminster, Dispense
     */
  orderingmode: string;
    /**
     * Order ID of the order this document is tied to, if any
     */
  tietoorderid: number;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * The patient case id
     */
  patientcaseid: string;
    /**
     * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
     */
  declinedreason: {
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Document priority, when available. 1 is high, 2 is normal. Some labs use other numbers or characters that are lab-specific.
     */
  priority: string;
    /**
     * Order type group name
     */
  ordertype: string;
    /**
     * The athenaNet patient ID.
     */
  patientid: number;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * The ID of the clinical provider associated with this clinical document. Clinical providers are a master list of providers throughout the country.  These include providers as well as radiology centers, labs and pharmacies.
     */
  facilityid: number;
    /**
     * Provider ID for this document
     */
  providerid: number;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * A number corresponding to the level of restriction the drug is placed under by the DEA.
     */
  deaschedule: number;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * NPI (National Provider Identity) of the provider for this prescription.
     */
  providernpi: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * External note for the patient.
     */
  externalnote: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * Ordering Mode for a prescription.  One of Prescribe, Adminster, Dispense
     */
  orderingmode: string;
    /**
     * Order ID of the order this document is tied to, if any
     */
  tietoorderid: number;
    /**
     * The appointment ID for this document
     */
  appointmentid: number;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * The patient case id
     */
  patientcaseid: string;}[];
    /**
     * Explains where this document originated.
     */
  documentsource: string;
    /**
     * A specific document type identifier.
     */
  documenttypeid: number;
    /**
     * ID of a prescription document
     */
  prescriptionid: number;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
  observationdate: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * The user-facing description of the reason the order was not given.
     */
  declinedreasontext: string;
    /**
     * Description of the document type
     */
  documentdescription: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
}
export type PatientAnalytesResponse = {
    /**
     * Status indicator of the measurement relative to normal (low, high, normal, abnormal)
     */
  abnormalflag: string;
    /**
     * The HL7 code related to the abnormal flag.
     */
  abnormalhl7code: string;
    /**
     * The HL7 description related to the abnormal flag.
     */
  abnormalhl7name: string;
    /**
     * The labresult observation codified data.
     */
  analytecodifieddata: {
    /**
     * Status indicator of the measurement relative to normal (low, high, normal, abnormal)
     */
  abnormalflag: string;
    /**
     * The HL7 code related to the abnormal flag.
     */
  abnormalhl7code: string;
    /**
     * The HL7 description related to the abnormal flag.
     */
  abnormalhl7name: string;}[];
    /**
     * Athena creator for the given lab result to this analyte
     */
  analytecreateduser: string;
    /**
     * Date when this observation was recorded
     */
  analytedate: string;
    /**
     * Name / description specific to this analyte
     */
  analytename: string;
    /**
     * General description of the lab result test
     */
  description: string;
    /**
     * The status of the underlying lab result
     */
  labresultstatus: string;
    /**
     * Logical Observation Identifiers Names and Codes ID, if available
     */
  loinc: string;
    /**
     * Additional note for this analyte, if applicable
     */
  note: string;
    /**
     * Local lab ID for the given lab result observation/analyte
     */
  observationidentifier: string;
    /**
     * Reference range of values accepted as normal for this observation
     */
  referencerange: string;
    /**
     * The status of the result (e.g., "final", "preliminary", "corrected", etc.)
     */
  resultstatus: string;
    /**
     * Units for this analyte entry, if provided by the lab
     */
  units: string;
    /**
     * Value recorded for this observation
     */
  value: string;
    /**
     * DEPRECATED -- use "abnormalflag" instead. Status indicator of the measurement relative to normal (low, high, normal, abnormal)
     */
  valuestatus: string;
}
export type PatientAppointmentsResponse = {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;
    /**
     * As detailed in /claims, if requested.
     */
  claims: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;}[];
    /**
     * Expected copay for this appointment. Based on the appointment type, the patient's primary insurance, and any copays collected.  To see the amounts used in this calculated value, see the APPOINTMENTCOPAY fields.
     */
  copay: string;
    /**
     * The appointment date.
     */
  date: string;
  departmentid: string;
    /**
     * In minutes
     */
  duration: number;
    /**
     * If true, this appointment slot is frozen
     */
  frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
  hl7providerid: number;
    /**
     * List of active patient insurance packages. Only shown for single or multiple booked appointments if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;
    /**
     * As detailed in /claims, if requested.
     */
  claims: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;}[];
    /**
     * Expected copay for this appointment. Based on the appointment type, the patient's primary insurance, and any copays collected.  To see the amounts used in this calculated value, see the APPOINTMENTCOPAY fields.
     */
  copay: string;
    /**
     * The appointment date.
     */
  date: string;
  departmentid: string;
    /**
     * In minutes
     */
  duration: number;
    /**
     * If true, this appointment slot is frozen
     */
  frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
  hl7providerid: number;}[];
    /**
     * If true, then this is a native athenatelehealth appointment.
     */
  nativeathenatelehealth: boolean;
    /**
     * As detailed in /patients, if requested.
     */
  patient: string;
    /**
     * The patient-friendly name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  patientappointmenttypename: string;
    /**
     * The athenaNet patient ID for this appointment
     */
  patientid: string;
  providerid: string;
    /**
     * The referring provider ID.
     */
  referringproviderid: string;
    /**
     * The rendering provider ID.
     */
  renderingproviderid: string;
    /**
     * When an appointment is rescheduled, this is the ID of the replacement appointment.
     */
  rescheduledappointmentid: string;
    /**
     * The timestamp when the appointment started the check in process. If this is set while an appointment is still in status 'f', it means that the check-in process has begun but is not yet completed.
     */
  startcheckin: string;
  starttime: string;
    /**
     * The timestamp when the check-in process was finished for this appointment.
     */
  stopcheckin: string;
    /**
     * The timestamp when the sign-off process was finished for this appointment. The STOPSIGNOFF property will only be visible if the following rollout toggle is ENABLED : CLUCT_315_MDP_UCTB
     */
  stopsignoff: string;
    /**
     * The supervising provider ID.
     */
  supervisingproviderid: string;
    /**
     * Urgent flag for the appointment.
     */
  urgentyn: boolean;
    /**
     * An array of expected procedure codes attached to this appointment.
     */
  useexpectedprocedurecodes: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;
    /**
     * As detailed in /claims, if requested.
     */
  claims: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;}[];
    /**
     * Expected copay for this appointment. Based on the appointment type, the patient's primary insurance, and any copays collected.  To see the amounts used in this calculated value, see the APPOINTMENTCOPAY fields.
     */
  copay: string;
    /**
     * The appointment date.
     */
  date: string;
  departmentid: string;
    /**
     * In minutes
     */
  duration: number;
    /**
     * If true, this appointment slot is frozen
     */
  frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
  hl7providerid: number;
    /**
     * List of active patient insurance packages. Only shown for single or multiple booked appointments if SHOWINSURANCE is set.
     */
  insurances: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;
    /**
     * As detailed in /claims, if requested.
     */
  claims: {
    /**
     * The appointment cancel reason id if the appointment is cancelled
     */
  appointmentcancelreasonid: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
  appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
  appointmentid: string;
    /**
     * The athenaNet appointment status. There are several possible statuses.  x=cancelled. f=filled. (It can include appointments where were never checked in, even if the appointment date is in the past. It is up to a practice to cancel appointments as a no show when appropriate to do so.)  o=open. 2=checked in. 3=checked out. 4=charge entered (i.e. a past appointment).
     */
  appointmentstatus: string;
    /**
     * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttype: string;
    /**
     * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  appointmenttypeid: string;
    /**
     * The appointment cancel date if the appointment is cancelled
     */
  cancelleddate: string;}[];
    /**
     * Expected copay for this appointment. Based on the appointment type, the patient's primary insurance, and any copays collected.  To see the amounts used in this calculated value, see the APPOINTMENTCOPAY fields.
     */
  copay: string;
    /**
     * The appointment date.
     */
  date: string;
  departmentid: string;
    /**
     * In minutes
     */
  duration: number;
    /**
     * If true, this appointment slot is frozen
     */
  frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
  hl7providerid: number;}[];
    /**
     * If true, then this is a native athenatelehealth appointment.
     */
  nativeathenatelehealth: boolean;
    /**
     * As detailed in /patients, if requested.
     */
  patient: string;
    /**
     * The patient-friendly name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
     */
  patientappointmenttypename: string;
    /**
     * The athenaNet patient ID for this appointment
     */
  patientid: string;
  providerid: string;
    /**
     * The referring provider ID.
     */
  referringproviderid: string;
    /**
     * The rendering provider ID.
     */
  renderingproviderid: string;
    /**
     * When an appointment is rescheduled, this is the ID of the replacement appointment.
     */
  rescheduledappointmentid: string;
    /**
     * The timestamp when the appointment started the check in process. If this is set while an appointment is still in status 'f', it means that the check-in process has begun but is not yet completed.
     */
  startcheckin: string;
  starttime: string;
    /**
     * The timestamp when the check-in process was finished for this appointment.
     */
  stopcheckin: string;
    /**
     * The timestamp when the sign-off process was finished for this appointment. The STOPSIGNOFF property will only be visible if the following rollout toggle is ENABLED : CLUCT_315_MDP_UCTB
     */
  stopsignoff: string;
    /**
     * The supervising provider ID.
     */
  supervisingproviderid: string;
    /**
     * Urgent flag for the appointment.
     */
  urgentyn: boolean;}[];
    /**
     * Visit Id of the appointment. The VISITID property will only be visible if the following rollout toggle is ON : COLDEN_APPOINTMENT_WITH_VISITID_MDP_API
     */
  visitid: string;
}
export type PatientDocumentsResponse = {
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * ID for the document. Note that in documents/{documentclass} calls, this will become an ID named after the document class (e.g. rtoid or letterid).
     */
  documentid: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * The description for this document
     */
  documenttype: string;
    /**
     * External note for the patient
     */
  externalnote: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * External note sent to the receiving facility
     */
  receivernote: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * The file extension of this document.
     */
  fileextension: string;
    /**
     * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
     */
  declinedreason: {
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * ID for the document. Note that in documents/{documentclass} calls, this will become an ID named after the document class (e.g. rtoid or letterid).
     */
  documentid: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * The description for this document
     */
  documenttype: string;
    /**
     * External note for the patient
     */
  externalnote: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * External note sent to the receiving facility
     */
  receivernote: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * The file extension of this document.
     */
  fileextension: string;}[];
    /**
     * Explains where this document originated (e.g. ENCOUNTER, PORTAL, etc.)
     */
  documentsource: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * The original file name of this document.
     */
  originalfilename: string;
    /**
     * The user-facing description of the reason the order was not given.
     */
  declinedreasontext: string;
    /**
     * Description of the document type
     */
  documentdescription: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;
    /**
     * List of codes indicating why the order was contraindicated (for vaccines only). If this field is not present, the order does not contain a contraindication reason.
     */
  contraindicationreason: {
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * ID for the document. Note that in documents/{documentclass} calls, this will become an ID named after the document class (e.g. rtoid or letterid).
     */
  documentid: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * The description for this document
     */
  documenttype: string;
    /**
     * External note for the patient
     */
  externalnote: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * External note sent to the receiving facility
     */
  receivernote: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * The file extension of this document.
     */
  fileextension: string;
    /**
     * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
     */
  declinedreason: {
    /**
     * Status of the document
     */
  status: string;
    /**
     * Subject of the document
     */
  subject: string;
    /**
     * Person the document is assigned to
     */
  assignedto: string;
    /**
     * ID for the document. Note that in documents/{documentclass} calls, this will become an ID named after the document class (e.g. rtoid or letterid).
     */
  documentid: string;
    /**
     * Date the document was created. Please use createddatetime instead.
     */
  createddate: string;
    /**
     * Encounter ID
     */
  encounterid: string;
    /**
     * Department for the document
     */
  departmentid: string;
    /**
     * The description for this document
     */
  documenttype: string;
    /**
     * External note for the patient
     */
  externalnote: string;
    /**
     * The 'Internal Note' attached to this document
     */
  internalnote: string;
    /**
     * External note sent to the receiving facility
     */
  receivernote: string;
    /**
     * Class of document
     */
  documentclass: string;
    /**
     * Explains method by which the document was entered into the AthenaNet (INTERFACE (digital), FAX, etc.)
     */
  documentroute: string;
    /**
     * The file extension of this document.
     */
  fileextension: string;}[];
    /**
     * Explains where this document originated (e.g. ENCOUNTER, PORTAL, etc.)
     */
  documentsource: string;
    /**
     * Date/Time (ISO 8601) the document was created
     */
  createddatetime: string;
    /**
     * Date/time (ISO 8601) the document was deleted
     */
  deleteddatetime: string;
    /**
     * Specific type of document
     */
  documentsubclass: string;
    /**
     * The user who last modified this document.
     */
  lastmodifieduser: string;
    /**
     * The original file name of this document.
     */
  originalfilename: string;
    /**
     * The user-facing description of the reason the order was not given.
     */
  declinedreasontext: string;
    /**
     * Description of the document type
     */
  documentdescription: string;
    /**
     * The external accession ID for this document. Format depends on the system the ID belongs to.
     */
  externalaccessionid: string;
    /**
     * The internal accession ID for this document. Format depends on the system the ID belongs to.
     */
  internalaccessionid: string;
    /**
     * Date/time (ISO 8601) the observation was taken
     */
  observationdatetime: string;
    /**
     * Date/time (ISO 8601) the document was last modified
     */
  lastmodifieddatetime: string;}[];
}
export type CreatePatientDocumentResponse = {
    /**
     * The document ID of the created document.
     */
  documentid: string;
}
export type CreatePatientEncounterDocumentResponse = {
    /**
     * Returns true/false if the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain an error message.
     */
  errormessage: string;
    /**
     * The document ID of the new or modified document.
     */
  encounterdocumentid: number;
}
export type PatientDefaultPharmacyResponse = {
    /**
     * Zip code of the pharmacy
     */
  zip: string;
    /**
     * City of the pharmacy
     */
  city: string;
    /**
     * State of the pharmacy
     */
  state: string;
    /**
     * Address line 1 of the pharmacy
     */
  address1: string;
    /**
     * Address line 2 of the pharmacy
     */
  address2: string;
    /**
     * Flag representing if the pharmacy accepts fax
     */
  acceptfax: boolean;
    /**
     * Fax number of the pharmacy
     */
  faxnumber: string;
    /**
     * Phone number of the pharmacy
     */
  phonenumber: string;
    /**
     * Type of pharmacy (retail, mailorder)
     */
  pharmacytype: string;
    /**
     * Receiver type
     */
  receivertype: string;
    /**
     * If flagged true, this is the default pharmacy for the patient
     */
  defaultpharmacy: boolean;
    /**
     * The athenaNet clinical provider ID.
     */
  clinicalproviderid: number;
    /**
     * The pharmacy name
     */
  clinicalprovidername: string;
}
export type SetPatientDefaultPharmacyResponse = {
    /**
     * Whether the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type PatientPreferredPharmaciesResponse = {
    /**
     * Zip code of the pharmacy
     */
  zip: string;
    /**
     * City of the pharmacy
     */
  city: string;
    /**
     * State of the pharmacy
     */
  state: string;
    /**
     * Address line 1 of the pharmacy
     */
  address1: string;
    /**
     * Address line 2 of the pharmacy
     */
  address2: string;
    /**
     * Flag representing if the pharmacy accepts fax
     */
  acceptfax: boolean;
    /**
     * Fax number of the pharmacy
     */
  faxnumber: string;
    /**
     * Phone number of the pharmacy
     */
  phonenumber: string;
    /**
     * Type of pharmacy (retail, mailorder)
     */
  pharmacytype: string;
    /**
     * Receiver type
     */
  receivertype: string;
    /**
     * If flagged true, this is the default pharmacy for the patient
     */
  defaultpharmacy: boolean;
    /**
     * The athenaNet clinical provider ID.
     */
  clinicalproviderid: number;
    /**
     * The pharmacy name
     */
  clinicalprovidername: string;
}
export type AddPatientPreferredPharmacyResponse = {
    /**
     * Whether the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type PatientDefaultLaboratoryResponse = {
    /**
     * Zip code of the lab
     */
  zip: string;
    /**
     * City of the lab
     */
  city: string;
    /**
     * State of the lab
     */
  state: string;
    /**
     * Address line 1 of the lab
     */
  address1: string;
    /**
     * Address line 2 of the lab
     */
  address2: string;
    /**
     * Flag representing if the lab accepts fax
     */
  acceptfax: boolean;
    /**
     * Fax number of the lab
     */
  faxnumber: string;
    /**
     * Phone number of the lab
     */
  phonenumber: string;
    /**
     * The athenaNet clinical provider ID.
     */
  clinicalproviderid: number;
    /**
     * The lab name
     */
  clinicalprovidername: string;
}
export type SetPatientDefaultLaboratoryResponse = {
    /**
     * Whether the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type PatientSocialHistoryTemplatesResponse = {
    /**
     * ID for this social history template
     */
  templateid: number;
    /**
     * Name for this social history template
     */
  templatename: string;
}
export type SetPatientSocialHistoryTemplatesResponse = {
    /**
     * On failure, the reason for failure
     */
  message: string;
    /**
     * Whether the operation was successful.
     */
  success: boolean;
}
export type UpdatePatientSocialHistoryResponse = {
    /**
     * On failure, the reason for failure
     */
  message: string;
    /**
     * Whether the operation was successful.
     */
  success: boolean;
}
export type PatientSocialHistoryResponse = {
    /**
     * The social history questions and answers for this patient.
     */
  questions: {
}[];
    /**
     * The selected social history templates for this patient.
     */
  templates: {
    /**
     * The social history questions and answers for this patient.
     */
  questions: {
}[];}[];
    /**
     * A section-wide note.
     */
  sectionnote: string;
    /**
     * The username of the user who last modified the section note.
     */
  sectionnotelastupdatedby: string;
    /**
     * The date and time the section note was last modified.
     */
  sectionnotelastupdateddate: string;
}
export type PatientMedicationsResponse = {
    /**
     * The reason the last medication history download was denied.
     */
  lastdownloaddenialreason: string;
    /**
     * Whether or not the last medication history download was denied.
     */
  lastdownloaddenied: boolean;
    /**
     * The time of the last attempted medication history download from SureScripts.
     */
  lastdownloadeddate: string;
    /**
     * The last time any of the medications were updated
     */
  lastupdated: string;
    /**
     * The list of medications
     */
  medications: {
    /**
     * The reason the last medication history download was denied.
     */
  lastdownloaddenialreason: string;
    /**
     * Whether or not the last medication history download was denied.
     */
  lastdownloaddenied: boolean;
    /**
     * The time of the last attempted medication history download from SureScripts.
     */
  lastdownloadeddate: string;
    /**
     * The last time any of the medications were updated
     */
  lastupdated: string;}[];
    /**
     * Whether the patient explicitly has no reported medications
     */
  nomedicationsreported: boolean;
    /**
     * Whether or not the patient has consented to have their medication history downloaded. There are plans to deprecate this field.
     */
  patientdownloadconsent: boolean;
    /**
     * Whether or not the patient needs to consent to have medication history downloaded. This will be true if either the patient has not currently consented, or the practice is not enabled for these downloads.  This field is typically used when determining whether to message to the patient that they have not consented to these downloads. Note that regardless of this setting, medication history that has already been downloaded will remain available.
     */
  patientneedsdownloadconsent: boolean;
    /**
     * A section-wide note
     */
  sectionnote: string;
}
export type AddPatientMedicationResponse = {
    /**
     * Whether the operation was successful or not.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
    /**
     * If successful, the athena ID of the newly created historical medication
     */
  medicationentryid: string;
}
export type UpdatePatientMedicationsResponse = {
    /**
     * Whether the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type PatientAllergiesResponse = {
    /**
     * Whether the patient has no known drug allergies. This is an explicit statement separate from a patient with no documented allergies so far.
     */
  nkda: boolean;
  allergies: {
    /**
     * Whether the patient has no known drug allergies. This is an explicit statement separate from a patient with no documented allergies so far.
     */
  nkda: boolean;}[];
    /**
     * Deprecated, use LASTMODIFIEDDATETIME instead. The last date any of the allergies in the returned list were updated. Does not include nkda or note information, and is date precision.
     */
  lastupdated: string;
    /**
     * A section-wide note
     */
  sectionnote: string;
    /**
     * The username of the user who last modified the note, nkda, or allergies.
     */
  lastmodifiedby: string;
    /**
     * The username of the user who last modified the note.
     */
  notelastmodifiedby: string;
    /**
     * The date and time the note, nkda, or allergies were last updated.
     */
  lastmodifieddatetime: string;
    /**
     * The date and time the note was last updated.
     */
  notelastmodifieddatetime: string;
}
export type UpdatePatientAllergiesResponse = {
    /**
     * Whether the update operation was successful.
     */
  success: boolean;
    /**
     * If the update operation failed, this will contain any error messages.
     */
  errormessage: string;
}
export type VerifyPatientPrivacyInformationResponse = {
    /**
     * Returns true/false if the operation was successful.
     */
  success: boolean;
    /**
     * The athena ID of the patient whose privacy information was verified.
     */
  patientid: number;
}
export type CreatePatientInsuranceResponse = {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * Details about the copays for this insurance package. If you've just POSTed a new insurance you will have to wait for the auto eligbility check before these populate.
     */
  copays: {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;}[];
    /**
     * Details about the coverage type for this insurance package. This information is available according to the access level from the session user.
     */
  coveragetype: {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * Details about the copays for this insurance package. If you've just POSTed a new insurance you will have to wait for the auto eligbility check before these populate.
     */
  copays: {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;}[];}[];
    /**
     * BETA FIELD: The date in which the insurance was created.
     */
  created: string;
    /**
     * BETA FIELD: The username of the user who created this insurance in athenanet.
     */
  createdby: string;
    /**
     * BETA FIELD: The athenaNet insurance notes added while cancelling the insurance.
     */
  deletednote: string;
    /**
     * CASE POLICY FIELD - A description of the injury.  Only available for auto insurance and worker's comp case policies.
     */
  descriptionofinjury: string;
    /**
     * Date the eligibility was last checked.
     */
  eligibilitylastchecked: string;
    /**
     * The message, usually from our engine, of the eligibility check.
     */
  eligibilitymessage: string;
    /**
     * The source of the current status. Athena is our eligibility engine.
     */
  eligibilityreason: string;
    /**
     * Current eligibility status of this insurance package.
     */
  eligibilitystatus: string;
    /**
     * The employer ID associated with the patient's insurance.
     */
  employerid: string;
    /**
     * Date the insurance expires.
     */
  expirationdate: string;
    /**
     * CASE POLICY FIELD - See documentation for ICD9CODES.
     */
  icd10codes: string[];
    /**
     * CASE POLICY FIELD - A list of ICD9 accepted diagnosis codes. Only available for worker's comp case policies.
     */
  icd9codes: number[];
    /**
     * CASE POLICY FIELD - Text field for describing the injured body part.  Only available for auto insurance  and worker's comp case policies.
     */
  injuredbodypart: string;
    /**
     * CASE POLICY FIELD - The auto insurance claim number or the worker's comp claim number.
     */
  insuranceclaimnumber: string;
    /**
     * The athena insurance policy ID.
     */
  insuranceid: string;
    /**
     * The insurance policy ID number (as presented on the insurance card itself).
     */
  insuranceidnumber: string;
    /**
     * Address 1 for the AthenaNet insurance Package.
     */
  insurancepackageaddress1: string;
    /**
     * Address 2 for the AthenaNet insurance Package.
     */
  insurancepackageaddress2: string;
    /**
     * City for the AthenaNet insurance Package.
     */
  insurancepackagecity: string;
    /**
     * The athenaNet insurance package ID.
     */
  insurancepackageid: number;
    /**
     * Insurance Package Payer ID (EMC Code)
     */
  insurancepackagepayerid: string;
    /**
     * State of the AthenaNet insurance package
     */
  insurancepackagestate: string;
    /**
     * Zip code of the AthenaNet insurance package
     */
  insurancepackagezip: string;
    /**
     * BETA FIELD: Name of the payer specific insurance package.
     */
  insurancepayername: string;
    /**
     * The phone number for the insurance company. Note: This defaults to the insurance package phone number. If this is set, it will override it. Likewise if blanked out, it will go back to default.
     */
  insurancephone: string;
    /**
     * Superpackagename of the specific insurance package.
     */
  insuranceplandisplayname: string;
    /**
     * Name of the specific insurance package.
     */
  insuranceplanname: string;
    /**
     * The full name of the insurance policy holder.
     */
  insurancepolicyholder: string;
    /**
     * The first address line of the insurance policy holder.
     */
  insurancepolicyholderaddress1: string;
    /**
     * The second address line of the insurance policy holder.
     */
  insurancepolicyholderaddress2: string;
    /**
     * The city of the insurance policy holder.
     */
  insurancepolicyholdercity: string;
    /**
     * The country code (3 letter) of the insurance policy holder.
     */
  insurancepolicyholdercountrycode: string;
    /**
     * The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166</a> country code of the insurance policy holder.
     */
  insurancepolicyholdercountryiso3166: string;
    /**
     * The DOB of the insurance policy holder (mm/dd/yyyy).
     */
  insurancepolicyholderdob: string;
    /**
     * The first name of the insurance policy holder.  Except for self-pay, required for new policies.
     */
  insurancepolicyholderfirstname: string;
    /**
     * The last name of the insurance policy holder.  Except for self-pay, required for new policies.
     */
  insurancepolicyholderlastname: string;
    /**
     * The middle name of the insurance policy holder.
     */
  insurancepolicyholdermiddlename: string;
    /**
     * The sex of the insurance policy holder.  Except for self-pay, required for new policies.
     */
  insurancepolicyholdersex: string;
    /**
     * The SSN of the insurance policy holder. If set, it should be either 9 digits or masked 9 chars(* followed by digits).
     */
  insurancepolicyholderssn: string;
    /**
     * The state of the insurance policy holder.
     */
  insurancepolicyholderstate: string;
    /**
     * The suffix of the insurance policy holder.
     */
  insurancepolicyholdersuffix: string;
    /**
     * The zip of the insurance policy holder.
     */
  insurancepolicyholderzip: string;
    /**
     * The athenaNet insurance product type.
     */
  insuranceproducttype: string;
    /**
     * Type of insurance. E.g., Medicare Part B, Group Policy, HMO, etc.
     */
  insurancetype: string;
    /**
     * The ID of the entity type for this insurance.
     */
  insuredentitytypeid: number;
    /**
     * The insurance policy ID number of insured.
     */
  insuredidnumber: string;
  insuredpcp: string;
    /**
     * The national provider id of the primary care physcian assicated with the insurance.
     */
  insuredpcpnpi: number;
    /**
     * The referring provider that is associated with the insurance.
     */
  insuredreferringprovider: string;
    /**
     * Insurance category / company internal ID
     */
  ircid: number;
    /**
     * Insurance category / company. E.g., United Healthcare, BCBS-MA, etc.
     */
  ircname: string;
    /**
     * Date the insurance was issued.
     */
  issuedate: string;
    /**
     * Date on which patient record was last updated.
     */
  lastupdated: string;
    /**
     * User who last updated the patient record.
     */
  lastupdatedby: string;
    /**
     * The athenaNet insurance notes.
     */
  note: string;
    /**
     * BETA FIELD: Expiration date of insurance package.
     */
  packageexpirationdate: string;
    /**
     * The insurance group number.  This is sometimes present on an insurance card.
     */
  policynumber: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating whether this case policy is related to an auto accident.
     */
  relatedtoautoaccidentyn: boolean;
    /**
     * CASE POLICY FIELD - Boolean field indicating whether this case policy is related to the patient's employer.
     */
  relatedtoemploymentyn: boolean;
    /**
     * CASE POLICY FIELD - Boolean field indicating whether this case policy is related to another accident.  Only available for worker's comp case policies.
     */
  relatedtootheraccidentyn: boolean;
    /**
     * This patient's relationship to the policy holder (text).
     */
  relationshiptoinsured: string;
    /**
     * This patient's relationship to the policy holder (as an ID).  See <a href="/workflows/patient-relationship-mapping">the mapping</a>.
     */
  relationshiptoinsuredid: number;
    /**
     * CASE POLICY FIELD - Name for the repricer.  Only available for worker's comp case policies.
     */
  repricername: string;
    /**
     * CASE POLICY FIELD - Phone number for the repricer.  Only available for worker's comp case policies.
     */
  repricerphone: string;
    /**
     * 1 = primary, 2 = secondary, 3 = tertiary, etc.  Must have a primary before a secondary and a secondary before a tertiary, etc.
     */
  sequencenumber: number;
    /**
     * If the patient is on a sliding fee plan, this is the ID of that plan.  See /slidingfeeplans.
     */
  slidingfeeplanid: number;
    /**
     * CASE POLICY FIELD - Two-letter state abbreviation for the state this injury was reported in.  Only available for worker's comp case policies.
     */
  stateofreportedinjury: string;
}
export type UpdatePatientInsuranceResponse = {
    /**
     * If success is false, this contains an error message with more detail.
     */
  message: string;
    /**
     * True if operation was sucessful, false otherwise.
     */
  success: boolean;
}
export type DeletePatientInsuranceResponse = {
    /**
     * If success is false, this contains an error message with more detail.
     */
  message: string;
    /**
     * True if operation was sucessful, false otherwise.
     */
  success: boolean;
}
export type UpdatePatientInsuranceCardImageResponse = {
    /**
     * Indicates whether the submission was successful.
     */
  success: boolean;
}
export type RecordPaymentResponse = {
    /**
     * true for success.  false for an error.
     */
  success: boolean;
    /**
     * The ID of the payment batch where the payment was posted.
     */
  paymentbatchid: number;
}
export type PatientInsurancesResponse = {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * Details about the copays for this insurance package. If you've just POSTed a new insurance you will have to wait for the auto eligbility check before these populate.
     */
  copays: {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;}[];
    /**
     * Details about the coverage type for this insurance package. This information is available according to the access level from the session user.
     */
  coveragetype: {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;
    /**
     * Details about the copays for this insurance package. If you've just POSTed a new insurance you will have to wait for the auto eligbility check before these populate.
     */
  copays: {
    /**
     * CASE POLICY FIELD - Fax for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfax: string;
    /**
     * CASE POLICY FIELD - First name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterfirstname: string;
    /**
     * CASE POLICY FIELD - Last name of the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterlastname: string;
    /**
     * CASE POLICY FIELD - Phone number/other contact info for the adjuster on this case policy.  Only available for auto insurance or worker's comp case policies.
     */
  adjusterphone: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating if another party was responsible for this accident.
     */
  anotherpartyresponsibleyn: boolean;
    /**
     * CASE POLICY FIELD - Two-letter abbreviation for the state in which the auto accident took place. Only meaningful for auto insurance case policies.
     */
  autoaccidentstate: string;
    /**
     * The date in which the insurance was marked cancelled.
     */
  cancelled: string;
    /**
     * BETA FIELD: The username of the user who cancelled this insurance in athenanet.
     */
  cancelledby: string;
    /**
     * CASE POLICY FIELD - Date of the injury.  Required for auto insurance, legal, and worker's comp case policies.
     */
  caseinjurydate: string;
    /**
     * CASE POLICY FIELD - The name of this type of case policy.
     */
  casepolicytypename: string;
    /**
     * Status ID of current CCM enrollment.
     */
  ccmstatusid: number;
    /**
     * The name of current CCM enrollment status.
     */
  ccmstatusname: string;
    /**
     * Gives the confidentiality code for the patient. Only returned when CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
     */
  confidentialitycode: string;}[];}[];
    /**
     * BETA FIELD: The date in which the insurance was created.
     */
  created: string;
    /**
     * BETA FIELD: The username of the user who created this insurance in athenanet.
     */
  createdby: string;
    /**
     * BETA FIELD: The athenaNet insurance notes added while cancelling the insurance.
     */
  deletednote: string;
    /**
     * CASE POLICY FIELD - A description of the injury.  Only available for auto insurance and worker's comp case policies.
     */
  descriptionofinjury: string;
    /**
     * Date the eligibility was last checked.
     */
  eligibilitylastchecked: string;
    /**
     * The message, usually from our engine, of the eligibility check.
     */
  eligibilitymessage: string;
    /**
     * The source of the current status. Athena is our eligibility engine.
     */
  eligibilityreason: string;
    /**
     * Current eligibility status of this insurance package.
     */
  eligibilitystatus: string;
    /**
     * The employer ID associated with the patient's insurance.
     */
  employerid: string;
    /**
     * Date the insurance expires.
     */
  expirationdate: string;
    /**
     * CASE POLICY FIELD - See documentation for ICD9CODES.
     */
  icd10codes: string[];
    /**
     * CASE POLICY FIELD - A list of ICD9 accepted diagnosis codes. Only available for worker's comp case policies.
     */
  icd9codes: number[];
    /**
     * CASE POLICY FIELD - Text field for describing the injured body part.  Only available for auto insurance  and worker's comp case policies.
     */
  injuredbodypart: string;
    /**
     * CASE POLICY FIELD - The auto insurance claim number or the worker's comp claim number.
     */
  insuranceclaimnumber: string;
    /**
     * The athena insurance policy ID.
     */
  insuranceid: string;
    /**
     * The insurance policy ID number (as presented on the insurance card itself).
     */
  insuranceidnumber: string;
    /**
     * Address 1 for the AthenaNet insurance Package.
     */
  insurancepackageaddress1: string;
    /**
     * Address 2 for the AthenaNet insurance Package.
     */
  insurancepackageaddress2: string;
    /**
     * City for the AthenaNet insurance Package.
     */
  insurancepackagecity: string;
    /**
     * The athenaNet insurance package ID.
     */
  insurancepackageid: number;
    /**
     * Insurance Package Payer ID (EMC Code)
     */
  insurancepackagepayerid: string;
    /**
     * State of the AthenaNet insurance package
     */
  insurancepackagestate: string;
    /**
     * Zip code of the AthenaNet insurance package
     */
  insurancepackagezip: string;
    /**
     * BETA FIELD: Name of the payer specific insurance package.
     */
  insurancepayername: string;
    /**
     * The phone number for the insurance company. Note: This defaults to the insurance package phone number. If this is set, it will override it. Likewise if blanked out, it will go back to default.
     */
  insurancephone: string;
    /**
     * Superpackagename of the specific insurance package.
     */
  insuranceplandisplayname: string;
    /**
     * Name of the specific insurance package.
     */
  insuranceplanname: string;
    /**
     * The full name of the insurance policy holder.
     */
  insurancepolicyholder: string;
    /**
     * The first address line of the insurance policy holder.
     */
  insurancepolicyholderaddress1: string;
    /**
     * The second address line of the insurance policy holder.
     */
  insurancepolicyholderaddress2: string;
    /**
     * The city of the insurance policy holder.
     */
  insurancepolicyholdercity: string;
    /**
     * The country code (3 letter) of the insurance policy holder.
     */
  insurancepolicyholdercountrycode: string;
    /**
     * The <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166</a> country code of the insurance policy holder.
     */
  insurancepolicyholdercountryiso3166: string;
    /**
     * The DOB of the insurance policy holder (mm/dd/yyyy).
     */
  insurancepolicyholderdob: string;
    /**
     * The first name of the insurance policy holder.  Except for self-pay, required for new policies.
     */
  insurancepolicyholderfirstname: string;
    /**
     * The last name of the insurance policy holder.  Except for self-pay, required for new policies.
     */
  insurancepolicyholderlastname: string;
    /**
     * The middle name of the insurance policy holder.
     */
  insurancepolicyholdermiddlename: string;
    /**
     * The sex of the insurance policy holder.  Except for self-pay, required for new policies.
     */
  insurancepolicyholdersex: string;
    /**
     * The SSN of the insurance policy holder. If set, it should be either 9 digits or masked 9 chars(* followed by digits).
     */
  insurancepolicyholderssn: string;
    /**
     * The state of the insurance policy holder.
     */
  insurancepolicyholderstate: string;
    /**
     * The suffix of the insurance policy holder.
     */
  insurancepolicyholdersuffix: string;
    /**
     * The zip of the insurance policy holder.
     */
  insurancepolicyholderzip: string;
    /**
     * The athenaNet insurance product type.
     */
  insuranceproducttype: string;
    /**
     * Type of insurance. E.g., Medicare Part B, Group Policy, HMO, etc.
     */
  insurancetype: string;
    /**
     * The ID of the entity type for this insurance.
     */
  insuredentitytypeid: number;
    /**
     * The insurance policy ID number of insured.
     */
  insuredidnumber: string;
  insuredpcp: string;
    /**
     * The national provider id of the primary care physcian assicated with the insurance.
     */
  insuredpcpnpi: number;
    /**
     * The referring provider that is associated with the insurance.
     */
  insuredreferringprovider: string;
    /**
     * Insurance category / company internal ID
     */
  ircid: number;
    /**
     * Insurance category / company. E.g., United Healthcare, BCBS-MA, etc.
     */
  ircname: string;
    /**
     * Date the insurance was issued.
     */
  issuedate: string;
    /**
     * Date on which patient record was last updated.
     */
  lastupdated: string;
    /**
     * User who last updated the patient record.
     */
  lastupdatedby: string;
    /**
     * The athenaNet insurance notes.
     */
  note: string;
    /**
     * BETA FIELD: Expiration date of insurance package.
     */
  packageexpirationdate: string;
    /**
     * The insurance group number.  This is sometimes present on an insurance card.
     */
  policynumber: string;
    /**
     * CASE POLICY FIELD - Boolean field indicating whether this case policy is related to an auto accident.
     */
  relatedtoautoaccidentyn: boolean;
    /**
     * CASE POLICY FIELD - Boolean field indicating whether this case policy is related to the patient's employer.
     */
  relatedtoemploymentyn: boolean;
    /**
     * CASE POLICY FIELD - Boolean field indicating whether this case policy is related to another accident.  Only available for worker's comp case policies.
     */
  relatedtootheraccidentyn: boolean;
    /**
     * This patient's relationship to the policy holder (text).
     */
  relationshiptoinsured: string;
    /**
     * This patient's relationship to the policy holder (as an ID).  See <a href="/workflows/patient-relationship-mapping">the mapping</a>.
     */
  relationshiptoinsuredid: number;
    /**
     * CASE POLICY FIELD - Name for the repricer.  Only available for worker's comp case policies.
     */
  repricername: string;
    /**
     * CASE POLICY FIELD - Phone number for the repricer.  Only available for worker's comp case policies.
     */
  repricerphone: string;
    /**
     * 1 = primary, 2 = secondary, 3 = tertiary, etc.  Must have a primary before a secondary and a secondary before a tertiary, etc.
     */
  sequencenumber: number;
    /**
     * If the patient is on a sliding fee plan, this is the ID of that plan.  See /slidingfeeplans.
     */
  slidingfeeplanid: number;
    /**
     * CASE POLICY FIELD - Two-letter state abbreviation for the state this injury was reported in.  Only available for worker's comp case policies.
     */
  stateofreportedinjury: string;
}
export type UpdatePatientPhotoResponse = {
    /**
     * Indicates whether the submission was successful.
     */
  success: boolean;
}
export type CreatePatientCaseResponse = {
    /**
     * Returns true/false if the operation was successful.
     */
  success: boolean;
    /**
     * If the operation failed, this will contain an error message.
     */
  errormessage: string;
    /**
     * The document ID of the new or modified document.
     */
  patientcaseid: number;
}
