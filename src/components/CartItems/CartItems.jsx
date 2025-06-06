import { baseURL } from '../../utils/axiosDefaultSettings.js';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '../../utils/toastMessages.js';
import css from './CartItems.module.css';

const CartItems = ({ item }) => {
  const removeFromCart = async () => {
    try {
      await baseURL
        .post('/orders/removeFromCart', {
          id: item.cart_item_id,
          quantity: item.quantity,
        })
        .then(() => window.location.reload());

      showToastSuccessMessage('Successfully deleted a good from cart!');
    } catch (error) {
      showToastErrorMessage('Something went wrong!');
    }
  };

  console.log(item);

  return (
    <li className={css.cartItem} key={item.cart_item_id}>
      <img src={item.good_picture} alt={item.name} className={css.itemImage} />

      <div className={css.itemInfo}>
        <h3 className={css.itemTitle}>{item.name}</h3>
        <p className={css.itemDescription}>{item.description}</p>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'space-between',
          }}
        >
          <ul className={css.itemDetails}>
            <li>
              <strong>Price:</strong>{' '}
              <span style={{ color: '#3470ff' }}>{item.price} $</span>
            </li>
            <li>
              <strong>Quantity:</strong> {item.quantity}
            </li>
            <li>
              <strong>Total:</strong>{' '}
              <span style={{ color: '#3470ff' }}>
                {item.price * item.quantity} $
              </span>
            </li>
            <li>
              <strong>Quantities left:</strong>{' '}
              {item.stock_quantity - item.quantity}
            </li>
            <li>
              <strong>Country:</strong>{' '}
              <span style={{ color: '#3470ff' }}>{item.country_origin}</span>
            </li>
            <li>
              <strong>Added:</strong>{' '}
              {new Date(item.added_at).toLocaleDateString()}
            </li>
            <li>
              <strong>Rating:</strong>{' '}
              <span style={{ color: '#f7c900' }}>{item.rating}</span> ⭐
            </li>
          </ul>

          <button
            style={{ background: '#b31111' }}
            onClick={removeFromCart}
            className="btn"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
