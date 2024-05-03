export default async function ReservationInfoFunction({uuid}) {
  const result = await fetch(
    'https://capstone-petfinity.com/info/reservation',
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
  console.log('ReservationInfoFunction:', res);

  return res;
}
