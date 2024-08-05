export default async function VetInfoFunction({uuid}) {
  console.log(uuid);
  const result = await fetch(`${process.env.API_URL}/user/info/vet`, {
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
