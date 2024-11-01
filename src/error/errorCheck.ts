import { AthenaError } from "./AthenaError";

export async function errorCheck(response: Response) {
  if (!response.ok) {
    const errorData = await response.json(); // Extract JSON error response if available

    // Extract custom error data if it follows a standard format
    const status = response.status;
    const code = errorData.code || "UNKNOWN_ERROR";
    const message =
      errorData.message || "An error occurred with Athena Health API.";
    const details = errorData.details;

    throw new AthenaError(status, code, message, details);
  }
}
