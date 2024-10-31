export type TopInsurancePackagesResponse = {
    /**
     * The zip code associated with this insurance package.
     */
  zip: string;
    /**
     * The city associated with this insurance package.
     */
  city: string;
    /**
     * The name of the insurance package.
     */
  name: string;
    /**
     * The phone number associated with this insurance package.
     */
  phone: string;
    /**
     * The state associated with this insurance package.
     */
  state: string;
    /**
     * The first address line associated with this insurance package, often on the insurance card itself as a place to send claims.
     */
  address: string;
    /**
     * The ranking of how often this package is used by this practice (or department, if a departmentid is specified in the input).
     */
  ranking: string;
    /**
     * The second address line associated with this insurance package.
     */
  address2: string;
    /**
     * The percentage of insurance packages in this practice (or department, if a departmentid is specified in the input) that use this insurance package.
     */
  percentage: string;
    /**
     * The athenaNet-wide insurance package (also know in the industry as an "insurance product") id.
     */
  insurancepackageid: string;
    /**
     * The type of product (e.g. PPO, HMO, etc.)
     */
  insuranceproducttypename: string;
}
export type CommonInsurancePackagesResponse = {
    /**
     * The zip code associated with this insurance package.
     */
  zip: string;
    /**
     * The city associated with this insurance package.
     */
  city: string;
    /**
     * The name of the insurance package.
     */
  name: string;
    /**
     * The phone number associated with this insurance package.
     */
  phone: string;
    /**
     * The state associated with this insurance package.
     */
  state: string;
    /**
     * The first address line associated with this insurance package, often on the insurance card itself as a place to send claims.
     */
  address: string;
    /**
     * The second address line associated with this insurance package.
     */
  address2: string;
    /**
     * The athenaNet-wide insurance package (also know in the industry as an "insurance product") id.
     */
  insurancepackageid: number;
    /**
     * The type of product (e.g. PPO, HMO, etc.)
     */
  insuranceproducttypename: string;
}
