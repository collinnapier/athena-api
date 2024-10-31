/**
 * Retrieve a list of all providers available in a specific practice
 * 
 * Endpoint: /v1/{practiceid}/providers
 */
export type AllProvidersParams = {
    /**
     * The provider type to filter the results on. Valid provider type values can be found by using GET /reference/providertypes.
     */
    providertype?: string;
    /**
     * 
     */
    name?: string;
    /**
     * In athenaNet's internal data structures, a single provider can be represented by multiple IDs. These IDs are used in certain external messages (e.g. HL7) and thus these IDs may need to be known by the API user as well.   When set to true, a list of all of these ancillary IDs will be provided.
     */
    showallproviderids?: boolean;
    /**
     * There are situations where determining where a provider "normally" practices is desired. Unfortuantely, there is no such concept in athenaNet since providers often practice in multiple locations. However, we can use some intelligence to determine this by looking back over the previous few months (90 days) to see actual practice. To enable this, set this value between 0 and 1; it is highly recommended to be at least .5. This is the ratio of appointments in a given department to the total number of appointments for that provider. A value of .5 means "the provider's appointments are 50% in the department guessed." Setting this to 1 would only return a department if ALL of the provider's appointments were in one department.
     */
    showusualdepartmentguessthreshold?: number;
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
 * Retrieves information of the specific provider
 * 
 * Endpoint: /v1/{practiceid}/providers/{providerid}
 */
export type FindProviderParams = {
    /**
     * providerid
     */
    providerid: number;
    /**
     * When set to true, deleted providers will be included.
     */
    showdeletedproviders?: boolean;
    /**
     * Include the provider's federal ID number in results.
     */
    showfederalidnumber?: number;
    /**
     * In athenaNet's internal data structures, a single provider can be represented by multiple IDs. These IDs are used in certain external messages (e.g. HL7) and thus these IDs may need to be known by the API user as well.   When set to true, a list of all of these ancillary IDs will be provided.
     */
    showallproviderids?: boolean;
    /**
     * There are situations where determining where a provider "normally" practices is desired. Unfortuantely, there is no such concept in athenaNet since providers often practice in multiple locations. However, we can use some intelligence to determine this by looking back over the previous few months (90 days) to see actual practice. To enable this, set this value between 0 and 1; it is highly recommended to be at least .5. This is the ratio of appointments in a given department to the total number of appointments for that provider. A value of .5 means "the provider's appointments are 50% in the department guessed." Setting this to 1 would only return a department if ALL of the provider's appointments were in one department.
     */
    showusualdepartmentguessthreshold?: number;
}

