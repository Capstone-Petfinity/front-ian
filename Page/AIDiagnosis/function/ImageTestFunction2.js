export default async function ImageTestFunction2({insert_id}) {
  const result = await fetch('https://blog-back.donghyuns.com/post/url', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      postSeq: insert_id,
    }),
  });

  const res = await result.json();
  console.log('ImgTestFunction2:', res);

  return res.result;
}
