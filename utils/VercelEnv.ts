import { safeParseInt } from "./GeneralUtils";

export const PROD = 'production';
export const DEV = 'development';
export const PREVIEW = 'preview';

export const CURRENT_ENV: string = process.env.CUR_VERCEL_ENV || '';
export const REDIRECT_SEC: number = safeParseInt(process.env.REDIRECT_SEC, 1800);
export const PROD_API_URL: string = process.env.PROD_API_URL || '';
export const DEV_API_URL: string = process.env.DEV_API_URL || '';
export const STATIC_LIB_URL: string = process.env.STATIC_LIB_URL || '';