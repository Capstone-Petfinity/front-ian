export default async function DuplicateCheckParentFunction({userId}) {
  const result = await fetch(
    `${process.env.API_URL}/user/signup/parent/idduplicate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: process.env.AUTH_KEY,
      },
      body: JSON.stringify({
        id: userId,
      }),
    },
  );

  const res = await result.json();

  return res.statusCode;
}
