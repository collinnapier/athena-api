/**
 * Retrieves information for a specific claim
 *
 * Endpoint: /v1/{practiceid}/claims/{claimid}
 */
export interface FindClaimParams {
  /**
   * claimid
   */
  claimid: number;
  /**
   * Include custom fields for the claim.
   */
  showcustomfields?: boolean;
  /**
   * Include service type add-ons for the claim.
   */
  showservicetypeaddons?: boolean;
}
