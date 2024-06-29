/** @type {import('next').NextConfig} */
const nextConfig = {
  // config env here rather than fetching directly from components, so both client/server can get envs
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    // node env, usually set automatically by framework, ["development", "production", "test"]
    CUR_NODE_ENV: process.env.NODE_ENV, 
    // vercel env, set automatically by vercel, ["development", "production", "preview"]
    CUR_VERCEL_ENV: process.env.VERCEL_ENV,
    REDIRECT_SEC: process.env.REDIRECT_SEC,
  },
};

export default nextConfig;
