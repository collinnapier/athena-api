/**
 * Retrieves the list of top athenaNet insurance packages used by the practice
 * 
 * Endpoint: /v1/{practiceid}/misc/topinsurancepackages
 */
export type TopInsurancePackagesParams = {
    /**
     * Only look at patients who are associated with this department's provider group in determining which insurance packages to list. Note that insurance packages do not "belong" to a department and thus department ID is not returned in the output. The same insurance packages will (and often do) appear across multiple departments.
     */
    departmentid?: number;
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
 * Retrieves a list of insurance packages used by the practice
 * 
 * Endpoint: /v1/{practiceid}/misc/commoninsurancepackages
 */
export type CommonInsurancePackagesParams = {
    /**
     * If true only show the case policies.
     */
    showonlycasepolicies?: boolean;
    /**
     * The ID of the department to check for common insurances. This is used to determine which provider group that we are working with.
     */
    departmentid: number;
    /**
     * Number of entries to return (default 1500, max 5000)
     */
    limit?: number;
    /**
     * Starting point of entries; 0-indexed
     */
    offset?: number;
}

