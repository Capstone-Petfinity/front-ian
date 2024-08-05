export default async function RegisterPetFunction({
  uuid,
  name,
  birth,
  kind,
  gender,
}) {
  const result = await fetch(`${process.env.API_URL}/user/parent/registerpet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      parentUuid: uuid,
      name: name,
      birth: birth,
      kind: kind,
      gender: gender,
    }),
  });

  const res = await result.json();

  return res;
}
