export default async function addressFuction() {
  const result = await fetch('https://capstone-petfinity.com/address/city', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      auth: 'bVAtkPtiVGpWuO3dWEnvr51cEb6r7oF8',
    }),
  });

  const res = await result.json();

  console.log(res);

  return res;
}
