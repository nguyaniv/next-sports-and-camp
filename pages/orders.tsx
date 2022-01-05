import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Order from '../cmps/Order/Order';
import { orderModel } from '../models/order';
import { fetchOrders } from '../utills/fetch-requests';
const orders = ({ orders }: any) => {
  console.log(orders);

  if (!orders) return <h1>no orders here</h1>;

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Orders</h1>
      <div
        style={{
          margin: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {orders &&
          orders.map((order: orderModel) => {
            return <Order key={order._id} order={order} />;
          })}
      </div>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // access the user session
    const session = await getSession(ctx.req, ctx.res);
    const user = session?.user;
    let data = await fetchOrders(user);

    return { props: { orders: data.orders } };
  },
});
export default orders;
