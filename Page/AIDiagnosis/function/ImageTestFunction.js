export default async function ImageTestFunction({formData}) {
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

  return res2.result[0];
}
