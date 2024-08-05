export default async function DiagnosisInfoFunction({diagnosis_uuid}) {
  const result = await fetch(`${process.env.API_URL}/user/infodiagnosis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      uuid: diagnosis_uuid,
    }),
  });

  const res = await result.json();

  return res;
}
