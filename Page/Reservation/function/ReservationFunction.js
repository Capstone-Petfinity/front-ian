export default async function ReservationFunction({
  userUuid,
  petUuid,
  hospitalUuid,
  reservationDate,
}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/reservation',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        parentUuid: userUuid,
        petUuid: petUuid,
        hospitalUuid: hospitalUuid,
        reservationDate: reservationDate,
      }),
    },
  );

  const res = await result.json();
  console.log('reservationFunction: ', res);

  return res;
}
