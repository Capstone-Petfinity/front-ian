export default async function AIDiagnosisFunction({formData}) {
  const result = await fetch('http://capstone-petfinity.com/formdata_test', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  const res = await result.json();
  console.log(res);

  return res;
}
