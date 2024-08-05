export default async function LoadHospitalFunction({uuid}) {
  const result = await fetch(`${process.env.API_URL}/info/hospital/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      uuid: uuid,
    }),
  });

  const res = await result.json();

  return res;
}
