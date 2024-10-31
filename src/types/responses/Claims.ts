export type FindClaimResponse = {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;
    /**
     * A hash of ids ("transactionid") to amounts; these should sum to the chargeamount.
     */
  transactiondetails: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;};
    /**
     * Primary accepts assignment.
     */
  acceptassignmentyn1: string;
    /**
     * Secondary accepts assignment.
     */
  acceptassignmentyn2: string;
    /**
     * The referring provider ID for this claim.  See /referringproviders.  This is not the same as the ID from the /providers call.
     */
  referringproviderid: number;
    /**
     * Rendering provider.
     */
  renderingproviderid: string;
    /**
     * Signature source.
     */
  signaturesourcecode: string;
    /**
     * Patient unable to work from date.
     */
  fromunabletoworkdate: string;
    /**
     * Scheduling provider.
     */
  schedulingproviderid: string;
    /**
     * The status and notes of a responsible payer.  This payer is the primary insurace.
     */
  primaryinsurancepayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;
    /**
     * A hash of ids ("transactionid") to amounts; these should sum to the chargeamount.
     */
  transactiondetails: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;};
    /**
     * Primary accepts assignment.
     */
  acceptassignmentyn1: string;
    /**
     * Secondary accepts assignment.
     */
  acceptassignmentyn2: string;
    /**
     * The referring provider ID for this claim.  See /referringproviders.  This is not the same as the ID from the /providers call.
     */
  referringproviderid: number;
    /**
     * Rendering provider.
     */
  renderingproviderid: string;
    /**
     * Signature source.
     */
  signaturesourcecode: string;
    /**
     * Patient unable to work from date.
     */
  fromunabletoworkdate: string;
    /**
     * Scheduling provider.
     */
  schedulingproviderid: string;};
    /**
     * Patient's condition related to employment.
     */
  relatedtoemploymentyn: string;
    /**
     * The supervising provider ID for this claim.
     */
  supervisingproviderid: number;
    /**
     * Patient's condition related to accident.
     */
  relatedtoautoaccidentyn: string;
    /**
     * The status and notes of a responsible payer.  This payer is the secondary insurace.
     */
  secondaryinsurancepayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;
    /**
     * A hash of ids ("transactionid") to amounts; these should sum to the chargeamount.
     */
  transactiondetails: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;};
    /**
     * Primary accepts assignment.
     */
  acceptassignmentyn1: string;
    /**
     * Secondary accepts assignment.
     */
  acceptassignmentyn2: string;
    /**
     * The referring provider ID for this claim.  See /referringproviders.  This is not the same as the ID from the /providers call.
     */
  referringproviderid: number;
    /**
     * Rendering provider.
     */
  renderingproviderid: string;
    /**
     * Signature source.
     */
  signaturesourcecode: string;
    /**
     * Patient unable to work from date.
     */
  fromunabletoworkdate: string;
    /**
     * Scheduling provider.
     */
  schedulingproviderid: string;
    /**
     * The status and notes of a responsible payer.  This payer is the primary insurace.
     */
  primaryinsurancepayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;
    /**
     * A hash of ids ("transactionid") to amounts; these should sum to the chargeamount.
     */
  transactiondetails: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;
    /**
     * Array of service type add-ons (STAOs) for the claim.
     */
  servicetypeaddons: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;
    /**
     * The status and notes of a responsible payer.  This payer is the patient.
     */
  patientpayer: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;
    /**
     * The claim custom field values may or may not be the same between departments. 
     */
  customfields: {
    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;
    /**
     * <p>Procedures is an array of all procedures.  /ccda is a better clinical representation.   These fields are:</p>

     */
  procedures: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;
    /**
     * <p>Diagnoses is an array of all diagnoses.   Each entry in the array is a hash with several fields.  /ccda is a better clinical representation.  These fields are:</p>

     */
  diagnoses: {    /**
     * athenaNet's internal ID for this claim, specific to the practice.
     */
  claimid: string;};
    /**
     * The patient ID associated with this claim.
     */
  patientid: number;};
    /**
     * The text in the Reserved 19 field.
     */
  reserved19: string;
    /**
     * Reserved (10d) (remarks).
     */
  reserved10d: string;
    /**
     * The total amount billed for all services from this claim.
     */
  chargeamount: string;}[];
    /**
     * The department ID associated with this claim.
     */
  departmentid: number;
    /**
     * Last modified date.
     */
  lastmodified: string;};
    /**
     * The appointment ID associated with this claim.
     */
  appointmentid: string;
    /**
     * A unique ID for the primary transaction this claim represents.  May be useful for debugging.
     */
  transactionid: string;
    /**
     * Last modified by user.
     */
  lastmodifiedby: string;
    /**
     * The local patient ID associated with this claim.
     */
  localpatientid: number;
    /**
     * The referral authorization ID for this claim.
     */
  referralauthid: number;
    /**
     * The provider ID of the billing provider for this claim.
     */
  billedproviderid: number;
    /**
     * The date the claim was created.
     */
  claimcreateddate: string;
    /**
     * The billed date of service.
     */
  billedservicedate: string;}[];
    /**
     * Current illness date.
     */
  currentillnessdate: string;
    /**
     * Same or similar illness date.
     */
  similarillnessdate: string;
    /**
     * Patient unable to work to date.
     */
  tounabletoworkdate: string;};
    /**
     * Primary accepts assignment.
     */
  acceptassignmentyn1: string;
    /**
     * Secondary accepts assignment.
     */
  acceptassignmentyn2: string;
    /**
     * The referring provider ID for this claim.  See /referringproviders.  This is not the same as the ID from the /providers call.
     */
  referringproviderid: number;
    /**
     * Rendering provider.
     */
  renderingproviderid: string;
    /**
     * Signature source.
     */
  signaturesourcecode: string;
    /**
     * Patient unable to work from date.
     */
  fromunabletoworkdate: string;
    /**
     * Scheduling provider.
     */
  schedulingproviderid: string;};
    /**
     * Patient's condition related to employment.
     */
  relatedtoemploymentyn: string;
    /**
     * The supervising provider ID for this claim.
     */
  supervisingproviderid: number;
    /**
     * Patient's condition related to accident.
     */
  relatedtoautoaccidentyn: string;};
    /**
     * The supervising provider name for this claim.
     */
  supervisingprovidername: string;
    /**
     * Resubmission, Code.
     */
  medicaidresubmissioncode: string;
    /**
     * Patient's condition related to other accident.
     */
  relatedtootheraccidentyn: string;
    /**
     * Medicare as a Secondary Payer qualifier selection name.
     */
  medicaresecondaryqualifier: string;
    /**
     * Medicare as a Secondary Payer qualifier selection Id.
     */
  medicaresecondaryqualifierid: string;
    /**
     * Resubmission Original Ref No.
     */
  medicaidresubmissionorigrefno: string;
    /**
     * Status of signature on file for assignment of benefits.
     */
  signatureonfileassignmentbenefits: string;
    /**
     * Status of signature on file for release of billing information.
     */
  signatureonfilereleaseinformation: string;
}
