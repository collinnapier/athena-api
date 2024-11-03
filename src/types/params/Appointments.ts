/**
 * Retrieves list of the type of appointment available in the practice
 *
 * Endpoint: /v1/{practiceid}/appointmenttypes
 */
export interface AllAppointmentTypesParams {
  /**
   * By default, we show both generic and non-generic types. Setting this to true will hide the generic types (and show only non-generic types).
   */
  hidegeneric?: boolean;
  /**
   * If set to true, returns the appointment type class ID and name for each appointment type.
   */
  showappointmenttypeclasses?: boolean;
  /**
   * A list of providerids which when passed will filter the appointmenttypes having said providers. This is used along with departmentids to fetch department/provider specific appointmenttypes.
   */
  providerids?: Array<string>;
  /**
   * By default, we show both "template only" and not-template only types. Setting this to true, the results will omit template only types. ("Template only" is a setting that makes the type appear in schedules, but forces users to select a non-template type upon booking.)
   */
  hidetemplatetypeonly?: boolean;
  /**
   * A list of departmentids which when passed will filter the appointmenttypes having said departments. This is used along with providerids to fetch department/provider specific appointmenttypes.
   */
  departmentids?: Array<string>;
  /**
   * This defaults to true if not specified, and thus will hide non-patient facing types.  Setting this to false would thus show non-patient facing types.
   */
  hidenonpatient?: boolean;
  /**
   * By default, we show both generic and non-generic types. Setting this to true will hide non-generic types (and show only generic types).
   */
  hidenongeneric?: boolean;
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
 * Retrieves list of the type of appointment available in the practice
 *
 * Endpoint: /v1/{practiceid}/appointmenttypes/{appointmenttypeid}
 */
export interface FindAppointmentTypeParams {
  /**
   * appointmenttypeid
   */
  appointmenttypeid: number;
  /**
   * If set to true, returns the appointment type class ID and name for each appointment type.
   */
  showappointmenttypeclasses?: boolean;
}

/**
 * Retrieves access to open appointment slots
 *
 * Endpoint: /v1/{practiceid}/appointments/open
 */
export interface OpenAppointmentSlotsParams {
  /**
   * Normally, an appointment reason ID should be used which will map to the correct underlying appointment type in athenaNet. This field will ignore the practice's existing setup for what should be scheduled. Please consult with athenahealth before using. Either an appointmenttypeid or a reasonid must be specified or no results will be returned.
   */
  appointmenttypeid?: number;
  /**
   * The athenaNet department ID.
   */
  departmentid: Array<string>;
  /**
   * The athenaNet provider ID. Required if a reasonid other than -1 is specified.
   */
  providerid?: Array<string>;
  /**
   * By default, we hide appointments that are frozen from being returned via the API.   This flag allows you to show frozen slots in the set of results returned.
   */
  showfrozenslots?: boolean;
  /**
   * By default, we show only appointments that are are available to scheduled via the API.   This flag allows you to bypass that restriction for viewing available appointments (but you still may not be able to schedule based on this permission!).  This flag does not, however, show the full schedule (that is, appointments that are already booked).
   */
  ignoreschedulablepermission?: boolean;
  /**
   * End of the appointment search date range (mm/dd/yyyy).  Inclusive. Defaults to seven days from startdate.
   */
  enddate?: string;
  /**
   * Bypass checks that usually require returned appointments to be some amount of hours in the future (as configured by the practice, defaulting to 24 hours), and also ignores the setting that only shows appointments for a certain number of days in the future (also configurable by the practice, defaulting to 90 days).
   */
  bypassscheduletimechecks?: boolean;
  /**
   * The athenaNet patient appointment reason ID, from GET /patientappointmentreasons. While this is not technically required due to some unusual use cases, it is highly recommended for most calls. We do allow a special value of -1 for the reasonid. This reasonid will return open, web-schedulable slots regardless of reason.  However, slots returned using a search of -1 may return slots that are not bookable by any reason ID (they may be bookable by specific appointment type IDs instead).  This argument allows multiple valid reason IDs to be specified (e.g. reasonid=1,2,3), so if you are looking for slots that match "any" reason, it is recommended that you enumerate the set of reasons you are looking for.  Either a reasonid or an appointmenttypeid must be specified or no results will be returned. If a reasonid other than -1 is specified then a providerid must also be specified.
   */
  reasonid?: Array<string>;
  /**
   * Start of the appointment search date range (mm/dd/yyyy).  Inclusive.  Defaults to today.
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
 * Provides the ability to add new open appointment slots
 *
 * Endpoint: /v1/{practiceid}/appointments/open
 */
export interface CreateAppointmentSlotParams {
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Create a single appointment for specific patient
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}
 */
export interface BookAppointmentParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieve the list of appointment reasons configured for the Practice which will allow the patient to select a reason for their appointment.
 *
 * Endpoint: /v1/{practiceid}/patientappointmentreasons
 */
export interface AllPatientAppointmentReasonsParams {
  /**
   * The athenaNet department ID.
   */
  departmentid: number;
  /**
   * The athenaNet provider ID.
   */
  providerid: number;
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
 * Retrieves a list of booked appointments Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/appointments/booked
 */
export interface BookedAppointmentsParams {
  /**
   * Filter by appointment type ID.
   */
  appointmenttypeid?: number;
  /**
   * Filter appointments by status.
   */
  appointmentstatus?: string;
  /**
   * The athenaNet department ID.
   */
  departmentid?: number;
  /**
   * The athenaNet provider ID.  Multiple IDs (either as a comma delimited list or multiple POSTed values) are allowed.
   */
  providerid?: Array<string>;
  /**
   * When showing patient detail for appointments, the patient information for patients with record restrictions and blocked patients will not be shown.  Setting this flag to true will show that information for those patients. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: boolean;
  /**
   * Include patient information for each patient associated with an appointment.
   */
  showpatientdetail?: boolean;
  /**
   * A comma separated list of confidentiality codes to filter patients by. If not set defaults to include all confidentiality codes. Supported codes: 'N' and 'R'. Only functions if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  confidentialitycode?: Array<string>;
  /**
   * The athenaNet patient ID.  If operating in a Provider Group Enterprise practice, this should be the enterprise patient ID.
   */
  patientid?: number;
  /**
   * Identify appointments modified after this date/time (mm/dd/yyyy hh:mi:ss).  Inclusive.
   */
  startlastmodified?: string;
  /**
   * Include patient insurance information. Shows insurance packages for the appointment if any are selected, and all patient packages otherwise.
   */
  showinsurance?: boolean;
  /**
   * Start of the appointment scheduled search date range (mm/dd/yyyy).  Inclusive.
   */
  scheduledstartdate?: string;
  /**
   * Include all remindercall related results, if available, associated with an appointment.
   */
  showremindercalldetail?: boolean;
  /**
   * Identify appointments modified prior to this date/time (mm/dd/yyyy hh:mi:ss).  Inclusive. Note: This can only be used if a startlastmodified value is supplied as well.
   */
  endlastmodified?: string;
  /**
   * End of the appointment search date range (mm/dd/yyyy).  Inclusive.
   */
  enddate: string;
  /**
   * Show the expetcted procedurecodes.
   */
  showexpectedprocedurecodes?: boolean;
  /**
   * Include claim information, if available, associated with an appointment.
   */
  showclaimdetail?: boolean;
  /**
   * By default, the expected co-pay is returned. For performance purposes, you can set this to false and copay will not be populated.
   */
  showcopay?: boolean;
  /**
   * End of the appointment scheduled search date range (mm/dd/yyyy).  Inclusive.
   */
  scheduledenddate?: string;
  /**
   * Include appointments that have been cancelled.
   */
  showcancelled?: boolean;
  /**
   * Start of the appointment search date range (mm/dd/yyyy).  Inclusive.
   */
  startdate: string;
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
 * Retrieves a list of booked appointments across multiple providers and departments Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/appointments/booked/multipledepartment
 */
export interface MultipledepartmentBookedAppointmentsParams {
  /**
   * Filter by appointment type ID.
   */
  appointmenttypeid?: number;
  /**
   * Filter appointments by status.
   */
  appointmentstatus?: string;
  /**
   * The athenaNet department ID. Multiple IDs (either as a comma delimited list or multiple POSTed values) are allowed.
   */
  departmentid?: Array<string>;
  /**
   * The athenaNet provider ID.  Multiple IDs (either as a comma delimited list or multiple POSTed values) are allowed.
   */
  providerid?: Array<string>;
  /**
   * When showing patient detail for appointments, the patient information for patients with record restrictions and blocked patients will not be shown.  Setting this flag to true will show that information for those patients. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: boolean;
  /**
   * Include patient information for each patient associated with an appointment.
   */
  showpatientdetail?: boolean;
  /**
   * A comma separated list of confidentiality codes to filter patients by. If not set defaults to include all confidentiality codes. Supported codes: 'N' and 'R'. Only functions if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  confidentialitycode?: Array<string>;
  /**
   * The athenaNet patient ID.  If operating in a Provider Group Enterprise practice, this should be the enterprise patient ID.
   */
  patientid?: number;
  /**
   * Identify appointments modified after this date/time (mm/dd/yyyy hh:mi:ss).  Inclusive.
   */
  startlastmodified?: string;
  /**
   * Include patient insurance information. Shows insurance packages for the appointment if any are selected, and all patient packages otherwise.
   */
  showinsurance?: boolean;
  /**
   * Start of the appointment scheduled search date range (mm/dd/yyyy).  Inclusive.
   */
  scheduledstartdate?: string;
  /**
   * Include all remindercall related results, if available, associated with an appointment.
   */
  showremindercalldetail?: boolean;
  /**
   * Identify appointments modified prior to this date/time (mm/dd/yyyy hh:mi:ss).  Inclusive. Note: This can only be used if a startlastmodified value is supplied as well.
   */
  endlastmodified?: string;
  /**
   * End of the appointment search date range (mm/dd/yyyy).  Inclusive.
   */
  enddate: string;
  /**
   * Show the expetcted procedurecodes.
   */
  showexpectedprocedurecodes?: boolean;
  /**
   * Include claim information, if available, associated with an appointment.
   */
  showclaimdetail?: boolean;
  /**
   * By default, the expected co-pay is returned. For performance purposes, you can set this to false and copay will not be populated.
   */
  showcopay?: boolean;
  /**
   * End of the appointment scheduled search date range (mm/dd/yyyy).  Inclusive.
   */
  scheduledenddate?: string;
  /**
   * Include appointments that have been cancelled.
   */
  showcancelled?: boolean;
  /**
   * Start of the appointment search date range (mm/dd/yyyy).  Inclusive.
   */
  startdate: string;
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
 * Allows the user to cancel a scheduled appointment
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/cancel
 */
export interface CancelAppointmentParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves note details for a specific appointment
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/notes
 */
export interface AppointmentNotesParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * By default, we prevent deleted appointment notes from being returned via the API.   This flag allows you to show deleted notes in the set of results returned.
   */
  showdeleted?: boolean;
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
 * Creates a note for a specific appointment
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/notes
 */
export interface CreateAppointmentNoteParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Notifies that the appointment check-in process has started
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/startcheckin
 */
export interface StartCheckInParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Cancel appointment check-in process. It cannot be called if the check-in process has been completed.
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/cancelcheckin
 */
export interface CancelCheckInParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 *  Check in this appointment.
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/checkin
 */
export interface CheckInParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Reschedules an existing appointment  to a new timeslot provided by the patient
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/reschedule
 */
export interface RescheduleAppointmentParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Retrieves the details of a specific appointment. Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}
 */
export interface FindAppointmentParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Show expected procedure codes
   */
  showexpectedprocedurecodes?: boolean;
  /**
   * Include claim information, if available, associated with the appointment.
   */
  showclaimdetail?: boolean;
  /**
   * Include patient insurance information.
   */
  showinsurance?: boolean;
  /**
   * When showing patient detail for appointments, the patient information for patients with record restrictions and blocked patients will not be shown.  Setting this flag to true will show that information for those patients. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  ignorerestrictions?: boolean;
  /**
   * By default, the expected co-pay is returned. For performance purposes, you can set this to false and copay will not be populated.
   */
  showcopay?: boolean;
  /**
   * Include patient information for each patient associated with an appointment.
   */
  showpatientdetail?: boolean;
  /**
   * A comma separated list of confidentiality codes to filter patients by. If not set defaults to include all confidentiality codes. Supported codes: 'N' and 'R'. Only functions if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
   */
  confidentialitycode?: Array<string>;
  /**
   * Show indicator for if this is a native athenatelehealth appointment
   */
  showtelehealth?: boolean;
}

/**
 * Retrieves a list appointment reminders for a specific department
 *
 * Endpoint: /v1/{practiceid}/appointments/appointmentreminders
 */
export interface AppointmentRemindersParams {
  /**
   * An athenaNet appointment type ID.
   */
  appointmenttypeid?: number;
  /**
   * An athenaNet department ID.
   */
  departmentid: number;
  /**
   * An athenaNet provider ID.
   */
  providerid?: number;
  /**
   * An athenaNet patient ID.
   */
  patientid?: number;
  /**
   * Find reminders for appointments whose approximate date is on or before this date.
   */
  enddate: string;
  /**
   * By default, we do not return reminders that have been deleted. Setting this to true will show all reminders regardless of status.
   */
  showdeleted?: boolean;
  /**
   * Find reminders for appointments whose approximate date is on or after this date.
   */
  startdate: string;
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
 * Retrieves a list appointment reminders for a specific department
 *
 * Endpoint: /v1/{practiceid}/appointments/appointmentreminders/{appointmentreminderid}
 */
export interface FindAppointmentReminderParams {
  /**
   * appointmentreminderid
   */
  appointmentreminderid: number;
}

/**
 * Creates an appointment reminder to indicate to the practice when a patient should be scheduled for a future appointment.
 *
 * Endpoint: /v1/{practiceid}/appointments/appointmentreminders
 */
export interface CreateAppointmentReminderParams {
  /**
   * Content type of the payload
   */
  ContentType: string;
}

/**
 * Results for deleting an appointment reminder for this practice.
 *
 * Endpoint: /v1/{practiceid}/appointments/appointmentreminders/{appointmentreminderid}
 */
export interface DeleteAppointmentReminderParams {
  /**
   * appointmentreminderid
   */
  appointmentreminderid: number;
}

/**
 * Retrieves all insurances of the patient for a specific appointment Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 *
 * Endpoint: /v1/{practiceid}/appointments/{appointmentid}/insurances
 */
export interface AppointmentInsurancesParams {
  /**
   * appointmentid
   */
  appointmentid: number;
  /**
   * Set to true to allow ability to show the insurance information of appointments of patients with record restrictions and/or blocked status. No effect if the CLTH_DP_NEW_BTG_MDP_RESTRICTIONS toggle is enabled.
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
 * Modify the wait list request details for a specific appointment
 *
 * Endpoint: /v1/{practiceid}/appointments/waitlist
 */
export interface CreateAppointmentWaitlistParams {
  /**
   * Content type of the payload
   */
  ContentType: string;
}
