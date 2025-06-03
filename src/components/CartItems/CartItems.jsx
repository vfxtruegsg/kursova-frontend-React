import css from './CartItems.module.css';

const CartItems = ({ item }) => {
  return (
    <li className={css.cartItem} key={item.cart_item_id}>
      <img src={item.good_picture} alt={item.name} className={css.itemImage} />

      <div className={css.itemInfo}>
        <h3 className={css.itemTitle}>{item.name}</h3>
        <p className={css.itemDescription}>{item.description}</p>

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
      </div>
    </li>
  );
};

export default CartItems;
