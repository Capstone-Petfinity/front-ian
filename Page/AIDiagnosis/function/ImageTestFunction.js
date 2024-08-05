export default async function ImageTestFunction({formData}) {
  const result = await fetch(`${process.env.IMAGE_API_URL}/upload/image/post`, {
    method: 'POST',
    body: formData,
  });

  const res = await result.json();

  const result2 = await fetch(`${process.env.IMAGE_API_URL}/post/url`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      postSeq: res.insertId,
    }),
  });

  const res2 = await result2.json();

  return res2.result;
}
