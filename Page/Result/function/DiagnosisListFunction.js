export default async function DiagnosisListFunction({uuid}) {
  console.log('user uuid:', uuid);
  const result = await fetch(
    'https://capstone-petfinity.com/user/diagnosislist',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        uuid: uuid,
      }),
    },
  );

  const res = await result.json();
  console.log('DiagnosisListFunction:', res);

  return res;
}
