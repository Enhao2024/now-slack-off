import { CURRENT_ENV, DEV, DEV_API_URL, PREVIEW, PROD, PROD_API_URL } from "./VercelEnv";

export function safeParseInt(str: string | undefined | null, defaultNumber: number = 0): number {
  if (!str) return defaultNumber;
  const num = parseInt(str, 10)
  return isNaN(num) ? defaultNumber : num;
}

export function getBaseUrl() {
  switch (CURRENT_ENV) {
    case PROD:
      return PROD_API_URL;
    case DEV:
      return DEV_API_URL;
    case PREVIEW:
      return '';
    default:
      return '';
  }
}

export function inProduction() {
  return CURRENT_ENV === PROD;
}

export function inDevelopment() {
  return CURRENT_ENV === DEV;
}

export function inPreview() {
  return CURRENT_ENV === PREVIEW;
}