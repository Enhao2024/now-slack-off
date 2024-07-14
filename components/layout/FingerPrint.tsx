'use client'
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import axios from "axios";

const FingerPrint = () => {

  getCurrentBrowserFingerPrint().then(async (fingerprint) => {
    await axios.post('/api/visit', { fingerprint });
  })

  return null;
}

export default FingerPrint