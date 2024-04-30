export default async function LoadOneHospitalFunction({hospitalUuid}) {
  const result = await fetch('https://capstone-petfinity.com/info/hospital', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
    body: JSON.stringify({
      uuid: hospitalUuid,
    }),
  });

  const res = await result.json();
  console.log('loadOneHospitalFunction: ', res);

  return res;
}
