export interface FindEncounterResponse {
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
    status: string;
  }[];
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
      status: string;
    }[];
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
  }[];
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
      status: string;
    }[];
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
        status: string;
      }[];
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
    }[];
    /**
     * Username of provider who reviewed and signed the encounter.
     */
    reviewedandsignedby: string;
    /**
     * Date and time of when encounter was reviewed and signed off.
     */
    reviewedandsigneddate: string;
  }[];
}
export interface EncounterOrdersResponse {
  /**
   * The name of the diagnosis
   */
  diagnosis: string;
  /**
   * The matching ICD9 or ICD10 codes for this diagnosis, where available.
   */
  diagnosisicd: {
    /**
     * The name of the diagnosis
     */
    diagnosis: string;
  }[];
  /**
   * The SNOMED code for this diagnosis. 0 means No Diagnosis.
   */
  diagnosissnomed: number;
  /**
   * List of orders for this diagnosis.
   */
  orders: {
    /**
     * The name of the diagnosis
     */
    diagnosis: string;
    /**
     * The matching ICD9 or ICD10 codes for this diagnosis, where available.
     */
    diagnosisicd: {
      /**
       * The name of the diagnosis
       */
      diagnosis: string;
    }[];
    /**
     * The SNOMED code for this diagnosis. 0 means No Diagnosis.
     */
    diagnosissnomed: number;
  }[];
}
export interface EncounterOrderResponse {
  /**
   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
   */
  class: string;
  /**
   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
   */
  status: string;
  /**
   * The order (aka document) ID for this order.
   */
  orderid: number;
  /**
   * Priority of an order. 1 is high; 2 is normal.
   */
  priority: number;
  /**
   * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
   */
  documents: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
  }[];
  /**
   * The type of this order (Lab, Vaccine, etc.)
   */
  ordertype: string;
  /**
   * The custom list of questions and answers associated with this order. This list will vary by practice.
   */
  questions: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
  }[];
  /**
   * Insurances used in prior authorization of the oder.
   */
  insurances: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
  }[];
  /**
   * ID of the Provider
   */
  providerid: number;
  /**
   * Set of attachments on an order.
   */
  attachments: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
    /**
     * Insurances used in prior authorization of the oder.
     */
    insurances: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
    }[];
    /**
     * ID of the Provider
     */
    providerid: number;
  }[];
  /**
   * The username of the person who created the order.
   */
  createduser: string;
  /**
   * The timestamp when the order was created.
   */
  dateordered: string;
  /**
   * A human readable description for this order
   */
  description: string;
  /**
   * The athena ID for this type of order. Can be used to create another order of this type.
   */
  ordertypeid: number;
  /**
   * Department ID of the Provider
   */
  departmentid: number;
  /**
   * Date of service for this order.
   */
  dateofservice: string;
  /**
   * List of Diagnosis related to this order.
   */
  diagnosislist: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
    /**
     * Insurances used in prior authorization of the oder.
     */
    insurances: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
    }[];
    /**
     * ID of the Provider
     */
    providerid: number;
    /**
     * Set of attachments on an order.
     */
    attachments: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
    }[];
    /**
     * The username of the person who created the order.
     */
    createduser: string;
    /**
     * The timestamp when the order was created.
     */
    dateordered: string;
    /**
     * A human readable description for this order
     */
    description: string;
    /**
     * The athena ID for this type of order. Can be used to create another order of this type.
     */
    ordertypeid: number;
    /**
     * Department ID of the Provider
     */
    departmentid: number;
    /**
     * Date of service for this order.
     */
    dateofservice: string;
  }[];
  /**
   * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
   */
  externalcodes: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
    /**
     * Insurances used in prior authorization of the oder.
     */
    insurances: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
    }[];
    /**
     * ID of the Provider
     */
    providerid: number;
    /**
     * Set of attachments on an order.
     */
    attachments: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
    }[];
    /**
     * The username of the person who created the order.
     */
    createduser: string;
    /**
     * The timestamp when the order was created.
     */
    dateordered: string;
    /**
     * A human readable description for this order
     */
    description: string;
    /**
     * The athena ID for this type of order. Can be used to create another order of this type.
     */
    ordertypeid: number;
    /**
     * Department ID of the Provider
     */
    departmentid: number;
    /**
     * Date of service for this order.
     */
    dateofservice: string;
    /**
     * List of Diagnosis related to this order.
     */
    diagnosislist: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
    }[];
  }[];
  /**
   * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
   */
  declinedreason: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
    /**
     * Insurances used in prior authorization of the oder.
     */
    insurances: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
    }[];
    /**
     * ID of the Provider
     */
    providerid: number;
    /**
     * Set of attachments on an order.
     */
    attachments: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
    }[];
    /**
     * The username of the person who created the order.
     */
    createduser: string;
    /**
     * The timestamp when the order was created.
     */
    dateordered: string;
    /**
     * A human readable description for this order
     */
    description: string;
    /**
     * The athena ID for this type of order. Can be used to create another order of this type.
     */
    ordertypeid: number;
    /**
     * Department ID of the Provider
     */
    departmentid: number;
    /**
     * Date of service for this order.
     */
    dateofservice: string;
    /**
     * List of Diagnosis related to this order.
     */
    diagnosislist: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
    }[];
    /**
     * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
     */
    externalcodes: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
      /**
       * List of Diagnosis related to this order.
       */
      diagnosislist: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
      }[];
    }[];
  }[];
  /**
   * CMS Place of Service name.
   */
  placeofservice: string;
  /**
   * CPT codes associated with this order.
   */
  procedurecodes: string;
  /**
   * The number of requested visits.
   */
  requestedvisits: number;
  /**
   * The human-readable description of this document class, including sub class (prescription - new vs. prescription - renewal).
   */
  classdescription: string;
  /**
   * The name of the facility, person, or group that the order is being sent to.
   */
  clinicalprovider: string;
  /**
   * The username of the ordering provider, which is different than the ordering user -- who may be an intake nurse for example.
   */
  orderingprovider: string;
  /**
   * CMS Place of Service code.
   */
  placeofserviceid: string;
  /**
   * If true, this order is here just as a record, and does not need to actually go out.
   */
  documentationonly: boolean;
  /**
   * Facility specific coding for the type of order
   */
  facilityordercode: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
    /**
     * Insurances used in prior authorization of the oder.
     */
    insurances: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
    }[];
    /**
     * ID of the Provider
     */
    providerid: number;
    /**
     * Set of attachments on an order.
     */
    attachments: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
    }[];
    /**
     * The username of the person who created the order.
     */
    createduser: string;
    /**
     * The timestamp when the order was created.
     */
    dateordered: string;
    /**
     * A human readable description for this order
     */
    description: string;
    /**
     * The athena ID for this type of order. Can be used to create another order of this type.
     */
    ordertypeid: number;
    /**
     * Department ID of the Provider
     */
    departmentid: number;
    /**
     * Date of service for this order.
     */
    dateofservice: string;
    /**
     * List of Diagnosis related to this order.
     */
    diagnosislist: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
    }[];
    /**
     * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
     */
    externalcodes: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
      /**
       * List of Diagnosis related to this order.
       */
      diagnosislist: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
      }[];
    }[];
    /**
     * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
     */
    declinedreason: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
      /**
       * List of Diagnosis related to this order.
       */
      diagnosislist: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
      }[];
      /**
       * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
       */
      externalcodes: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
        /**
         * List of Diagnosis related to this order.
         */
        diagnosislist: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
          /**
           * Set of attachments on an order.
           */
          attachments: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
            /**
             * Insurances used in prior authorization of the oder.
             */
            insurances: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
            }[];
            /**
             * ID of the Provider
             */
            providerid: number;
          }[];
          /**
           * The username of the person who created the order.
           */
          createduser: string;
          /**
           * The timestamp when the order was created.
           */
          dateordered: string;
          /**
           * A human readable description for this order
           */
          description: string;
          /**
           * The athena ID for this type of order. Can be used to create another order of this type.
           */
          ordertypeid: number;
          /**
           * Department ID of the Provider
           */
          departmentid: number;
          /**
           * Date of service for this order.
           */
          dateofservice: string;
        }[];
      }[];
    }[];
    /**
     * CMS Place of Service name.
     */
    placeofservice: string;
    /**
     * CPT codes associated with this order.
     */
    procedurecodes: string;
    /**
     * The number of requested visits.
     */
    requestedvisits: number;
    /**
     * The human-readable description of this document class, including sub class (prescription - new vs. prescription - renewal).
     */
    classdescription: string;
    /**
     * The name of the facility, person, or group that the order is being sent to.
     */
    clinicalprovider: string;
    /**
     * The username of the ordering provider, which is different than the ordering user -- who may be an intake nurse for example.
     */
    orderingprovider: string;
    /**
     * CMS Place of Service code.
     */
    placeofserviceid: string;
    /**
     * If true, this order is here just as a record, and does not need to actually go out.
     */
    documentationonly: boolean;
  };
  /**
   * The ID of the facility (facilityid), person, or group that the order is being sent to.
   */
  clinicalproviderid: number;
  /**
   * The user-facing description of the reason the order was not given.
   */
  declinedreasontext: string;
  /**
   * List of codes indicating why the order was contraindicated (for vaccines only). If this field is not present, the order does not contain a contraindication reason.
   */
  contraindicationreason: {
    /**
     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
     */
    class: string;
    /**
     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
     */
    status: string;
    /**
     * The order (aka document) ID for this order.
     */
    orderid: number;
    /**
     * Priority of an order. 1 is high; 2 is normal.
     */
    priority: number;
    /**
     * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
     */
    documents: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
    }[];
    /**
     * The type of this order (Lab, Vaccine, etc.)
     */
    ordertype: string;
    /**
     * The custom list of questions and answers associated with this order. This list will vary by practice.
     */
    questions: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
    }[];
    /**
     * Insurances used in prior authorization of the oder.
     */
    insurances: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
    }[];
    /**
     * ID of the Provider
     */
    providerid: number;
    /**
     * Set of attachments on an order.
     */
    attachments: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
    }[];
    /**
     * The username of the person who created the order.
     */
    createduser: string;
    /**
     * The timestamp when the order was created.
     */
    dateordered: string;
    /**
     * A human readable description for this order
     */
    description: string;
    /**
     * The athena ID for this type of order. Can be used to create another order of this type.
     */
    ordertypeid: number;
    /**
     * Department ID of the Provider
     */
    departmentid: number;
    /**
     * Date of service for this order.
     */
    dateofservice: string;
    /**
     * List of Diagnosis related to this order.
     */
    diagnosislist: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
    }[];
    /**
     * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
     */
    externalcodes: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
      /**
       * List of Diagnosis related to this order.
       */
      diagnosislist: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
      }[];
    }[];
    /**
     * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
     */
    declinedreason: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
      /**
       * List of Diagnosis related to this order.
       */
      diagnosislist: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
      }[];
      /**
       * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
       */
      externalcodes: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
        /**
         * List of Diagnosis related to this order.
         */
        diagnosislist: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
          /**
           * Set of attachments on an order.
           */
          attachments: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
            /**
             * Insurances used in prior authorization of the oder.
             */
            insurances: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
            }[];
            /**
             * ID of the Provider
             */
            providerid: number;
          }[];
          /**
           * The username of the person who created the order.
           */
          createduser: string;
          /**
           * The timestamp when the order was created.
           */
          dateordered: string;
          /**
           * A human readable description for this order
           */
          description: string;
          /**
           * The athena ID for this type of order. Can be used to create another order of this type.
           */
          ordertypeid: number;
          /**
           * Department ID of the Provider
           */
          departmentid: number;
          /**
           * Date of service for this order.
           */
          dateofservice: string;
        }[];
      }[];
    }[];
    /**
     * CMS Place of Service name.
     */
    placeofservice: string;
    /**
     * CPT codes associated with this order.
     */
    procedurecodes: string;
    /**
     * The number of requested visits.
     */
    requestedvisits: number;
    /**
     * The human-readable description of this document class, including sub class (prescription - new vs. prescription - renewal).
     */
    classdescription: string;
    /**
     * The name of the facility, person, or group that the order is being sent to.
     */
    clinicalprovider: string;
    /**
     * The username of the ordering provider, which is different than the ordering user -- who may be an intake nurse for example.
     */
    orderingprovider: string;
    /**
     * CMS Place of Service code.
     */
    placeofserviceid: string;
    /**
     * If true, this order is here just as a record, and does not need to actually go out.
     */
    documentationonly: boolean;
    /**
     * Facility specific coding for the type of order
     */
    facilityordercode: {
      /**
       * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
       */
      class: string;
      /**
       * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
       */
      status: string;
      /**
       * The order (aka document) ID for this order.
       */
      orderid: number;
      /**
       * Priority of an order. 1 is high; 2 is normal.
       */
      priority: number;
      /**
       * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
       */
      documents: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
      }[];
      /**
       * The type of this order (Lab, Vaccine, etc.)
       */
      ordertype: string;
      /**
       * The custom list of questions and answers associated with this order. This list will vary by practice.
       */
      questions: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
      }[];
      /**
       * Insurances used in prior authorization of the oder.
       */
      insurances: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
      }[];
      /**
       * ID of the Provider
       */
      providerid: number;
      /**
       * Set of attachments on an order.
       */
      attachments: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
      }[];
      /**
       * The username of the person who created the order.
       */
      createduser: string;
      /**
       * The timestamp when the order was created.
       */
      dateordered: string;
      /**
       * A human readable description for this order
       */
      description: string;
      /**
       * The athena ID for this type of order. Can be used to create another order of this type.
       */
      ordertypeid: number;
      /**
       * Department ID of the Provider
       */
      departmentid: number;
      /**
       * Date of service for this order.
       */
      dateofservice: string;
      /**
       * List of Diagnosis related to this order.
       */
      diagnosislist: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
      }[];
      /**
       * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
       */
      externalcodes: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
        /**
         * List of Diagnosis related to this order.
         */
        diagnosislist: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
          /**
           * Set of attachments on an order.
           */
          attachments: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
            /**
             * Insurances used in prior authorization of the oder.
             */
            insurances: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
            }[];
            /**
             * ID of the Provider
             */
            providerid: number;
          }[];
          /**
           * The username of the person who created the order.
           */
          createduser: string;
          /**
           * The timestamp when the order was created.
           */
          dateordered: string;
          /**
           * A human readable description for this order
           */
          description: string;
          /**
           * The athena ID for this type of order. Can be used to create another order of this type.
           */
          ordertypeid: number;
          /**
           * Department ID of the Provider
           */
          departmentid: number;
          /**
           * Date of service for this order.
           */
          dateofservice: string;
        }[];
      }[];
      /**
       * List of codes indicating why the order was not given. If this field is not present, the order was not declined. If the array is empty, no reason has been chosen.
       */
      declinedreason: {
        /**
         * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
         */
        class: string;
        /**
         * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
         */
        status: string;
        /**
         * The order (aka document) ID for this order.
         */
        orderid: number;
        /**
         * Priority of an order. 1 is high; 2 is normal.
         */
        priority: number;
        /**
         * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
         */
        documents: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
        }[];
        /**
         * The type of this order (Lab, Vaccine, etc.)
         */
        ordertype: string;
        /**
         * The custom list of questions and answers associated with this order. This list will vary by practice.
         */
        questions: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
        }[];
        /**
         * Insurances used in prior authorization of the oder.
         */
        insurances: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
        }[];
        /**
         * ID of the Provider
         */
        providerid: number;
        /**
         * Set of attachments on an order.
         */
        attachments: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
        }[];
        /**
         * The username of the person who created the order.
         */
        createduser: string;
        /**
         * The timestamp when the order was created.
         */
        dateordered: string;
        /**
         * A human readable description for this order
         */
        description: string;
        /**
         * The athena ID for this type of order. Can be used to create another order of this type.
         */
        ordertypeid: number;
        /**
         * Department ID of the Provider
         */
        departmentid: number;
        /**
         * Date of service for this order.
         */
        dateofservice: string;
        /**
         * List of Diagnosis related to this order.
         */
        diagnosislist: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
          /**
           * Set of attachments on an order.
           */
          attachments: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
            /**
             * Insurances used in prior authorization of the oder.
             */
            insurances: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
            }[];
            /**
             * ID of the Provider
             */
            providerid: number;
          }[];
          /**
           * The username of the person who created the order.
           */
          createduser: string;
          /**
           * The timestamp when the order was created.
           */
          dateordered: string;
          /**
           * A human readable description for this order
           */
          description: string;
          /**
           * The athena ID for this type of order. Can be used to create another order of this type.
           */
          ordertypeid: number;
          /**
           * Department ID of the Provider
           */
          departmentid: number;
          /**
           * Date of service for this order.
           */
          dateofservice: string;
        }[];
        /**
         * When available, contains how this order maps to external vocabularies like LOINC, CVX, SNOMED, RXNORM, etc.
         */
        externalcodes: {
          /**
           * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
           */
          class: string;
          /**
           * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
           */
          status: string;
          /**
           * The order (aka document) ID for this order.
           */
          orderid: number;
          /**
           * Priority of an order. 1 is high; 2 is normal.
           */
          priority: number;
          /**
           * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
           */
          documents: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
          }[];
          /**
           * The type of this order (Lab, Vaccine, etc.)
           */
          ordertype: string;
          /**
           * The custom list of questions and answers associated with this order. This list will vary by practice.
           */
          questions: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
          }[];
          /**
           * Insurances used in prior authorization of the oder.
           */
          insurances: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
          }[];
          /**
           * ID of the Provider
           */
          providerid: number;
          /**
           * Set of attachments on an order.
           */
          attachments: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
            /**
             * Insurances used in prior authorization of the oder.
             */
            insurances: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
            }[];
            /**
             * ID of the Provider
             */
            providerid: number;
          }[];
          /**
           * The username of the person who created the order.
           */
          createduser: string;
          /**
           * The timestamp when the order was created.
           */
          dateordered: string;
          /**
           * A human readable description for this order
           */
          description: string;
          /**
           * The athena ID for this type of order. Can be used to create another order of this type.
           */
          ordertypeid: number;
          /**
           * Department ID of the Provider
           */
          departmentid: number;
          /**
           * Date of service for this order.
           */
          dateofservice: string;
          /**
           * List of Diagnosis related to this order.
           */
          diagnosislist: {
            /**
             * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
             */
            class: string;
            /**
             * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
             */
            status: string;
            /**
             * The order (aka document) ID for this order.
             */
            orderid: number;
            /**
             * Priority of an order. 1 is high; 2 is normal.
             */
            priority: number;
            /**
             * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
             */
            documents: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
            }[];
            /**
             * The type of this order (Lab, Vaccine, etc.)
             */
            ordertype: string;
            /**
             * The custom list of questions and answers associated with this order. This list will vary by practice.
             */
            questions: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
            }[];
            /**
             * Insurances used in prior authorization of the oder.
             */
            insurances: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
            }[];
            /**
             * ID of the Provider
             */
            providerid: number;
            /**
             * Set of attachments on an order.
             */
            attachments: {
              /**
               * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
               */
              class: string;
              /**
               * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
               */
              status: string;
              /**
               * The order (aka document) ID for this order.
               */
              orderid: number;
              /**
               * Priority of an order. 1 is high; 2 is normal.
               */
              priority: number;
              /**
               * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
               */
              documents: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
              }[];
              /**
               * The type of this order (Lab, Vaccine, etc.)
               */
              ordertype: string;
              /**
               * The custom list of questions and answers associated with this order. This list will vary by practice.
               */
              questions: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
              }[];
              /**
               * Insurances used in prior authorization of the oder.
               */
              insurances: {
                /**
                 * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                 */
                class: string;
                /**
                 * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                 */
                status: string;
                /**
                 * The order (aka document) ID for this order.
                 */
                orderid: number;
                /**
                 * Priority of an order. 1 is high; 2 is normal.
                 */
                priority: number;
                /**
                 * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                 */
                documents: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                }[];
                /**
                 * The type of this order (Lab, Vaccine, etc.)
                 */
                ordertype: string;
                /**
                 * The custom list of questions and answers associated with this order. This list will vary by practice.
                 */
                questions: {
                  /**
                   * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                   */
                  class: string;
                  /**
                   * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                   */
                  status: string;
                  /**
                   * The order (aka document) ID for this order.
                   */
                  orderid: number;
                  /**
                   * Priority of an order. 1 is high; 2 is normal.
                   */
                  priority: number;
                  /**
                   * The list of documents attached to this order. This can be letters, lab or imaging results, prescription renewals, etc.
                   */
                  documents: {
                    /**
                     * The primary class of this order -- PRESCRIPTION, VACCINE, LAB, IMAGING, PATIENTINFO, etc.
                     */
                    class: string;
                    /**
                     * The status the document is in (PEND, CLOSED, SUBMIT, SUBMITTED, etc).
                     */
                    status: string;
                    /**
                     * The order (aka document) ID for this order.
                     */
                    orderid: number;
                    /**
                     * Priority of an order. 1 is high; 2 is normal.
                     */
                    priority: number;
                  }[];
                  /**
                   * The type of this order (Lab, Vaccine, etc.)
                   */
                  ordertype: string;
                }[];
              }[];
              /**
               * ID of the Provider
               */
              providerid: number;
            }[];
            /**
             * The username of the person who created the order.
             */
            createduser: string;
            /**
             * The timestamp when the order was created.
             */
            dateordered: string;
            /**
             * A human readable description for this order
             */
            description: string;
            /**
             * The athena ID for this type of order. Can be used to create another order of this type.
             */
            ordertypeid: number;
            /**
             * Department ID of the Provider
             */
            departmentid: number;
            /**
             * Date of service for this order.
             */
            dateofservice: string;
          }[];
        }[];
      }[];
      /**
       * CMS Place of Service name.
       */
      placeofservice: string;
      /**
       * CPT codes associated with this order.
       */
      procedurecodes: string;
      /**
       * The number of requested visits.
       */
      requestedvisits: number;
      /**
       * The human-readable description of this document class, including sub class (prescription - new vs. prescription - renewal).
       */
      classdescription: string;
      /**
       * The name of the facility, person, or group that the order is being sent to.
       */
      clinicalprovider: string;
      /**
       * The username of the ordering provider, which is different than the ordering user -- who may be an intake nurse for example.
       */
      orderingprovider: string;
      /**
       * CMS Place of Service code.
       */
      placeofserviceid: string;
      /**
       * If true, this order is here just as a record, and does not need to actually go out.
       */
      documentationonly: boolean;
    };
    /**
     * The ID of the facility (facilityid), person, or group that the order is being sent to.
     */
    clinicalproviderid: number;
    /**
     * The user-facing description of the reason the order was not given.
     */
    declinedreasontext: string;
  }[];
  /**
   * The location where a clinical specimen if any was collected.
   */
  specimencollectionsite: string;
  /**
   * The Name for the type of order referred to by a clinical provider (A clinical provider here refers to a facility).
   */
  clinicalproviderordertype: string;
  /**
   * The Unique ID for the type of order referred to by a clinical provider (A clinical provider here refers to a facility).
   */
  clinicalproviderordertypeid: number;
}
export interface EncounterSummaryResponse {
  /**
   * The summary HTML wrapped in JSON. Use Accept header of text/html or application/pdf to get a non-JSON encoded version.
   */
  summaryhtml: string;
}
export interface CreateEncounterOrderLabResponse {
  /**
   * Whether the operation was successful.
   */
  success: boolean;
  /**
   * The ID of the document created.
   */
  documentid: number;
  /**
   * If the operation failed, this will contain any error messages.
   */
  errormessage: string;
}
export interface CreateOrderGroupResponse {
  /**
   * The value will be set to true if order group created successfully.
   */
  success: boolean;
  /**
   * Encounter id.
   */
  encounterid: number;
  /**
   * Error message will be set if something goes wrong while creating the order group.
   */
  errormessage: string;
}
export interface CreateEncounterDiagnosesResponse {
  /**
   * The note entered for this diagnosis.
   */
  note: string;
  /**
   * Used to specify the position of this diagnosis in the diagnoses section.
   */
  ranking: number;
  /**
   * True if successful.
   */
  success: boolean;
  /**
   * List of relevant ICD codes for this diagnosis.
   */
  icdcodes: {
    /**
     * The note entered for this diagnosis.
     */
    note: string;
    /**
     * Used to specify the position of this diagnosis in the diagnoses section.
     */
    ranking: number;
    /**
     * True if successful.
     */
    success: boolean;
  }[];
  /**
   * The laterality of the SNOMED Code, if any.
   */
  laterality: string;
  /**
   * SNOMED Code for this diagnosis.
   */
  snomedcode: number;
  /**
   * Brief description for this SNOMED Code.
   */
  description: string;
  /**
   * The Athena ID for the diagnosis created by the POST action.
   */
  diagnosisid: number;
  /**
   * If not successful, will contain error message.
   */
  errormessage: string;
  /**
   * If true, then laterality may chosen for the diagnosis.
   */
  supportslaterality: boolean;
}
export interface EncounterScreeningQuestionnairesResponse {
  /**
   * The created date of this questionnaire
   */
  createddate: string;
  /**
   * Reason the questionnaire is declined
   */
  declinedreason: {
    /**
     * The created date of this questionnaire
     */
    createddate: string;
  };
  /**
   * The document IDs attached to the questionnaire.
   */
  documentids: string;
  /**
   * The guidelines recommended by the questionnaire
   */
  guidelines: string;
  /**
   * The last modified date of this questionnaire
   */
  lastmodifieddate: string;
  /**
   * The maximum amount of points for this questionnaire
   */
  maximumscore: number;
  /**
   * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
   */
  metaquestions: {
    /**
     * The created date of this questionnaire
     */
    createddate: string;
    /**
     * Reason the questionnaire is declined
     */
    declinedreason: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
    };
    /**
     * The document IDs attached to the questionnaire.
     */
    documentids: string;
    /**
     * The guidelines recommended by the questionnaire
     */
    guidelines: string;
    /**
     * The last modified date of this questionnaire
     */
    lastmodifieddate: string;
    /**
     * The maximum amount of points for this questionnaire
     */
    maximumscore: number;
  }[];
  /**
   * The questionnaire name
   */
  name: string;
  /**
   * The note attached to this questionnaire
   */
  note: string;
  /**
   * The questionnaire ID
   */
  questionnaireid: number;
  /**
   * List of question template code data attached to this questionnaire
   */
  questiontemplatecodes: {
    /**
     * The created date of this questionnaire
     */
    createddate: string;
    /**
     * Reason the questionnaire is declined
     */
    declinedreason: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
    };
    /**
     * The document IDs attached to the questionnaire.
     */
    documentids: string;
    /**
     * The guidelines recommended by the questionnaire
     */
    guidelines: string;
    /**
     * The last modified date of this questionnaire
     */
    lastmodifieddate: string;
    /**
     * The maximum amount of points for this questionnaire
     */
    maximumscore: number;
    /**
     * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
     */
    metaquestions: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
    }[];
    /**
     * The questionnaire name
     */
    name: string;
    /**
     * The note attached to this questionnaire
     */
    note: string;
    /**
     * The questionnaire ID
     */
    questionnaireid: number;
  }[];
  /**
   * The score for this questionnaire
   */
  score: string;
  /**
   * The score code attached to this questionnaire
   */
  scorecode: {
    /**
     * The created date of this questionnaire
     */
    createddate: string;
    /**
     * Reason the questionnaire is declined
     */
    declinedreason: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
    };
    /**
     * The document IDs attached to the questionnaire.
     */
    documentids: string;
    /**
     * The guidelines recommended by the questionnaire
     */
    guidelines: string;
    /**
     * The last modified date of this questionnaire
     */
    lastmodifieddate: string;
    /**
     * The maximum amount of points for this questionnaire
     */
    maximumscore: number;
    /**
     * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
     */
    metaquestions: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
    }[];
    /**
     * The questionnaire name
     */
    name: string;
    /**
     * The note attached to this questionnaire
     */
    note: string;
    /**
     * The questionnaire ID
     */
    questionnaireid: number;
    /**
     * List of question template code data attached to this questionnaire
     */
    questiontemplatecodes: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
      /**
       * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
       */
      metaquestions: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
      }[];
      /**
       * The questionnaire name
       */
      name: string;
      /**
       * The note attached to this questionnaire
       */
      note: string;
      /**
       * The questionnaire ID
       */
      questionnaireid: number;
    }[];
    /**
     * The score for this questionnaire
     */
    score: string;
  };
  /**
   * The user that scored this questionnaire
   */
  scoredby: string;
  /**
   * The date this questionnaire was scored
   */
  scoreddate: string;
  /**
   * The status of the questionnaire
   */
  scoringstatus: string;
  /**
   * List of screener codes attached to this questionnaire
   */
  screenercodes: {
    /**
     * The created date of this questionnaire
     */
    createddate: string;
    /**
     * Reason the questionnaire is declined
     */
    declinedreason: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
    };
    /**
     * The document IDs attached to the questionnaire.
     */
    documentids: string;
    /**
     * The guidelines recommended by the questionnaire
     */
    guidelines: string;
    /**
     * The last modified date of this questionnaire
     */
    lastmodifieddate: string;
    /**
     * The maximum amount of points for this questionnaire
     */
    maximumscore: number;
    /**
     * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
     */
    metaquestions: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
    }[];
    /**
     * The questionnaire name
     */
    name: string;
    /**
     * The note attached to this questionnaire
     */
    note: string;
    /**
     * The questionnaire ID
     */
    questionnaireid: number;
    /**
     * List of question template code data attached to this questionnaire
     */
    questiontemplatecodes: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
      /**
       * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
       */
      metaquestions: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
      }[];
      /**
       * The questionnaire name
       */
      name: string;
      /**
       * The note attached to this questionnaire
       */
      note: string;
      /**
       * The questionnaire ID
       */
      questionnaireid: number;
    }[];
    /**
     * The score for this questionnaire
     */
    score: string;
    /**
     * The score code attached to this questionnaire
     */
    scorecode: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
      /**
       * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
       */
      metaquestions: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
      }[];
      /**
       * The questionnaire name
       */
      name: string;
      /**
       * The note attached to this questionnaire
       */
      note: string;
      /**
       * The questionnaire ID
       */
      questionnaireid: number;
      /**
       * List of question template code data attached to this questionnaire
       */
      questiontemplatecodes: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
        /**
         * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
         */
        metaquestions: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
          /**
           * Reason the questionnaire is declined
           */
          declinedreason: {
            /**
             * The created date of this questionnaire
             */
            createddate: string;
          };
          /**
           * The document IDs attached to the questionnaire.
           */
          documentids: string;
          /**
           * The guidelines recommended by the questionnaire
           */
          guidelines: string;
          /**
           * The last modified date of this questionnaire
           */
          lastmodifieddate: string;
          /**
           * The maximum amount of points for this questionnaire
           */
          maximumscore: number;
        }[];
        /**
         * The questionnaire name
         */
        name: string;
        /**
         * The note attached to this questionnaire
         */
        note: string;
        /**
         * The questionnaire ID
         */
        questionnaireid: number;
      }[];
      /**
       * The score for this questionnaire
       */
      score: string;
    };
    /**
     * The user that scored this questionnaire
     */
    scoredby: string;
    /**
     * The date this questionnaire was scored
     */
    scoreddate: string;
    /**
     * The status of the questionnaire
     */
    scoringstatus: string;
  }[];
  /**
   * List of the sections for this questionnaire
   */
  sections: {
    /**
     * The created date of this questionnaire
     */
    createddate: string;
    /**
     * Reason the questionnaire is declined
     */
    declinedreason: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
    };
    /**
     * The document IDs attached to the questionnaire.
     */
    documentids: string;
    /**
     * The guidelines recommended by the questionnaire
     */
    guidelines: string;
    /**
     * The last modified date of this questionnaire
     */
    lastmodifieddate: string;
    /**
     * The maximum amount of points for this questionnaire
     */
    maximumscore: number;
    /**
     * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
     */
    metaquestions: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
    }[];
    /**
     * The questionnaire name
     */
    name: string;
    /**
     * The note attached to this questionnaire
     */
    note: string;
    /**
     * The questionnaire ID
     */
    questionnaireid: number;
    /**
     * List of question template code data attached to this questionnaire
     */
    questiontemplatecodes: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
      /**
       * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
       */
      metaquestions: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
      }[];
      /**
       * The questionnaire name
       */
      name: string;
      /**
       * The note attached to this questionnaire
       */
      note: string;
      /**
       * The questionnaire ID
       */
      questionnaireid: number;
    }[];
    /**
     * The score for this questionnaire
     */
    score: string;
    /**
     * The score code attached to this questionnaire
     */
    scorecode: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
      /**
       * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
       */
      metaquestions: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
      }[];
      /**
       * The questionnaire name
       */
      name: string;
      /**
       * The note attached to this questionnaire
       */
      note: string;
      /**
       * The questionnaire ID
       */
      questionnaireid: number;
      /**
       * List of question template code data attached to this questionnaire
       */
      questiontemplatecodes: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
        /**
         * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
         */
        metaquestions: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
          /**
           * Reason the questionnaire is declined
           */
          declinedreason: {
            /**
             * The created date of this questionnaire
             */
            createddate: string;
          };
          /**
           * The document IDs attached to the questionnaire.
           */
          documentids: string;
          /**
           * The guidelines recommended by the questionnaire
           */
          guidelines: string;
          /**
           * The last modified date of this questionnaire
           */
          lastmodifieddate: string;
          /**
           * The maximum amount of points for this questionnaire
           */
          maximumscore: number;
        }[];
        /**
         * The questionnaire name
         */
        name: string;
        /**
         * The note attached to this questionnaire
         */
        note: string;
        /**
         * The questionnaire ID
         */
        questionnaireid: number;
      }[];
      /**
       * The score for this questionnaire
       */
      score: string;
    };
    /**
     * The user that scored this questionnaire
     */
    scoredby: string;
    /**
     * The date this questionnaire was scored
     */
    scoreddate: string;
    /**
     * The status of the questionnaire
     */
    scoringstatus: string;
    /**
     * List of screener codes attached to this questionnaire
     */
    screenercodes: {
      /**
       * The created date of this questionnaire
       */
      createddate: string;
      /**
       * Reason the questionnaire is declined
       */
      declinedreason: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
      };
      /**
       * The document IDs attached to the questionnaire.
       */
      documentids: string;
      /**
       * The guidelines recommended by the questionnaire
       */
      guidelines: string;
      /**
       * The last modified date of this questionnaire
       */
      lastmodifieddate: string;
      /**
       * The maximum amount of points for this questionnaire
       */
      maximumscore: number;
      /**
       * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
       */
      metaquestions: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
      }[];
      /**
       * The questionnaire name
       */
      name: string;
      /**
       * The note attached to this questionnaire
       */
      note: string;
      /**
       * The questionnaire ID
       */
      questionnaireid: number;
      /**
       * List of question template code data attached to this questionnaire
       */
      questiontemplatecodes: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
        /**
         * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
         */
        metaquestions: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
          /**
           * Reason the questionnaire is declined
           */
          declinedreason: {
            /**
             * The created date of this questionnaire
             */
            createddate: string;
          };
          /**
           * The document IDs attached to the questionnaire.
           */
          documentids: string;
          /**
           * The guidelines recommended by the questionnaire
           */
          guidelines: string;
          /**
           * The last modified date of this questionnaire
           */
          lastmodifieddate: string;
          /**
           * The maximum amount of points for this questionnaire
           */
          maximumscore: number;
        }[];
        /**
         * The questionnaire name
         */
        name: string;
        /**
         * The note attached to this questionnaire
         */
        note: string;
        /**
         * The questionnaire ID
         */
        questionnaireid: number;
      }[];
      /**
       * The score for this questionnaire
       */
      score: string;
      /**
       * The score code attached to this questionnaire
       */
      scorecode: {
        /**
         * The created date of this questionnaire
         */
        createddate: string;
        /**
         * Reason the questionnaire is declined
         */
        declinedreason: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
        };
        /**
         * The document IDs attached to the questionnaire.
         */
        documentids: string;
        /**
         * The guidelines recommended by the questionnaire
         */
        guidelines: string;
        /**
         * The last modified date of this questionnaire
         */
        lastmodifieddate: string;
        /**
         * The maximum amount of points for this questionnaire
         */
        maximumscore: number;
        /**
         * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
         */
        metaquestions: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
          /**
           * Reason the questionnaire is declined
           */
          declinedreason: {
            /**
             * The created date of this questionnaire
             */
            createddate: string;
          };
          /**
           * The document IDs attached to the questionnaire.
           */
          documentids: string;
          /**
           * The guidelines recommended by the questionnaire
           */
          guidelines: string;
          /**
           * The last modified date of this questionnaire
           */
          lastmodifieddate: string;
          /**
           * The maximum amount of points for this questionnaire
           */
          maximumscore: number;
        }[];
        /**
         * The questionnaire name
         */
        name: string;
        /**
         * The note attached to this questionnaire
         */
        note: string;
        /**
         * The questionnaire ID
         */
        questionnaireid: number;
        /**
         * List of question template code data attached to this questionnaire
         */
        questiontemplatecodes: {
          /**
           * The created date of this questionnaire
           */
          createddate: string;
          /**
           * Reason the questionnaire is declined
           */
          declinedreason: {
            /**
             * The created date of this questionnaire
             */
            createddate: string;
          };
          /**
           * The document IDs attached to the questionnaire.
           */
          documentids: string;
          /**
           * The guidelines recommended by the questionnaire
           */
          guidelines: string;
          /**
           * The last modified date of this questionnaire
           */
          lastmodifieddate: string;
          /**
           * The maximum amount of points for this questionnaire
           */
          maximumscore: number;
          /**
           * Any meta questions related to this questionnaire. E.g., should this be considered generally as positive or negative?
           */
          metaquestions: {
            /**
             * The created date of this questionnaire
             */
            createddate: string;
            /**
             * Reason the questionnaire is declined
             */
            declinedreason: {
              /**
               * The created date of this questionnaire
               */
              createddate: string;
            };
            /**
             * The document IDs attached to the questionnaire.
             */
            documentids: string;
            /**
             * The guidelines recommended by the questionnaire
             */
            guidelines: string;
            /**
             * The last modified date of this questionnaire
             */
            lastmodifieddate: string;
            /**
             * The maximum amount of points for this questionnaire
             */
            maximumscore: number;
          }[];
          /**
           * The questionnaire name
           */
          name: string;
          /**
           * The note attached to this questionnaire
           */
          note: string;
          /**
           * The questionnaire ID
           */
          questionnaireid: number;
        }[];
        /**
         * The score for this questionnaire
         */
        score: string;
      };
      /**
       * The user that scored this questionnaire
       */
      scoredby: string;
      /**
       * The date this questionnaire was scored
       */
      scoreddate: string;
      /**
       * The status of the questionnaire
       */
      scoringstatus: string;
    }[];
  }[];
  /**
   * The template ID of the questionnaire. Required to activate a questionnaire for a given encounter.
   */
  templateid: number;
  /**
   * Boolean to flag whether the questionnaire is score only or not.
   */
  templatetype: string;
}
export interface ActivateScreeningQuestionnaireResponse {
  /**
   * Flags this request as successful or not.
   */
  success: boolean;
}
export interface UpdateScreeningQuestionnaireScoreOnlyResponse {
  /**
   * Flags this request as successful or not.
   */
  success: boolean;
}
export interface UpdateScreeningQuestionnaireResponse {
  /**
   * Flags this request as successful or not.
   */
  success: boolean;
}
