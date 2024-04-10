export default async function ownerSignUpFunction({
  id,
  pw,
  name,
  phone_number,
  city,
}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/signup/parent',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id,
        pw: pw,
        name: name,
        phone_number: phone_number,
        city: city,
      }),
    },
  );
  //   console.log(result);
  const res = await result.text();
  console.log(res);

  return res;
}
