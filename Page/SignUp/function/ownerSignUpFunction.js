import CryptoJS from 'react-native-crypto-js';

export default async function ownerSignUpFunction({
  userId,
  password,
  name,
  phone,
  city,
}) {
  const bodyData = JSON.stringify({
    id: userId,
    pw: password,
    name: name,
    phone_number: phone,
    city: city,
  });

  const secretKey = process.env.SECRET_KEY; // 32 bytes key
  const initVector = process.env.INIT_VECTOR; // 16 bytes IV

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

  const result = await fetch(`${process.env.API_URL}/user/signup/parent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      auth: process.env.AUTH_KEY,
    },
    body: encryptedData,
  });

  const res = await result.json();

  return res;
}
