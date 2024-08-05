export default async function LoadOneHospitalFunction({hospitalUuid}) {
  const result = await fetch(`${process.env.API_URL}/info/hospital`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      uuid: hospitalUuid,
    }),
  });

  const res = await result.json();
  console.log('loadOneHospitalFunction: ', res);

  return res;
}
