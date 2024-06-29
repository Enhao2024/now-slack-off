'use client'
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";

const FingerPrint = () => {

  getCurrentBrowserFingerPrint().then((fingerprint) => {

    // todo: commit fingerprint to server

  })

  return null;
}

export default FingerPrint