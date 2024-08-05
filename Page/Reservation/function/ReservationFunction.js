export default async function ReservationFunction({
  userUuid,
  petUuid,
  hospitalUuid,
  reservationDate,
}) {
  console.log(userUuid, petUuid, hospitalUuid, reservationDate);
  const result = await fetch(`${process.env.API_URL}/user/reservation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      parentUuid: userUuid,
      petUuid: petUuid,
      hospitalUuid: hospitalUuid,
      reservationDate: reservationDate,
    }),
  });

  const res = await result.json();

  return res;
}
