export default async function LoginFunction({userId, password}) {
  console.log('userId: %o, password: %o', userId, password);
  const result = await fetch('https://capstone-petfinity.com/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
    body: JSON.stringify({
      id: userId,
      pw: password,
    }),
  });

  const res = await result.json();
  console.log(res);

  return res;
}
