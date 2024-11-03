export interface AllAppointmentTypesResponse {
  /**
   * The name of the appointment type.
   */
  name: string;
  /**
   * If true, this is a group appointment type.
   */
  groupyn: boolean;
  /**
   * Expected duration of the appointment in minutes.
   */
  duration: number;
  /**
   * If true, this type is a "generic" type able to be filled with other types of appointments.
   */
  genericyn: boolean;
  /**
   * If true, this type is a patient-facing type.
   */
  patientyn: boolean;
  /**
   * The short name code of the appointment type.
   */
  shortname: string;
  /**
   * ID of the provider.
   */
  providerid: number;
  /**
   * ID of the department.
   */
  departmentid: number;
  /**
   * The minimum number of hours before an appointment that a patient can schedule or cancel for a specific practice. Note that this data is valued in hours.
   */
  blockschedule: number;
  /**
   * The appointment type ID.
   */
  appointmenttypeid: number;
  /**
   * Patient friendly appointment type name. Defaults to regular name.
   */
  patientdisplayname: string;
  /**
   * If true, this type is a "template-only" type, and must be filled with a different appointment type upon booking.
   */
  templatetypeonlyyn: boolean;
  /**
   * ID of the class which this appointment type falls under. Only returned if SHOWAPPOINTMENTTYPECLASSES is marked true.
   */
  appointmenttypeclassid: string;
  /**
   * Name of the class which this appointment type falls under. Only returned if SHOWAPPOINTMENTTYPECLASSES is marked true.
   */
  appointmenttypeclassname: string;
  /**
   * If true, then this appointments of this type will generated an encounter when checked in, with certain conditions. It's rather complex, but the rendering provider on the appointment must also have the create encounter feature set, the department must have athena Clinicals enabled, and other rarer and less visible settings.
   */
  createencounteroncheckin: boolean;
}
export interface FindAppointmentTypeResponse {
  /**
   * The name of the appointment type.
   */
  name: string;
  /**
   * If true, this is a group appointment type.
   */
  groupyn: boolean;
  /**
   * Expected duration of the appointment in minutes.
   */
  duration: number;
  /**
   * If true, this type is a "generic" type able to be filled with other types of appointments.
   */
  genericyn: boolean;
  /**
   * If true, this type is a patient-facing type.
   */
  patientyn: boolean;
  /**
   * The short name code of the appointment type.
   */
  shortname: string;
  /**
   * ID of the provider.
   */
  providerid: number;
  /**
   * ID of the department.
   */
  departmentid: number;
  /**
   * The minimum number of hours before an appointment that a patient can schedule or cancel for a specific practice. Note that this data is valued in hours.
   */
  blockschedule: number;
  /**
   * The appointment type ID.
   */
  appointmenttypeid: number;
  /**
   * Patient friendly appointment type name. Defaults to regular name.
   */
  patientdisplayname: string;
  /**
   * If true, this type is a "template-only" type, and must be filled with a different appointment type upon booking.
   */
  templatetypeonlyyn: boolean;
  /**
   * ID of the class which this appointment type falls under. Only returned if SHOWAPPOINTMENTTYPECLASSES is marked true.
   */
  appointmenttypeclassid: string;
  /**
   * Name of the class which this appointment type falls under. Only returned if SHOWAPPOINTMENTTYPECLASSES is marked true.
   */
  appointmenttypeclassname: string;
  /**
   * If true, then this appointments of this type will generated an encounter when checked in, with certain conditions. It's rather complex, but the rendering provider on the appointment must also have the create encounter feature set, the department must have athena Clinicals enabled, and other rarer and less visible settings.
   */
  createencounteroncheckin: boolean;
}
export interface OpenAppointmentSlotsResponse {
  /**
   * The appointment date.
   */
  date: string;
  /**
   * Duration of the input appointment type, or duration of the appointment if appointment type is not given as input
   */
  duration: number;
  /**
   * If true, this appointment slot is frozen
   */
  frozenyn: boolean;
  /**
   * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
   */
  reasonid: number;
  /**
   * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
   */
  starttime: string;
  /**
   * The athenaNet ID for the provider of the appointment.
   */
  providerid: number;
  /**
   * The athenaNet department ID for the appointment
   */
  departmentid: number;
  /**
   * This is the ID of the appointment to use when booking. To be clear about the behind-the-scenes functionality, this is technically the first ID that will be used. Because of the ability to combine multiple "generic" slots into a single appointment, this may be first ID used. This is important only if trying to reconcile this against a practice's schedule template.
   */
  appointmentid: number;
  /**
   * The practice-friendly (not patient friendly) name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
   */
  appointmenttype: string;
  /**
   * The local athenaNet ID for the provider of the appointment.
   */
  localproviderid: number;
  /**
   * This is the ID for the appointment type.   Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
   */
  appointmenttypeid: number;
  /**
   * The rendering provider ID.
   */
  renderingproviderid: number;
  /**
   * A list of Appointment Type IDs that are valid to be booked in this slot. This will only be included if "New Schedule Admin" is enabled for the practice.
   */
  validappointmenttypeids: number;
  /**
   * The patient-friendly name for this appointment type.  Note that this may <strong>not</strong> be the same as the booked appointment because of "generic" slots.
   */
  patientappointmenttypename: string;
}
export interface CreateAppointmentSlotResponse {
  /**
   * An hash of appointment IDs to the time requested.
   */
  appointmentids: {};
}
export interface BookAppointmentResponse {
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
   * This field will tell if an appointment has been marked as not requiring change entry.
   */
  chargeentrynotrequired: boolean;
  /**
   * This field will give the reason that an appointment has been marked as not requiring charge entry.
   */
  chargeentrynotrequiredreason: string;
  /**
   * As detailed in /claims, if requested.
   */
  claims: {
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
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
  }[];
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
   * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
   */
  encounterid: string;
  /**
   * If true, encounter prep has been started for the encounter associated with this appointment.
   */
  encounterprep: boolean;
  /**
   * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
   */
  encounterstate: string;
  /**
   * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
   */
  encounterstatus: string;
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
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
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
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
    }[];
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
     * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * If true, encounter prep has been started for the encounter associated with this appointment.
     */
    encounterprep: boolean;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
    /**
     * If true, this appointment slot is frozen
     */
    frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
    hl7providerid: number;
  }[];
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
  /**
   * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
   */
  patientlocationid: string;
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
  /**
   * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
   */
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
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
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
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
    }[];
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
     * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * If true, encounter prep has been started for the encounter associated with this appointment.
     */
    encounterprep: boolean;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
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
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
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
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
      }[];
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
       * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * If true, encounter prep has been started for the encounter associated with this appointment.
       */
      encounterprep: boolean;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
      /**
       * If true, this appointment slot is frozen
       */
      frozenyn: string;
      /**
       * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
       */
      hl7providerid: number;
    }[];
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
    /**
     * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
     */
    patientlocationid: string;
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
    /**
     * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
     */
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
  }[];
  /**
   * Visit Id of the appointment. The VISITID property will only be visible if the following rollout toggle is ON : COLDEN_APPOINTMENT_WITH_VISITID_MDP_API
   */
  visitid: string;
}
export interface AllPatientAppointmentReasonsResponse {
  /**
   * The patient-friendly reason used to select an appointment type. This is meant to assist the patient in narrowing down what type of appointment should be selected and, in athenaNet, maps to the appropriate appointment type for a particular department/provider combination.
   */
  reason: string;
  /**
   * The ID for this reason.  Used to request open appointment slots.
   */
  reasonid: number;
  /**
   * Appointment reasons can be for new patients, existing patients, or all. Values are "new", "existing", or "all".
   */
  reasontype: string;
  /**
   * The patient-friendly name to accompany the reason.
   */
  description: string;
  /**
   * The maximum number of days before an appointment that a patient can schedule for a specific practice.
   */
  schedulingmaxdays: number;
  /**
   * The minimum number of hours before an appointment that a patient can schedule or cancel for a specific practice.
   */
  schedulingminhours: number;
}
export interface BookedAppointmentsResponse {
  /**
   * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
   */
  appointmentconfirmationid: string;
  /**
   * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
   */
  appointmentconfirmationname: string;
  /**
   * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
   */
  appointmentcopay: string;
  /**
   * Appointment ID of the booked appointment
   */
  appointmentid: string;
  /**
   * An array of appointment notes for this appointment.
   */
  appointmentnotes: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
  }[];
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
   * If the appointment has been cancelled, the username who cancelled the appointment.
   */
  cancelledby: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
   */
  cancelleddatetime: string;
  /**
   * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
   */
  cancelreasonid: string;
  /**
   * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
   */
  cancelreasonname: string;
  /**
   * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
   */
  cancelreasonnoshow: string;
  /**
   * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
   */
  cancelreasonslotavailable: string;
  /**
   * This field will tell if an appointment has been marked as not requiring change entry.
   */
  chargeentrynotrequired: boolean;
  /**
   * This field will give the reason that an appointment has been marked as not requiring charge entry.
   */
  chargeentrynotrequiredreason: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
   */
  checkindatetime: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
   */
  checkoutdatetime: string;
  /**
   * As detailed in /claims, if requested.
   */
  claims: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
  }[];
  /**
   * If true, the appointment was booked through athenaCoordinator Enterprise.
   */
  coordinatorenterpriseyn: string;
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
   * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
   */
  encounterid: string;
  /**
   * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
   */
  encounterstate: string;
  /**
   * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
   */
  encounterstatus: string;
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
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
    }[];
    /**
     * If true, the appointment was booked through athenaCoordinator Enterprise.
     */
    coordinatorenterpriseyn: string;
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
     * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
    /**
     * If true, this appointment slot is frozen
     */
    frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
    hl7providerid: number;
  }[];
  /**
   * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
   */
  lastmodified: string;
  /**
   * The user who last modified the appointment.
   */
  lastmodifiedby: string;
  /**
   * See /patients for details
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
  /**
   * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
   */
  patientlocationid: string;
  providerid: string;
  /**
   * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
   */
  reasonid: string;
  /**
   * The referring provider ID.
   */
  referringproviderid: string;
  /**
   * Detailed ReminderCall information made for this appointment.
   */
  reminderdetails: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
    }[];
    /**
     * If true, the appointment was booked through athenaCoordinator Enterprise.
     */
    coordinatorenterpriseyn: string;
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
     * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
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
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
      }[];
      /**
       * If true, the appointment was booked through athenaCoordinator Enterprise.
       */
      coordinatorenterpriseyn: string;
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
       * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
      /**
       * If true, this appointment slot is frozen
       */
      frozenyn: string;
      /**
       * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
       */
      hl7providerid: number;
    }[];
    /**
     * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
     */
    lastmodified: string;
    /**
     * The user who last modified the appointment.
     */
    lastmodifiedby: string;
    /**
     * See /patients for details
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
    /**
     * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
     */
    patientlocationid: string;
    providerid: string;
    /**
     * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
     */
    reasonid: string;
    /**
     * The referring provider ID.
     */
    referringproviderid: string;
  }[];
  /**
   * The rendering provider ID.
   */
  renderingproviderid: string;
  /**
   * When an appointment is rescheduled, this is the ID of the replacement appointment.
   */
  rescheduledappointmentid: string;
  /**
   * The username who scheduled the appointment.
   */
  scheduledby: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was scheduled.
   */
  scheduleddatetime: string;
  /**
   * The timestamp when the appointment started the check in process. If this is set while an appointment is still in status 'f', it means that the check-in process has begun but is not yet completed.
   */
  startcheckin: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the appointment check-out was started.
   */
  startcheckoutdatetime: string;
  /**
   * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
   */
  starttime: string;
  /**
   * The timestamp when the check-in process was finished for this appointment.
   */
  stopcheckin: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the exam was completed.
   */
  stopexamdatetime: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the intake process was completed.
   */
  stopintakedatetime: string;
  /**
   * The timestamp when the sign-off process was finished for this appointment. The STOPSIGNOFF property will only be visible if the following rollout toggle is ENABLED : CLUCT_315_MDP_UCTB
   */
  stopsignoff: string;
  /**
   * High risk score for Smart Scheduling
   */
  suggestedoverbooking: string;
  /**
   * The supervising provider ID.
   */
  supervisingproviderid: number;
  /**
   * The original appointment ID. This is useful if an appointment has been cancelled and you want to find the original ID.
   */
  templateappointmentid: string;
  /**
   * The original appointment type for this slot. This can change for generic appointments.
   */
  templateappointmenttypeid: string;
  /**
   * Urgent flag for the appointment.
   */
  urgentyn: boolean;
  /**
   * An array of expected procedure codes attached to this appointment.
   */
  useexpectedprocedurecodes: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
    }[];
    /**
     * If true, the appointment was booked through athenaCoordinator Enterprise.
     */
    coordinatorenterpriseyn: string;
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
     * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
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
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
      }[];
      /**
       * If true, the appointment was booked through athenaCoordinator Enterprise.
       */
      coordinatorenterpriseyn: string;
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
       * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
      /**
       * If true, this appointment slot is frozen
       */
      frozenyn: string;
      /**
       * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
       */
      hl7providerid: number;
    }[];
    /**
     * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
     */
    lastmodified: string;
    /**
     * The user who last modified the appointment.
     */
    lastmodifiedby: string;
    /**
     * See /patients for details
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
    /**
     * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
     */
    patientlocationid: string;
    providerid: string;
    /**
     * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
     */
    reasonid: string;
    /**
     * The referring provider ID.
     */
    referringproviderid: string;
    /**
     * Detailed ReminderCall information made for this appointment.
     */
    reminderdetails: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
      }[];
      /**
       * If true, the appointment was booked through athenaCoordinator Enterprise.
       */
      coordinatorenterpriseyn: string;
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
       * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
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
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
        /**
         * As detailed in /claims, if requested.
         */
        claims: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
          /**
           * An array of appointment notes for this appointment.
           */
          appointmentnotes: {
            /**
             * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
             */
            appointmentconfirmationid: string;
            /**
             * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
             */
            appointmentconfirmationname: string;
            /**
             * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
             */
            appointmentcopay: string;
            /**
             * Appointment ID of the booked appointment
             */
            appointmentid: string;
          }[];
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
           * If the appointment has been cancelled, the username who cancelled the appointment.
           */
          cancelledby: string;
          /**
           * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
           */
          cancelleddatetime: string;
          /**
           * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
           */
          cancelreasonid: string;
          /**
           * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
           */
          cancelreasonname: string;
          /**
           * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
           */
          cancelreasonnoshow: string;
          /**
           * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
           */
          cancelreasonslotavailable: string;
          /**
           * This field will tell if an appointment has been marked as not requiring change entry.
           */
          chargeentrynotrequired: boolean;
          /**
           * This field will give the reason that an appointment has been marked as not requiring charge entry.
           */
          chargeentrynotrequiredreason: string;
          /**
           * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
           */
          checkindatetime: string;
          /**
           * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
           */
          checkoutdatetime: string;
        }[];
        /**
         * If true, the appointment was booked through athenaCoordinator Enterprise.
         */
        coordinatorenterpriseyn: string;
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
         * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
         */
        encounterid: string;
        /**
         * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
         */
        encounterstate: string;
        /**
         * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
         */
        encounterstatus: string;
        /**
         * If true, this appointment slot is frozen
         */
        frozenyn: string;
        /**
         * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
         */
        hl7providerid: number;
      }[];
      /**
       * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
       */
      lastmodified: string;
      /**
       * The user who last modified the appointment.
       */
      lastmodifiedby: string;
      /**
       * See /patients for details
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
      /**
       * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
       */
      patientlocationid: string;
      providerid: string;
      /**
       * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
       */
      reasonid: string;
      /**
       * The referring provider ID.
       */
      referringproviderid: string;
    }[];
    /**
     * The rendering provider ID.
     */
    renderingproviderid: string;
    /**
     * When an appointment is rescheduled, this is the ID of the replacement appointment.
     */
    rescheduledappointmentid: string;
    /**
     * The username who scheduled the appointment.
     */
    scheduledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was scheduled.
     */
    scheduleddatetime: string;
    /**
     * The timestamp when the appointment started the check in process. If this is set while an appointment is still in status 'f', it means that the check-in process has begun but is not yet completed.
     */
    startcheckin: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment check-out was started.
     */
    startcheckoutdatetime: string;
    /**
     * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
     */
    starttime: string;
    /**
     * The timestamp when the check-in process was finished for this appointment.
     */
    stopcheckin: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the exam was completed.
     */
    stopexamdatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the intake process was completed.
     */
    stopintakedatetime: string;
    /**
     * The timestamp when the sign-off process was finished for this appointment. The STOPSIGNOFF property will only be visible if the following rollout toggle is ENABLED : CLUCT_315_MDP_UCTB
     */
    stopsignoff: string;
    /**
     * High risk score for Smart Scheduling
     */
    suggestedoverbooking: string;
    /**
     * The supervising provider ID.
     */
    supervisingproviderid: number;
    /**
     * The original appointment ID. This is useful if an appointment has been cancelled and you want to find the original ID.
     */
    templateappointmentid: string;
    /**
     * The original appointment type for this slot. This can change for generic appointments.
     */
    templateappointmenttypeid: string;
    /**
     * Urgent flag for the appointment.
     */
    urgentyn: boolean;
  }[];
  /**
   * Visit Id of the appointment. The VISITID property will only be visible if the following rollout toggle is ON : COLDEN_APPOINTMENT_WITH_VISITID_MDP_API
   */
  visitid: string;
}
export interface MultipledepartmentBookedAppointmentsResponse {
  /**
   * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
   */
  appointmentconfirmationid: string;
  /**
   * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
   */
  appointmentconfirmationname: string;
  /**
   * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
   */
  appointmentcopay: string;
  /**
   * Appointment ID of the booked appointment
   */
  appointmentid: string;
  /**
   * An array of appointment notes for this appointment.
   */
  appointmentnotes: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
  }[];
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
   * If the appointment has been cancelled, the username who cancelled the appointment.
   */
  cancelledby: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
   */
  cancelleddatetime: string;
  /**
   * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
   */
  cancelreasonid: string;
  /**
   * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
   */
  cancelreasonname: string;
  /**
   * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
   */
  cancelreasonnoshow: string;
  /**
   * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
   */
  cancelreasonslotavailable: string;
  /**
   * This field will tell if an appointment has been marked as not requiring change entry.
   */
  chargeentrynotrequired: boolean;
  /**
   * This field will give the reason that an appointment has been marked as not requiring charge entry.
   */
  chargeentrynotrequiredreason: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
   */
  checkindatetime: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
   */
  checkoutdatetime: string;
  /**
   * As detailed in /claims, if requested.
   */
  claims: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
  }[];
  /**
   * If true, the appointment was booked through athenaCoordinator Enterprise.
   */
  coordinatorenterpriseyn: string;
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
   * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
   */
  encounterid: string;
  /**
   * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
   */
  encounterstate: string;
  /**
   * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
   */
  encounterstatus: string;
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
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
    }[];
    /**
     * If true, the appointment was booked through athenaCoordinator Enterprise.
     */
    coordinatorenterpriseyn: string;
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
     * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
    /**
     * If true, this appointment slot is frozen
     */
    frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
    hl7providerid: number;
  }[];
  /**
   * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
   */
  lastmodified: string;
  /**
   * The user who last modified the appointment.
   */
  lastmodifiedby: string;
  /**
   * See /patients for details
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
  /**
   * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
   */
  patientlocationid: string;
  providerid: string;
  /**
   * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
   */
  reasonid: string;
  /**
   * The referring provider ID.
   */
  referringproviderid: string;
  /**
   * Detailed ReminderCall information made for this appointment.
   */
  reminderdetails: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
    }[];
    /**
     * If true, the appointment was booked through athenaCoordinator Enterprise.
     */
    coordinatorenterpriseyn: string;
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
     * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
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
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
      }[];
      /**
       * If true, the appointment was booked through athenaCoordinator Enterprise.
       */
      coordinatorenterpriseyn: string;
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
       * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
      /**
       * If true, this appointment slot is frozen
       */
      frozenyn: string;
      /**
       * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
       */
      hl7providerid: number;
    }[];
    /**
     * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
     */
    lastmodified: string;
    /**
     * The user who last modified the appointment.
     */
    lastmodifiedby: string;
    /**
     * See /patients for details
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
    /**
     * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
     */
    patientlocationid: string;
    providerid: string;
    /**
     * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
     */
    reasonid: string;
    /**
     * The referring provider ID.
     */
    referringproviderid: string;
  }[];
  /**
   * The rendering provider ID.
   */
  renderingproviderid: string;
  /**
   * When an appointment is rescheduled, this is the ID of the replacement appointment.
   */
  rescheduledappointmentid: string;
  /**
   * The username who scheduled the appointment.
   */
  scheduledby: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was scheduled.
   */
  scheduleddatetime: string;
  /**
   * The timestamp when the appointment started the check in process. If this is set while an appointment is still in status 'f', it means that the check-in process has begun but is not yet completed.
   */
  startcheckin: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the appointment check-out was started.
   */
  startcheckoutdatetime: string;
  /**
   * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
   */
  starttime: string;
  /**
   * The timestamp when the check-in process was finished for this appointment.
   */
  stopcheckin: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the exam was completed.
   */
  stopexamdatetime: string;
  /**
   * The time (mm/dd/yyyy hh24:mi:ss) that the intake process was completed.
   */
  stopintakedatetime: string;
  /**
   * The timestamp when the sign-off process was finished for this appointment. The STOPSIGNOFF property will only be visible if the following rollout toggle is ENABLED : CLUCT_315_MDP_UCTB
   */
  stopsignoff: string;
  /**
   * High risk score for Smart Scheduling
   */
  suggestedoverbooking: string;
  /**
   * The supervising provider ID.
   */
  supervisingproviderid: number;
  /**
   * The original appointment ID. This is useful if an appointment has been cancelled and you want to find the original ID.
   */
  templateappointmentid: string;
  /**
   * The original appointment type for this slot. This can change for generic appointments.
   */
  templateappointmenttypeid: string;
  /**
   * Urgent flag for the appointment.
   */
  urgentyn: boolean;
  /**
   * An array of expected procedure codes attached to this appointment.
   */
  useexpectedprocedurecodes: {
    /**
     * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
     */
    appointmentconfirmationid: string;
    /**
     * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
     */
    appointmentconfirmationname: string;
    /**
     * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
     */
    appointmentcopay: string;
    /**
     * Appointment ID of the booked appointment
     */
    appointmentid: string;
    /**
     * An array of appointment notes for this appointment.
     */
    appointmentnotes: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
    }[];
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
     * If the appointment has been cancelled, the username who cancelled the appointment.
     */
    cancelledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
     */
    cancelleddatetime: string;
    /**
     * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
     */
    cancelreasonid: string;
    /**
     * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
     */
    cancelreasonname: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
     */
    cancelreasonnoshow: string;
    /**
     * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
     */
    cancelreasonslotavailable: string;
    /**
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
     */
    checkindatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
     */
    checkoutdatetime: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
    }[];
    /**
     * If true, the appointment was booked through athenaCoordinator Enterprise.
     */
    coordinatorenterpriseyn: string;
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
     * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
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
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
      }[];
      /**
       * If true, the appointment was booked through athenaCoordinator Enterprise.
       */
      coordinatorenterpriseyn: string;
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
       * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
      /**
       * If true, this appointment slot is frozen
       */
      frozenyn: string;
      /**
       * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
       */
      hl7providerid: number;
    }[];
    /**
     * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
     */
    lastmodified: string;
    /**
     * The user who last modified the appointment.
     */
    lastmodifiedby: string;
    /**
     * See /patients for details
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
    /**
     * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
     */
    patientlocationid: string;
    providerid: string;
    /**
     * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
     */
    reasonid: string;
    /**
     * The referring provider ID.
     */
    referringproviderid: string;
    /**
     * Detailed ReminderCall information made for this appointment.
     */
    reminderdetails: {
      /**
       * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
       */
      appointmentconfirmationid: string;
      /**
       * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
       */
      appointmentconfirmationname: string;
      /**
       * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
       */
      appointmentcopay: string;
      /**
       * Appointment ID of the booked appointment
       */
      appointmentid: string;
      /**
       * An array of appointment notes for this appointment.
       */
      appointmentnotes: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
      }[];
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
       * If the appointment has been cancelled, the username who cancelled the appointment.
       */
      cancelledby: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
       */
      cancelleddatetime: string;
      /**
       * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
       */
      cancelreasonid: string;
      /**
       * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
       */
      cancelreasonname: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
       */
      cancelreasonnoshow: string;
      /**
       * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
       */
      cancelreasonslotavailable: string;
      /**
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
       */
      checkindatetime: string;
      /**
       * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
       */
      checkoutdatetime: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
        /**
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
      }[];
      /**
       * If true, the appointment was booked through athenaCoordinator Enterprise.
       */
      coordinatorenterpriseyn: string;
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
       * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
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
         * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
         */
        appointmentconfirmationid: string;
        /**
         * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
         */
        appointmentconfirmationname: string;
        /**
         * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
         */
        appointmentcopay: string;
        /**
         * Appointment ID of the booked appointment
         */
        appointmentid: string;
        /**
         * An array of appointment notes for this appointment.
         */
        appointmentnotes: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
        }[];
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
         * If the appointment has been cancelled, the username who cancelled the appointment.
         */
        cancelledby: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
         */
        cancelleddatetime: string;
        /**
         * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
         */
        cancelreasonid: string;
        /**
         * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
         */
        cancelreasonname: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
         */
        cancelreasonnoshow: string;
        /**
         * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
         */
        cancelreasonslotavailable: string;
        /**
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
         */
        checkindatetime: string;
        /**
         * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
         */
        checkoutdatetime: string;
        /**
         * As detailed in /claims, if requested.
         */
        claims: {
          /**
           * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
           */
          appointmentconfirmationid: string;
          /**
           * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
           */
          appointmentconfirmationname: string;
          /**
           * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
           */
          appointmentcopay: string;
          /**
           * Appointment ID of the booked appointment
           */
          appointmentid: string;
          /**
           * An array of appointment notes for this appointment.
           */
          appointmentnotes: {
            /**
             * If there is an appointment confirmation result for this appointment, the numeric ID (global to athenaNet).
             */
            appointmentconfirmationid: string;
            /**
             * If there is an appointment confirmation result for this appointment, the name (global to athenaNet).
             */
            appointmentconfirmationname: string;
            /**
             * Detailed information about the copay for this appointment.  Gives more detail than the COPAY field.  Note: this information is not yet available in all practices, we are rolling this out slowly.
             */
            appointmentcopay: string;
            /**
             * Appointment ID of the booked appointment
             */
            appointmentid: string;
          }[];
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
           * If the appointment has been cancelled, the username who cancelled the appointment.
           */
          cancelledby: string;
          /**
           * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was cancelled (if cancelled)
           */
          cancelleddatetime: string;
          /**
           * If the appointment was cancelled, the numeric ID (local to the practice) for the cancel reason.
           */
          cancelreasonid: string;
          /**
           * If the appointment was cancelled, the name (local to the practice) for the cancel reason.
           */
          cancelreasonname: string;
          /**
           * If the appointment was cancelled, if the cancel reason is marked as a no show reason.
           */
          cancelreasonnoshow: string;
          /**
           * If the appointment was cancelled, if the cancel reason is marked as a slot available reason.
           */
          cancelreasonslotavailable: string;
          /**
           * This field will tell if an appointment has been marked as not requiring change entry.
           */
          chargeentrynotrequired: boolean;
          /**
           * This field will give the reason that an appointment has been marked as not requiring charge entry.
           */
          chargeentrynotrequiredreason: string;
          /**
           * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked in.
           */
          checkindatetime: string;
          /**
           * The time (mm/dd/yyyy hh24:mi:ss) that the appointment was checked out.
           */
          checkoutdatetime: string;
        }[];
        /**
         * If true, the appointment was booked through athenaCoordinator Enterprise.
         */
        coordinatorenterpriseyn: string;
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
         * The encounter id associated with this appointment, useful for certain other calls. Only present for appointments with Clinicals that have been checked in.
         */
        encounterid: string;
        /**
         * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
         */
        encounterstate: string;
        /**
         * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT). Only present for appointments with Clinicals that have been checked in.
         */
        encounterstatus: string;
        /**
         * If true, this appointment slot is frozen
         */
        frozenyn: string;
        /**
         * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
         */
        hl7providerid: number;
      }[];
      /**
       * The date/time when the appointment was last modified. Note: It may be possible for the lastmodified field to be updated without any other field in the API call being changed. This occurs when appointment fields not included in the API output are updated.
       */
      lastmodified: string;
      /**
       * The user who last modified the appointment.
       */
      lastmodifiedby: string;
      /**
       * See /patients for details
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
      /**
       * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
       */
      patientlocationid: string;
      providerid: string;
      /**
       * A list of reason IDs that could be used for this slot.  Only present if multiple reason IDs are requested.
       */
      reasonid: string;
      /**
       * The referring provider ID.
       */
      referringproviderid: string;
    }[];
    /**
     * The rendering provider ID.
     */
    renderingproviderid: string;
    /**
     * When an appointment is rescheduled, this is the ID of the replacement appointment.
     */
    rescheduledappointmentid: string;
    /**
     * The username who scheduled the appointment.
     */
    scheduledby: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss; Eastern time) that this appointment was scheduled.
     */
    scheduleddatetime: string;
    /**
     * The timestamp when the appointment started the check in process. If this is set while an appointment is still in status 'f', it means that the check-in process has begun but is not yet completed.
     */
    startcheckin: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the appointment check-out was started.
     */
    startcheckoutdatetime: string;
    /**
     * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
     */
    starttime: string;
    /**
     * The timestamp when the check-in process was finished for this appointment.
     */
    stopcheckin: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the exam was completed.
     */
    stopexamdatetime: string;
    /**
     * The time (mm/dd/yyyy hh24:mi:ss) that the intake process was completed.
     */
    stopintakedatetime: string;
    /**
     * The timestamp when the sign-off process was finished for this appointment. The STOPSIGNOFF property will only be visible if the following rollout toggle is ENABLED : CLUCT_315_MDP_UCTB
     */
    stopsignoff: string;
    /**
     * High risk score for Smart Scheduling
     */
    suggestedoverbooking: string;
    /**
     * The supervising provider ID.
     */
    supervisingproviderid: number;
    /**
     * The original appointment ID. This is useful if an appointment has been cancelled and you want to find the original ID.
     */
    templateappointmentid: string;
    /**
     * The original appointment type for this slot. This can change for generic appointments.
     */
    templateappointmenttypeid: string;
    /**
     * Urgent flag for the appointment.
     */
    urgentyn: boolean;
  }[];
  /**
   * Visit Id of the appointment. The VISITID property will only be visible if the following rollout toggle is ON : COLDEN_APPOINTMENT_WITH_VISITID_MDP_API
   */
  visitid: string;
}
export interface CancelAppointmentResponse {
  /**
   * The status of this appointment after the operation (generally "x").
   */
  status: string;
}
export interface AppointmentNotesResponse {
  /**
   * The ID for this note, for use with DELETE and PUT calls.
   */
  noteid: string;
  /**
   * The time this note was created (mm/dd/yyyy hh24:mi:ss)
   */
  created: string;
  /**
   * The time this note was deleted (mm/dd/yyyy hh24:mi:ss).  Not present if not deleted.
   */
  deleted: string;
  /**
   * The text of the note itself.
   */
  notetext: string;
  /**
   * The user that created this note.
   */
  createdby: string;
  /**
   * If deleted, the username who deleted this note.
   */
  deletedby: string;
  /**
   * The time this note was updated (mm/dd/yyyy hh24:mi:ss), if the note has been updated.
   */
  lastmodified: string;
  /**
   * If the note has been modified, the username who last modified this note.
   */
  lastmodifiedby: string;
  /**
   * Determines if an appointment note displays on the homepage schedule view.
   */
  displayonschedule: string;
}
export interface CreateAppointmentNoteResponse {
  /**
   * Returns true/false if the operation was successful
   */
  success: string;
}
export interface StartCheckInResponse {
  /**
   * Debugging text in case of failure.
   */
  message: string;
  /**
   * Indicates that this call was successful.  Processing should still continue even if there was an error with this call.  Generally, this will only be false if the appointment is in a good state to start the process, but the startcheckin call was already used.  Other errors may occur, similar to potential errors with /appointments/{appointmentid}/checkin.
   */
  success: boolean;
}
export interface CancelCheckInResponse {
  /**
   * Debugging in case of failure.
   */
  message: string;
  /**
   * See documentation for /appointments/{appointmentid}/startcheckin. This is very similar, except this endpoint is used for canceling the check-in process rather than starting it.
   */
  success: boolean;
}
export interface CheckInResponse {
  /**
   * Shows which section caused the check-in to fail.
   */
  message: string;
  /**
   * Indicates whether the check-in was successful.
   */
  success: boolean;
}
export interface RescheduleAppointmentResponse {
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
   * As detailed in /claims, if requested.
   */
  claims: {
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
  }[];
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
  /**
   * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
   */
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
     * As detailed in /claims, if requested.
     */
    claims: {
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
    }[];
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
    /**
     * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
     */
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
  }[];
  /**
   * Visit Id of the appointment. The VISITID property will only be visible if the following rollout toggle is ON : COLDEN_APPOINTMENT_WITH_VISITID_MDP_API
   */
  visitid: string;
}
export interface FindAppointmentResponse {
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
   * This field will tell if an appointment has been marked as not requiring change entry.
   */
  chargeentrynotrequired: boolean;
  /**
   * This field will give the reason that an appointment has been marked as not requiring charge entry.
   */
  chargeentrynotrequiredreason: string;
  /**
   * As detailed in /claims, if requested.
   */
  claims: {
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
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
  }[];
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
   * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
   */
  encounterid: string;
  /**
   * If true, encounter prep has been started for the encounter associated with this appointment.
   */
  encounterprep: boolean;
  /**
   * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
   */
  encounterstate: string;
  /**
   * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
   */
  encounterstatus: string;
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
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
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
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
    }[];
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
     * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * If true, encounter prep has been started for the encounter associated with this appointment.
     */
    encounterprep: boolean;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
    /**
     * If true, this appointment slot is frozen
     */
    frozenyn: string;
    /**
     * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
     */
    hl7providerid: number;
  }[];
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
  /**
   * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
   */
  patientlocationid: string;
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
  /**
   * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
   */
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
     * This field will tell if an appointment has been marked as not requiring change entry.
     */
    chargeentrynotrequired: boolean;
    /**
     * This field will give the reason that an appointment has been marked as not requiring charge entry.
     */
    chargeentrynotrequiredreason: string;
    /**
     * As detailed in /claims, if requested.
     */
    claims: {
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
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
    }[];
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
     * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
     */
    encounterid: string;
    /**
     * If true, encounter prep has been started for the encounter associated with this appointment.
     */
    encounterprep: boolean;
    /**
     * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
     */
    encounterstate: string;
    /**
     * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
     */
    encounterstatus: string;
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
       * This field will tell if an appointment has been marked as not requiring change entry.
       */
      chargeentrynotrequired: boolean;
      /**
       * This field will give the reason that an appointment has been marked as not requiring charge entry.
       */
      chargeentrynotrequiredreason: string;
      /**
       * As detailed in /claims, if requested.
       */
      claims: {
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
         * This field will tell if an appointment has been marked as not requiring change entry.
         */
        chargeentrynotrequired: boolean;
        /**
         * This field will give the reason that an appointment has been marked as not requiring charge entry.
         */
        chargeentrynotrequiredreason: string;
      }[];
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
       * The encounter id associated with this appointment, useful for certain other calls.  Only present for appointments with Clinicals that have been checked in.
       */
      encounterid: string;
      /**
       * If true, encounter prep has been started for the encounter associated with this appointment.
       */
      encounterprep: boolean;
      /**
       * The status of the clinical encounter associated with this appointment (OPEN, CLOSED, DELETED, PEND, etc.). This differs from encounterstatus, which refers to the status of the patient in the encounter.
       */
      encounterstate: string;
      /**
       * The status of this patient in the encounter (READYFORSTAFF, WITHSTAFF, READFORPROVIDER, CHECKEDOUT).  Only present for appointments with Clinicals that have been checked in.
       */
      encounterstatus: string;
      /**
       * If true, this appointment slot is frozen
       */
      frozenyn: string;
      /**
       * This is the raw provider ID that should be used ONLY if using this appointment in conjunction with an HL7 message and with athenahealth's prior guidance. It is only available in some situations.
       */
      hl7providerid: number;
    }[];
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
    /**
     * The location of the patient. See /patientlocation for practice list. Only present for appointments with Clinicals that have been checked in.
     */
    patientlocationid: string;
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
    /**
     * As HH:MM (where HH is the 0-23 hour and MM is the minute).  This time is local to the department.
     */
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
  }[];
  /**
   * Visit Id of the appointment. The VISITID property will only be visible if the following rollout toggle is ON : COLDEN_APPOINTMENT_WITH_VISITID_MDP_API
   */
  visitid: string;
}
export interface AppointmentRemindersResponse {
  /**
   * The athenaNet appointment reminder ID.
   */
  appointmentreminderid: number;
  /**
   * Type of appointment.
   */
  appointmenttype: string;
  /**
   * The athenaNet appointment type ID.
   */
  appointmenttypeid: number;
  /**
   * The approximate date on which an appointment for this reminder should be scheduled.
   */
  approximatedate: string;
  /**
   * The date when appointment reminder was created.
   */
  created: string;
  /**
   * The name of the person who created/updated the reminder.
   */
  createdby: string;
  /**
   * If set, the date on which this reminder was deleted.
   */
  deleted: string;
  /**
   * The athenaNet department ID.
   */
  departmentid: number;
  /**
   * Appointment encounter ID.
   */
  encounterid: number;
  /**
   * Free-text notes entered by the practice about this reminder.
   */
  note: string;
  /**
   * The athenaNet patient ID.
   */
  patientid: number;
  /**
   * Free-text instructions for the patient entered by the practice for this reminder.
   */
  patientinstructions: string;
  /**
   * The name of the provider .
   */
  providerbilledname: string;
  /**
   * The athenaNet provider ID.
   */
  providerid: number;
  /**
   * Free-text instructions for the staff about the content of the next appointment.
   */
  staffinstructions: string;
  /**
   * Status of the reminder.
   */
  status: string;
}
export interface FindAppointmentReminderResponse {
  /**
   * The athenaNet appointment reminder ID.
   */
  appointmentreminderid: number;
  /**
   * Type of appointment.
   */
  appointmenttype: string;
  /**
   * The athenaNet appointment type ID.
   */
  appointmenttypeid: number;
  /**
   * The approximate date on which an appointment for this reminder should be scheduled.
   */
  approximatedate: string;
  /**
   * The date when appointment reminder was created.
   */
  created: string;
  /**
   * The name of the person who created/updated the reminder.
   */
  createdby: string;
  /**
   * If set, the date on which this reminder was deleted.
   */
  deleted: string;
  /**
   * The athenaNet department ID.
   */
  departmentid: number;
  /**
   * Appointment encounter ID.
   */
  encounterid: number;
  /**
   * Free-text notes entered by the practice about this reminder.
   */
  note: string;
  /**
   * The athenaNet patient ID.
   */
  patientid: number;
  /**
   * Free-text instructions for the patient entered by the practice for this reminder.
   */
  patientinstructions: string;
  /**
   * The name of the provider .
   */
  providerbilledname: string;
  /**
   * The athenaNet provider ID.
   */
  providerid: number;
  /**
   * Free-text instructions for the staff about the content of the next appointment.
   */
  staffinstructions: string;
  /**
   * Status of the reminder.
   */
  status: string;
}
export interface CreateAppointmentReminderResponse {
  /**
   * Indicates whether creation of the appointment reminder was successful or not.
   */
  success: boolean;
  /**
   * If operation was unsuccessful, detail as to why.
   */
  errormessage: string;
  /**
   * An athenaNet appointment reminder ID.
   */
  appointmentreminderid: number;
}
export interface DeleteAppointmentReminderResponse {
  /**
   * Indicates whether creation of the appointment reminder was successful or not.
   */
  success: boolean;
  /**
   * If operation was unsuccessful, detail as to why.
   */
  errormessage: string;
}
export interface AppointmentInsurancesResponse {
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
    confidentialitycode: string;
  }[];
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
      confidentialitycode: string;
    }[];
  }[];
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
export interface CreateAppointmentWaitlistResponse {
  /**
   * The ID of the wait list entry that was created.
   */
  waitlistid: number;
}
