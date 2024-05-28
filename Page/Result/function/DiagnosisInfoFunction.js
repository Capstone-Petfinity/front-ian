export default async function DiagnosisInfoFunction({diagnosis_uuid}) {
  const result = await fetch(
    'https://capstone-petfinity.com/user/infodiagnosis',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
      },
      body: JSON.stringify({
        uuid: diagnosis_uuid,
      }),
    },
  );

  const res = await result.json();
  console.log('DiagnosisInfoFunction:', res);

  return res;
}
