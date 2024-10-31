/**
 * Retrieves information of a specific encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}
 */
export type FindEncounterParams = {
    /**
     * encounterid
     */
    encounterid: number;
}

/**
 * Retrieves a list of orders based on the diagnosis for a specific encounter Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/orders
 */
export type EncounterOrdersParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * If set, this will return diagnoses with empty orders lists.
     */
    showdiagnoseswithoutorders?: boolean;
    /**
     * If set, this will allow getting orders for a discharge encounter type.
     */
    allowdischargetype?: boolean;
    /**
     * If set, this will show the information about the provider receiving the order.
     */
    showclinicalprovider?: boolean;
    /**
     * If set, include orders that were declined
     */
    showdeclinedorders?: boolean;
    /**
     * If set, translate the order information to relevant external vocabularies, where available. Examples are medictions to RxNorm and NDC, vaccines to CVX and MVX, labs to LOINC, etc. Our mappings are not exhaustive.
     */
    showexternalcodes?: boolean;
}

/**
 * Some data regarding this order, including the list of documents attached to the order. Useful for finding attached letters, prescription renewal chains, and lab/imaging results. Note: This endpoint may rely on specific settings to be enabled in athenaNet Production to function properly that are not required in other environments. Please see <a href="/api/resources/best-practices-and-troubleshooting#Handling_Beta_APIs">Permissioned Rollout of APIs</a> for more information if you are experiencing issues.
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/orders/{orderid}
 */
export type EncounterOrderParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * orderid
     */
    orderid: number;
    /**
     * Some order types like labs and imaging orders have additional pertinant information in a question/answer format. Setting this will return that data.
     */
    showquestions?: boolean;
    /**
     * When set, returns Prior Authorization and insurances for some order types, separately and in a structured version than those returned in showquestions.
     */
    showstructuredauthorizationdetails?: boolean;
    /**
     * If set, translate the order information to relevant external vocabularies, where available. Examples are medictions to RxNorm and NDC, vaccines to CVX and MVX, labs to LOINC, etc. Our mappings are not exhaustive.
     */
    showexternalcodes?: boolean;
}

/**
 * Retrieves information about an appointment specific encounter along with diagnoses data.
 * 
 * Endpoint: /v1/{practiceid}/chart/encounters/{encounterid}/summary
 */
export type EncounterSummaryParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * Flag to skip encounter amendments
     */
    skipamendments?: boolean;
    /**
     * Flag to skip many details to make the html smaller
     */
    mobile?: boolean;
}

/**
 * Creates a new lab order record for a specific encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/orders/lab
 */
export type CreateEncounterOrderLabParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * Content type of the payload
     */
    ContentType: string;
}

/**
 * Creates an ordergroup for a specific patient chart outside an encounter flow
 * 
 * Endpoint: /v1/{practiceid}/chart/{patientid}/ordergroups
 */
export type CreateOrderGroupParams = {
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
 * Create a new record of diagnoses for the specific encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/diagnoses
 */
export type CreateEncounterDiagnosesParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * Content type of the payload
     */
    ContentType: string;
}

/**
 * Retrieve a list of enabled questionnaire screeners for the encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/questionnairescreeners
 */
export type EncounterScreeningQuestionnairesParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * If true, include the FreetextAnswer field with each question.
     */
    showfreetextanswers?: boolean;
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
 * Creates a new questionnaire screener record for the encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/questionnairescreeners
 */
export type ActivateScreeningQuestionnaireParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * Content type of the payload
     */
    ContentType: string;
}

/**
 * Modifies only the score of the questionnaire screener for the encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/questionnairescreeners/scoreonly
 */
export type UpdateScreeningQuestionnaireScoreOnlyParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * Content type of the payload
     */
    ContentType: string;
}

/**
 * Modifies the questionnaire screeners for the encounter
 * 
 * Endpoint: /v1/{practiceid}/chart/encounter/{encounterid}/questionnairescreeners
 */
export type UpdateScreeningQuestionnaireParams = {
    /**
     * encounterid
     */
    encounterid: number;
    /**
     * Content type of the payload
     */
    ContentType: string;
}

