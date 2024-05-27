export default async function AIDiagnosisFunction({
  uuid,
  disease_area,
  type,
  position,
  disease,
  img_url,
}) {
  const result = await fetch('http://capstone-petfinity.com/user/send/ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
