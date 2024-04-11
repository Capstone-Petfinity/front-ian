export default async function ownerSignUpFunction({
  userId,
  password,
  name,
  phone,
  city,
}) {
  console.log(userId, password, name, phone, city);

  const result = await fetch(
    'https://capstone-petfinity.com/user/signup/parent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        id: userId,
        pw: password,
        name: name,
        phone_number: phone,
        city: city,
      }),
    },
  );

  const res = await result.json();
  console.log(res);

  return res;
}
