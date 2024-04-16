export default async function LogoutFunction({uuid, isParent}) {
  const result = await fetch('https://capstone-petfinity.com/user/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
    body: JSON.stringify({
      uuid: uuid,
      isParent: isParent,
    }),
  });

  const res = await result.json();
  console.log(res);

  return res;
}
