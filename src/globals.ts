import { AthenaConfig } from "./types/AthenaConfig";

const ATHENA_API_ORIGIN_PRODUCTION = "https://api.platform.athenahealth.com";
const ATHENA_API_ORIGIN_PREVIEW =
  "https://api.preview.platform.athenahealth.com";

export let athenaConfig: AthenaConfig | undefined;

export function setupAthena(config: {
  mode: "production" | "preview";
  auth: string;
  practiceId: string;
}) {
  athenaConfig = {
    mode: config.mode,
    auth: config.auth,
    practiceId: config.practiceId,
    origin:
      (config.mode == "preview"
        ? ATHENA_API_ORIGIN_PREVIEW
        : ATHENA_API_ORIGIN_PRODUCTION) + `/v1/${config.practiceId}`,
  };
}

export function toUrlParams(obj: Record<string, any>): string {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });
  return params.toString();
}
