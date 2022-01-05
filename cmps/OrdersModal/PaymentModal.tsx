import Link from 'next/link';

interface Props {
  setOrdersModal: Function;
}

const PaymentModal: React.FC<Props> = ({ setOrdersModal }) => {
  return (
    <div className="payment-modal--active">
      <div className="payment-modal--active__container">
        <h2>You have a new order</h2>
        <Link href={'/orders'}>Checkout orders now</Link>
        <div
          onClick={() => setOrdersModal(false)}
          className="payment-modal--active__close"
        >
          {' '}
          &#10006;
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
