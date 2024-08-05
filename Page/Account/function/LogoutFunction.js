export default async function LogoutFunction({uuid, isParent}) {
  const result = await fetch(`${process.env.API_URL}/user/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      uuid: uuid,
      isParent: isParent,
    }),
  });

  const res = await result.json();

  return res;
}
