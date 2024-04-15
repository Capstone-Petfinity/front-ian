export default async function addressFuction() {
  const result = await fetch('https://capstone-petfinity.com/address/city', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
  });

  const res = await result.json();

  if (res.statusCode === '200') {
    console.log(res);
    return res.cityList;
  }

  return null;
}
