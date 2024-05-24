// import base64 from 'base-64';

// export default async function ImageTestFunction({formData}) {
//   //   console.log(formData);
//   const result = await fetch(
//     'https://capstone-petfinity.com/diagnosis/receive/test',
//     {
//       method: 'POST',
//       body: formData,
//     },
//   );
//   console.log(result);
//   //   const res = await result.formData();

//   //   console.log(res);
//   //   console.log('result:', base64.decode(res.image));
//   return res;
//   //   return base64.decode(res.image);
// }

export default async function ImageTestFunction({formData}) {
  console.log(formData);
  const result = await fetch(
    'https://blog-back.donghyuns.com/upload/image/post',
    {
      method: 'POST',
      body: formData,
    },
  );

  const res = await result.json();
  console.log(res);

  const result2 = await fetch('https://blog-back.donghyuns.com/post/url', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      postSeq: res.insertId,
    }),
  });

  const res2 = await result2.json();
  console.log(res2);
}
