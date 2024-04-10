export default async function ownerSignUpFunction({
  userId,
  password,
  name,
  phone,
  city,
}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/signup/parent',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
        id: userId,
        pw: password,
        name: name,
        phone_number: phone,
        city: city,
      }),
    },
  );
  //   console.log(result);
  const res = await result.json();
  console.log(res);

  return res;
}
