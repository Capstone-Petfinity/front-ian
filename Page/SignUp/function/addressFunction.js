export default async function addressFuction() {
  const result = await fetch('https://capstone-petfinity.com/address/city', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });

  const res = await result.json();

  console.log(res);

  return res;
}
