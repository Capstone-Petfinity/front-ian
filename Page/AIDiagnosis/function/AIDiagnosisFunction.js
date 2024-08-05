export default async function AIDiagnosisFunction({
  uuid,
  disease_area,
  type,
  position,
  disease,
  img_url,
}) {
  const result = await fetch(`${process.env.API_URL}/user/diagnosis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
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

  return res;
}
