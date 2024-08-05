export default async function ReservationInfoFunction({uuid}) {
  const result = await fetch(`${process.env.API_URL}/info/reservation`, {
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
