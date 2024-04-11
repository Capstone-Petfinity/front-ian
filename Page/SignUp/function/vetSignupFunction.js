export default async function vetSignUpFunctoin({userId, password, name}) {
  const result = await fetch('https://capstone-petfinity.com/user/signup/vet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
    body: JSON.stringify({
      id: userId,
      pw: password,
      name: name,
    }),
  });

  const res = await result.json();
  console.log(res);

  return res;
}
