export default async function addressFuction() {
  const result = await fetch(`${process.env.API_URL}/address/city`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
  });

  const res = await result.json();

  if (res.statusCode === '200') {
    return res.cityList;
  }

  return null;
}
