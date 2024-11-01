export class AthenaError extends Error {
  status: number;
  code: string;
  message: string;
  details?: any;

  constructor(status: number, code: string, message: string, details?: any) {
    super(message);
    this.name = "AthenaError";

    this.status = status;
    this.code = code;
    this.message = message;
    this.details = details;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AthenaError);
    }
  }

  toString(): string {
    return `AthenaError: [${this.status} ${this.code}] - ${this.message}${
      this.details ? ` | Details: ${JSON.stringify(this.details)}` : ""
    }`;
  }
}
