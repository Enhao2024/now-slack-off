'use client'
import { getBaseUrl } from "@/utils/GeneralUtils";
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import axios from "axios";
import { publicEncrypt } from 'crypto';
import { Buffer } from 'buffer';

interface RequestBody {
  fingerprint: string;
}

const publicKey: string = process.env.REQUEST_BODY_KEY || '';

function encryptWithPublicKey(publicKey: string, data: RequestBody) {
  const buffer = Buffer.from(JSON.stringify(data));
  const uint8Array = new Uint8Array(buffer)
  const encrypted = publicEncrypt(
    publicKey,
    uint8Array
  );
  return encrypted.toString('base64');
}

const FingerPrint = () => {

  getCurrentBrowserFingerPrint().then(async (fingerprint) => {
    const baseUrl = getBaseUrl();
    const requestBody: RequestBody = { fingerprint: fingerprint.toString() };
    const encryptedBody = encryptWithPublicKey(publicKey, requestBody);
    try {
      await axios.post(`${baseUrl}/user/visit`, {
        body: encryptedBody
      });
    } catch (error) {
      console.log(`Request Failed for ${baseUrl}/user/visit`);
    }
  })

  return null;
}

export default FingerPrint