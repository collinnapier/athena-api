/**
 * Retrieves detailed information of the departments associated to a practice
 *
 * Endpoint: /v1/{practiceid}/departments
 */
export interface AllDepartmentsParams {
  /**
   * If set to true, list providers who see patients in this department. Note that only providers that have booked appointments in the department will be listed. Default is false.
   */
  providerlist?: boolean;
  /**
   * If set to true, return hospital only departments.
   */
  hospitalonly?: boolean;
  /**
   * By default, departments hidden in the portal do not appear. When this is set to true, that restriction is not applied. Default is false.
   */
  showalldepartments?: boolean;
  /**
   * If set to true, list providers who are configured to be able to see patients in this department. This list is most accurate when the department-providers configuration is actively maintained. This list is dependent on valid configuration. Warning: the configured list may be very large. Default is false.
   */
  fullproviderlist?: boolean;
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
 * Retrieves detailed information of a specific department
 *
 * Endpoint: /v1/{practiceid}/departments/{departmentid}
 */
export interface FindDepartmentParams {
  /**
   * departmentid
   */
  departmentid: number;
  /**
   * If set to true, list providers who see patients in this department. Default is false.
   */
  providerlist?: boolean;
  /**
   * By default, departments hidden in the portal do not appear. When this is set to true, that restriction is not applied. Default is false.
   */
  showalldepartments?: boolean;
}
