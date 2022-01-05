let dev = process.env.NODE_ENV !== 'production';
let { DEV_URL, PROD_URL } = process.env;

export const fetchOrders = async (user: any) => {
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: user!.email }),
  });

  return await response.json();
};
