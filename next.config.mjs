/** @type {import('next').NextConfig} */
const nextConfig = {
  // config env here rather than fetching directly from components, so both client/server can get envs
  // please ensure no sensitive env was configed out here!
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    // node env, usually set automatically by framework, ["development", "production", "test"]
    CUR_NODE_ENV: process.env.NODE_ENV, 
    // vercel env, set automatically by vercel, ["development", "production", "preview"]
    CUR_VERCEL_ENV: process.env.VERCEL_ENV,
    REDIRECT_SEC: process.env.REDIRECT_SEC,
    // resource URLs
    PROD_API_URL: process.env.PROD_API_URL,
    DEV_API_URL: process.env.DEV_API_URL,
    STATIC_LIB_URL: process.env.STATIC_LIB_URL,
    // public key
    REQUEST_BODY_KEY: process.env.REQUEST_BODY_KEY,
  },
};

export default nextConfig;
