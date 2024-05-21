// export default async function AIDiagnosisFunction({formData}) {
//   const result = await fetch('http://203.250.148.132:5000/formdata_test', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//     body: formData,
//   });

//   const res = await result.json();
//   console.log(res);

//   return res;
// }

export default async function AIDiagnosisFunction() {
  const result = await fetch('http://203.250.148.132/hello', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const res = await result.text();
  console.log('result' + res);

  return res;
}
