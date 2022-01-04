import Link from 'next/link';

const PaymentModal: React.FC = () => {
  return (
    <div className="payment-modal--active">
      <div className="payment-modal--active__container">
        <h2>You have a new order</h2>
        <Link href={'/orders'}>Checkout orders now</Link>
        <div className="payment-modal--active__close"> &#10006;</div>
      </div>
    </div>
  );
};

export default PaymentModal;
