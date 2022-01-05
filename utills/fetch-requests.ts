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

export const fetchProducts = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/products`);
  // let response = await fetch(`http://localhost:3000/api/products`);
  // extract the data
  return await response.json();
};
