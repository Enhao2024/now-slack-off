'use client'
import { getBaseUrl } from "@/utils/GeneralUtils";
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import axios from "axios";

const FingerPrint = () => {

  getCurrentBrowserFingerPrint().then(async (fingerprint) => {
    const baseUrl = getBaseUrl();
    try {
      await axios.post(`${baseUrl}/user/visit`, { fingerprint: fingerprint.toString() });
    } catch (error) {
      console.log(`Request Failed for ${baseUrl}/user/visit`);
    }
  })

  return null;
}

export default FingerPrint