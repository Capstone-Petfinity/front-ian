export default async function ImageTestFunction2({insert_id}) {
  const result = await fetch(`${process.env.IMAGE_API_URL}/post/url`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      postSeq: insert_id,
    }),
  });

  const res = await result.json();

  return res.result;
}
