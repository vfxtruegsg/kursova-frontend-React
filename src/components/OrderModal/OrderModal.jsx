import Modal from 'react-modal';
import css from './OrderModal.module.css';
import { baseURL } from '../../utils/axiosDefaultSettings.js';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '../../utils/toastMessages.js';

const OrderModal = ({
  isOpen,
  setIsOpen,
  totalPrice,
  userData,
  cartContents,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    const goodId = cartContents.map((i) => i.id);
    const goodQuantity = cartContents.map((i) => i.quantity);
    const data = {
      totalAmount: totalPrice,
      shippingAddress: e.target.elements.shippingAddress.value,
      customerId: userData.userId,
      orderedCart: goodId,
      quantity: goodQuantity,
    };

    try {
      await baseURL.post('/orders/placeOrder', data);

      showToastSuccessMessage('The order has been successfully completed!');

      setIsOpen(false);

      await baseURL
        .post('/orders/cleanCart', { userId: userData.userId })
        .then(() => window.location.reload());
    } catch (error) {
      if (error.status == 500)
        showToastErrorMessage('Something went wrong, please try again later!');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
      appElement={document.getElementById('root')}
    >
      <button onClick={() => setIsOpen(false)} className={css.closeButton}>
        ✖
      </button>
      <div className={css.modalContainer}>
        <h2 className={css.title}>Enter Shipping Address</h2>

        <p>
          Name:{' '}
          <span style={{ color: '#3470ff' }}>
            {userData.firstName} {userData.lastName}
          </span>
        </p>
        <p>
          Total Price: <span style={{ color: '#3470ff' }}>{totalPrice} $</span>
        </p>

        <form onSubmit={placeOrder} className={css.form}>
          <label htmlFor="shipping_address" className={css.label}>
            Shipping Address
          </label>
          <input
            type="text"
            id="shipping_address"
            name="shippingAddress"
            placeholder="123 Main St, City, Country"
            required
            className={css.input}
          />

          <button type="submit" className={css.submitButton}>
            Confirm Order
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default OrderModal;
