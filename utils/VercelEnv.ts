import { safeParseInt } from "./GeneralUtils";

export const PROD = process.env.CUR_VERCEL_ENV == 'production';
export const DEV = process.env.CUR_VERCEL_ENV == 'development';
export const PREVIEW = process.env.CUR_VERCEL_ENV == 'preview';

export const REDIRECT_SEC: number = safeParseInt(process.env.REDIRECT_SEC, 1800)