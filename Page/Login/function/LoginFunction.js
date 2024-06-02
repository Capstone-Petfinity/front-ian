import CryptoJS from 'react-native-crypto-js';

export default async function LoginFunction({userId, password}) {
  const bodyData = JSON.stringify({
    id: userId,
    pw: password,
  });

  const secretKey = 'abcdefghabcdefghabcdefghabcdefgh'; // 32 bytes key
  const initVector = '0123456789abcdef'; // 16 bytes IV

  // Convert the plain text, key, and IV to WordArrays
  const encodedText = CryptoJS.enc.Utf8.parse(bodyData);
  const encodedKey = CryptoJS.enc.Utf8.parse(secretKey);
  const encodedIV = CryptoJS.enc.Utf8.parse(initVector);

  // Create the options object for encryption
  const options = {
    iv: encodedIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  };

  // Encrypt the data using AES encryption with PKCS7Padding and an IV
  const encryptedData = CryptoJS.AES.encrypt(
    encodedText,
    encodedKey,
    options,
  ).toString(); // Convert CipherParams object to a base64 string

  const result = await fetch('https://capstone-petfinity.com/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
    body: encryptedData,
  });

  const res = await result.json();
  console.log(res);

  return res;
}
