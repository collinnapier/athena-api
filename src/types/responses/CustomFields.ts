export interface AllCustomFieldsResponse {
  /**
   * The name of this custom field.
   */
  name: string;
  /**
   * One of "TEXT", "DATE", "NUMBER", or "REFERRINGPROVIDER".
   */
  type: string;
  /**
   * Maximum length of this field.
   */
  length: string;
  /**
   * The ordering in which this field is displayed.
   */
  ordering: string;
  /**
   * Is this field a select list (and thus should have a "selectlist" as well).
   */
  selectyn: string;
  /**
   * An array of options, each one containing selectid and a selectvalue.
   */
  selectlist: {
    /**
     * The name of this custom field.
     */
    name: string;
    /**
     * One of "TEXT", "DATE", "NUMBER", or "REFERRINGPROVIDER".
     */
    type: string;
    /**
     * Maximum length of this field.
     */
    length: string;
    /**
     * The ordering in which this field is displayed.
     */
    ordering: string;
    /**
     * Is this field a select list (and thus should have a "selectlist" as well).
     */
    selectyn: string;
  }[];
  /**
   * Is this field searchable (e.g. /patients/customfields/{customfieldid}...)
   */
  searchableyn: string;
  /**
   * The custom field ID.
   */
  customfieldid: string;
  /**
   * Is this field case sensitive?
   */
  casesensitiveyn: string;
  /**
   * Can this field be updated?
   */
  disallowupdateyn: string;
}
