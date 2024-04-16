export default async function RegisterPetFunction({
  uuid,
  name,
  birth,
  gender,
  kind,
}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/parent/registerpet',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        parentUuid: uuid,
        name: name,
        birth: birth,
        gender: gender,
        kind: kind,
      }),
    },
  );

  const res = await result.json();
  console.log(res);

  return res;
}
