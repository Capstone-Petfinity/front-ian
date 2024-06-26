export default async function DuplicateCheckVetFunction({userId}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/signup/vet/idduplicate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        id: userId,
      }),
    },
  );

  const res = await result.json();

  return res.statusCode;
}
