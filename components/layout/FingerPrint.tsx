'use client'
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import axios from "axios";

const FingerPrint = () => {

  getCurrentBrowserFingerPrint().then((fingerprint) => {
    const data = {
      fingerprint: fingerprint.toString(),
    };
    axios.post('https://d2n05hlrnagjc.cloudfront.net/prod/user/visit', data)
  })

  return null;
}

export default FingerPrint