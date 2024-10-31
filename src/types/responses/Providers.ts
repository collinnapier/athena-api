export type AllProvidersResponse = {
    /**
     * The NPI for this provider, if available.
     */
  npi: number;
    /**
     * The sex of this provider.
     */
  sex: string;
    /**
     * Indicates if this is a billable provider.
     */
  billable: boolean;
    /**
     * The provider's last name.
     */
  lastname: string;
    /**
     * The provider's first name.
     */
  firstname: string;
    /**
     * A friendly name for this provider's specialty.
     */
  specialty: string;
    /**
     * Either "Person" or "Non-Person" (e.g. X-Ray machines)
     */
  entitytype: string;
    /**
     * The ID to be used for this provider. Note that in athenaNet, an individual provider (as defined by a unique NPI) may have multiple provider IDs.  For the API, we have collapsed these to a single canonical ID.
     */
  providerid: number;
    /**
     * The preferred name to use when displaying this provider.
     */
  displayname: string;
    /**
     * The ID of the provider's specialty.
     */
  specialtyid: number;
    /**
     * This is the ANSI name with ANSI code for this provider's specialty.
     */
  ansinamecode: string;
    /**
     * There is a long potential list of provider type in the form "full name (id)", but "MD", "NP" or "NP S" (Nurse Practitioner (Supervising)), "RES" (resident), "EQUIP", "DO", "PA" or "PASUP" (Physician's Assistant (Supervising)), "TECH", "RN", LPT", "CRNA" or "CRNASUP" (Certified Registered Nurse Anesthesiologist (Supervising)), and MA (Medical Assistant) are among the most common.
     */
  providertype: string;
    /**
     * The direct email address for the provider
     */
  directaddress: string;
    /**
     * If set, this provider does not appear in athenaCommunicator's web portal.
     */
  hideinportalyn: boolean;
    /**
     * For certain purposes, this can be considered to be the "home" or default department for a provider.
     */
  homedepartment: string;
    /**
     * This is just the ID (a text string) such as "NP" or "NP S" for the provider type.
     */
  providertypeid: string;
    /**
     * The scheduling name for this provider (as used in athenaNet).
     */
  schedulingname: string;
    /**
     * The federal ID number for provider, if SHOWFEDERALIDNUMBER is set.
     */
  federalidnumber: string;
    /**
     * The preferred personal pronouns of this provider.
     */
  personalpronouns: string;
    /**
     * The username of the provider.
     */
  providerusername: string;
    /**
     * This is the ANSI code for this provider's specialty.
     */
  ansispecialtycode: string;
    /**
     * When showallproviderids is set to true, a list of all provider groups that this provider is registered in. Data is only relevant if a practice is using Provider-Group-Based Data Permissions in their practice.
     */
  providergrouplist: string;
    /**
     * The "usual" department for this provider, if SHOWUSUALDEPARTMENTGUESSTHRESHOLD is set.
     */
  usualdepartmentid: number;
    /**
     * When showallproviderids is set to true, a list of all other athenaNet providers IDs that may refer to this same provider. If not present with showallproviderids, there are no other IDs other than the primary ID.
     */
  otherprovideridlist: string;
    /**
     * Name of the scheduling resource type tied to the provider.
     */
  scheduleresourcetype: string;
    /**
     * The ID of the supervising provider.
     */
  supervisingproviderid: number;
    /**
     * Indicates whether the provider is accepting new patients. This field is currently only for informational purposes, and does not drive any athenaNet functionality.
     */
  acceptingnewpatientsyn: boolean;
    /**
     * If true, appointments scheduled with this provider will create an encounter when the appointment is checked in for encounter supported appointment types. Only applies to the primary providerid. If the provider has other IDs with the same API, please use 'showallproviderids' to see which IDs create encounters.
     */
  createencounteroncheckinyn: boolean;
    /**
     * The username of the supervising provider.
     */
  supervisingproviderusername: string;
    /**
     * A list of provider IDs for this provider NPI that will create an encounter when the appointment is checked in for encounter supported appointment types. Only populated if 'showallproviderids' is set.
     */
  createencounterprovideridlist: string;
}
export type FindProviderResponse = {
    /**
     * The NPI for this provider, if available.
     */
  npi: number;
    /**
     * The sex of this provider.
     */
  sex: string;
    /**
     * Indicates if this is a billable provider.
     */
  billable: boolean;
    /**
     * The provider's last name.
     */
  lastname: string;
    /**
     * The provider's first name.
     */
  firstname: string;
    /**
     * A friendly name for this provider's specialty.
     */
  specialty: string;
    /**
     * Either "Person" or "Non-Person" (e.g. X-Ray machines)
     */
  entitytype: string;
    /**
     * The ID to be used for this provider. Note that in athenaNet, an individual provider (as defined by a unique NPI) may have multiple provider IDs.  For the API, we have collapsed these to a single canonical ID.
     */
  providerid: number;
    /**
     * The preferred name to use when displaying this provider.
     */
  displayname: string;
    /**
     * The ID of the provider's specialty.
     */
  specialtyid: number;
    /**
     * This is the ANSI name with ANSI code for this provider's specialty.
     */
  ansinamecode: string;
    /**
     * There is a long potential list of provider type in the form "full name (id)", but "MD", "NP" or "NP S" (Nurse Practitioner (Supervising)), "RES" (resident), "EQUIP", "DO", "PA" or "PASUP" (Physician's Assistant (Supervising)), "TECH", "RN", LPT", "CRNA" or "CRNASUP" (Certified Registered Nurse Anesthesiologist (Supervising)), and MA (Medical Assistant) are among the most common.
     */
  providertype: string;
    /**
     * The direct email address for the provider
     */
  directaddress: string;
    /**
     * If set, this provider does not appear in athenaCommunicator's web portal.
     */
  hideinportalyn: boolean;
    /**
     * For certain purposes, this can be considered to be the "home" or default department for a provider.
     */
  homedepartment: string;
    /**
     * This is just the ID (a text string) such as "NP" or "NP S" for the provider type.
     */
  providertypeid: string;
    /**
     * The scheduling name for this provider (as used in athenaNet).
     */
  schedulingname: string;
    /**
     * The federal ID number for provider, if SHOWFEDERALIDNUMBER is set.
     */
  federalidnumber: string;
    /**
     * The preferred personal pronouns of this provider.
     */
  personalpronouns: string;
    /**
     * The username of the provider.
     */
  providerusername: string;
    /**
     * This is the ANSI code for this provider's specialty.
     */
  ansispecialtycode: string;
    /**
     * When showallproviderids is set to true, a list of all provider groups that this provider is registered in. Data is only relevant if a practice is using Provider-Group-Based Data Permissions in their practice.
     */
  providergrouplist: string;
    /**
     * The "usual" department for this provider, if SHOWUSUALDEPARTMENTGUESSTHRESHOLD is set.
     */
  usualdepartmentid: number;
    /**
     * When showallproviderids is set to true, a list of all other athenaNet providers IDs that may refer to this same provider. If not present with showallproviderids, there are no other IDs other than the primary ID.
     */
  otherprovideridlist: string;
    /**
     * Name of the scheduling resource type tied to the provider.
     */
  scheduleresourcetype: string;
    /**
     * The ID of the supervising provider.
     */
  supervisingproviderid: number;
    /**
     * Indicates whether the provider is accepting new patients. This field is currently only for informational purposes, and does not drive any athenaNet functionality.
     */
  acceptingnewpatientsyn: boolean;
    /**
     * If true, appointments scheduled with this provider will create an encounter when the appointment is checked in for encounter supported appointment types. Only applies to the primary providerid. If the provider has other IDs with the same API, please use 'showallproviderids' to see which IDs create encounters.
     */
  createencounteroncheckinyn: boolean;
    /**
     * The username of the supervising provider.
     */
  supervisingproviderusername: string;
    /**
     * A list of provider IDs for this provider NPI that will create an encounter when the appointment is checked in for encounter supported appointment types. Only populated if 'showallproviderids' is set.
     */
  createencounterprovideridlist: string;
}
