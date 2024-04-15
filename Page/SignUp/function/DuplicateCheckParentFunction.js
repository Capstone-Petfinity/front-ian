export default async function DuplicateCheckParentFunction({userId}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/signup/parent/idduplicate',
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
