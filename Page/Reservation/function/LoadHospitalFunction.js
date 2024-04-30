export default async function LoadHospitalFunction({uuid}) {
  const result = await fetch(
    'https://capstone-petfinity.com/info/hospital/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        uuid: uuid,
      }),
    },
  );

  const res = await result.json();
  console.log('loadHospitalFunction: ', res);

  return res;
}
