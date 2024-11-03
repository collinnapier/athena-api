export interface AllDepartmentsResponse {
  /**
   * This is the department's fax number.  Sometimes this is not configured even though the department can receive faxes.  This happens when the main clinical provider has their fax number set up but the department does not.  You should check both this field and the "clinicalproviderfax" field when determining if faxes are possible.
   */
  fax: string;
  /**
   * The zip code for this department.
   */
  zip: string;
  /**
   * The city for this department.
   */
  city: string;
  /**
   * The department's name.
   */
  name: string;
  /**
   * This number is not always patient-facing; it may be a "back line".
   */
  phone: string;
  /**
   * The state for this department.
   */
  state: string;
  /**
   * The address for this department.
   */
  address: string;
  /**
   * The address (line 2) for this department.
   */
  address2: string;
  /**
   * The latitude may be set by the practice to correct any bad public mapping data.  In degrees, with a decimal component.
   */
  latitude: string;
  /**
   * The timezone for this department, offset from UTC/GMT.
   */
  timezone: string;
  /**
   * Is Clinicals turned on for this department. Possible values are "ON", "OFF", "DOCUMENTSONLY" (which means that they accept documents, but generally not doing encounters in Clinicals) or "ADMINONLY" which for most purposes is the same as "OFF", though means that it is in the middle of implementation.
   */
  clinicals: string;
  /**
   * The longitude may be set by the practice to correct any bad public mapping data.  In degrees, with a decimal component.
   */
  longitude: string;
  /**
   * The URL for the practice or the portal, if available, for this department.  This may be the practice's website where they have a link to the portal.
   */
  portalurl: string;
  /**
   * This is the name of type of bill for the department.
   */
  typeofbill: string;
  /**
   * The department ID.  This ID is local to each practice.
   */
  departmentid: string;
  /**
   * This is the Federal Tax id number.
   */
  federaltaxid: string;
  /**
   * If providerlist is passed in (set to true), a list of provider IDs
   */
  providerlist: string;
  /**
   *  Timezone name of the department.
   */
  timezonename: string;
  /**
   * The "normal" timezone offset from UTC/GMT.  The "timezone" combines this and "doesnotobservedst".  During daylight savings, this is 1 less than "timezone".
   */
  timezoneoffset: string;
  /**
   * An array of credit card types accepted in this department (for retail transactions). If not present, credit cards can not be processed for this department for retail transactions.
   */
  creditcardtypes: string;
  /**
   * The ID of the financial group this department belongs to.  Not all practices have distinct financial groups.
   */
  providergroupid: string;
  /**
   * Set to true if this practice does not observe daylight savings time.
   */
  doesnotobservedst: boolean;
  /**
   * The name of the financial group this department belongs to.  Not all practices have distinct financial groups.
   */
  providergroupname: string;
  /**
   * Indicates if this is a department where billable services are performed (i.e. a department where you can create claims).
   */
  servicedepartment: boolean;
  /**
   * For a year long payment contract, the practice's suggested maximum amount for this department.
   */
  oneyearcontractmax: string;
  /**
   * The chart sharing group ID puts departments (that are enabled for Clinicals) into groups with regards to clinical information. Any chart related GET calls with department IDs that are in the same chart sharing group generally return the same set of information. For example, if department IDs 1 and 2 are in chart sharing group 1000 and department IDs 20 and 21 are in chart sharing group 2000, the allergies endpoint for department ID 1 or 2 will return the same set of data, and using department IDs 20 and 21 may return a different set of allergies. Most commonly, this is used to ensure mental health and other sensitive charts remain separate from other data.
   */
  chartsharinggroupid: string;
  /**
   * This is the department's fax number for receiving orders.
   */
  clinicalproviderfax: string;
  /**
   * The ID of the patient-facing brand this department belongs to.
   */
  communicatorbrandid: string;
  /**
   * Flag denoting if this department is a hospital department.
   */
  ishospitaldepartment: boolean;
  /**
   * An athena-internal ID for the type of service location (e.g. office vs. hospital)
   */
  placeofservicetypeid: string;
  /**
   * The patient-friendly name for this department, if set by the practice.
   */
  patientdepartmentname: string;
  /**
   * Is this department a "facility" or not
   */
  placeofservicefacility: boolean;
  /**
   * The name describing the type of service location (e.g. office vs. hospital)
   */
  placeofservicetypename: string;
  /**
   * An array of credit card types accepted in this department (for ecommerce transactions). If not present, credit cards can not be processed for this department for ecommerce transactions.
   */
  ecommercecreditcardtypes: string;
  /**
   * Should medication history consent be asked in this practice. This is a practice-wide setting at the end of the day; if it is on for one Clinicals department (of status "ON"), it will be on for all Clinicals departments.
   */
  medicationhistoryconsent: boolean;
  /**
   * For a single appointment payment contract, the practice's suggested maximum amount for this department.
   */
  singleappointmentcontractmax: string;
}
export interface FindDepartmentResponse {
  /**
   * This is the department's fax number.  Sometimes this is not configured even though the department can receive faxes.  This happens when the main clinical provider has their fax number set up but the department does not.  You should check both this field and the "clinicalproviderfax" field when determining if faxes are possible.
   */
  fax: string;
  /**
   * The zip code for this department.
   */
  zip: string;
  /**
   * The city for this department.
   */
  city: string;
  /**
   * The department's name.
   */
  name: string;
  /**
   * This number is not always patient-facing; it may be a "back line".
   */
  phone: string;
  /**
   * The state for this department.
   */
  state: string;
  /**
   * The address for this department.
   */
  address: string;
  /**
   * The address (line 2) for this department.
   */
  address2: string;
  /**
   * The latitude may be set by the practice to correct any bad public mapping data.  In degrees, with a decimal component.
   */
  latitude: string;
  /**
   * The timezone for this department, offset from UTC/GMT.
   */
  timezone: string;
  /**
   * Is Clinicals turned on for this department. Possible values are "ON", "OFF", "DOCUMENTSONLY" (which means that they accept documents, but generally not doing encounters in Clinicals) or "ADMINONLY" which for most purposes is the same as "OFF", though means that it is in the middle of implementation.
   */
  clinicals: string;
  /**
   * The longitude may be set by the practice to correct any bad public mapping data.  In degrees, with a decimal component.
   */
  longitude: string;
  /**
   * The URL for the practice or the portal, if available, for this department.  This may be the practice's website where they have a link to the portal.
   */
  portalurl: string;
  /**
   * This is the name of type of bill for the department.
   */
  typeofbill: string;
  /**
   * The department ID.  This ID is local to each practice.
   */
  departmentid: string;
  /**
   * This is the Federal Tax id number.
   */
  federaltaxid: string;
  /**
   * If providerlist is passed in (set to true), a list of provider IDs
   */
  providerlist: string;
  /**
   *  Timezone name of the department.
   */
  timezonename: string;
  /**
   * The "normal" timezone offset from UTC/GMT.  The "timezone" combines this and "doesnotobservedst".  During daylight savings, this is 1 less than "timezone".
   */
  timezoneoffset: string;
  /**
   * An array of credit card types accepted in this department (for retail transactions). If not present, credit cards can not be processed for this department for retail transactions.
   */
  creditcardtypes: string;
  /**
   * The ID of the financial group this department belongs to.  Not all practices have distinct financial groups.
   */
  providergroupid: string;
  /**
   * Set to true if this practice does not observe daylight savings time.
   */
  doesnotobservedst: boolean;
  /**
   * The name of the financial group this department belongs to.  Not all practices have distinct financial groups.
   */
  providergroupname: string;
  /**
   * Indicates if this is a department where billable services are performed (i.e. a department where you can create claims).
   */
  servicedepartment: boolean;
  /**
   * For a year long payment contract, the practice's suggested maximum amount for this department.
   */
  oneyearcontractmax: string;
  /**
   * The chart sharing group ID puts departments (that are enabled for Clinicals) into groups with regards to clinical information. Any chart related GET calls with department IDs that are in the same chart sharing group generally return the same set of information. For example, if department IDs 1 and 2 are in chart sharing group 1000 and department IDs 20 and 21 are in chart sharing group 2000, the allergies endpoint for department ID 1 or 2 will return the same set of data, and using department IDs 20 and 21 may return a different set of allergies. Most commonly, this is used to ensure mental health and other sensitive charts remain separate from other data.
   */
  chartsharinggroupid: string;
  /**
   * This is the department's fax number for receiving orders.
   */
  clinicalproviderfax: string;
  /**
   * The ID of the patient-facing brand this department belongs to.
   */
  communicatorbrandid: string;
  /**
   * Flag denoting if this department is a hospital department.
   */
  ishospitaldepartment: boolean;
  /**
   * An athena-internal ID for the type of service location (e.g. office vs. hospital)
   */
  placeofservicetypeid: string;
  /**
   * The patient-friendly name for this department, if set by the practice.
   */
  patientdepartmentname: string;
  /**
   * Is this department a "facility" or not
   */
  placeofservicefacility: boolean;
  /**
   * The name describing the type of service location (e.g. office vs. hospital)
   */
  placeofservicetypename: string;
  /**
   * An array of credit card types accepted in this department (for ecommerce transactions). If not present, credit cards can not be processed for this department for ecommerce transactions.
   */
  ecommercecreditcardtypes: string;
  /**
   * Should medication history consent be asked in this practice. This is a practice-wide setting at the end of the day; if it is on for one Clinicals department (of status "ON"), it will be on for all Clinicals departments.
   */
  medicationhistoryconsent: boolean;
  /**
   * For a single appointment payment contract, the practice's suggested maximum amount for this department.
   */
  singleappointmentcontractmax: string;
}
