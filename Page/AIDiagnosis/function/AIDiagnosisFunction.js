export default async function AIDiagnosisFunction({
  uuid,
  disease_area,
  type,
  position,
  disease,
  img_url,
}) {
  const result = await fetch('https://capstone-petfinity.com/user/diagnosis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    },
    body: JSON.stringify({
      user_uuid: uuid,
      disease_area: disease_area,
      type: type,
      position: position,
      disease: disease,
      img_url: img_url,
    }),
  });

  const res = await result.json();
  console.log('AIDiagnosisFunction:', res);

  return res;
}
