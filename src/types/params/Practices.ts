/**
 * Retrieves the practice information
 * 
 * Endpoint: /v1/{practiceid}/practiceinfo
 */
export type FindPracticeParams = {
    /**
     * Number of entries to return (default 1500, max 5000)
     */
    limit?: number;
    /**
     * Starting point of entries; 0-indexed
     */
    offset?: number;
}

