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
            <strong>Price:</strong> ${item.price}
          </li>
          <li>
            <strong>Quantity:</strong> {item.quantity}
          </li>
          <li>
            <strong>Total:</strong> ${item.price * item.quantity}
          </li>
          <li>
            <strong>Quantities left:</strong>{' '}
            {item.stock_quantity - item.quantity}
          </li>
          <li>
            <strong>Country:</strong> {item.country_origin}
          </li>
          <li>
            <strong>Added:</strong>{' '}
            {new Date(item.added_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Rating:</strong> {item.rating} ⭐
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartItems;
