import css from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartWithProductData,
  selectIsLoading,
} from '../../redux/goods/selectors.js';
import { useEffect } from 'react';
import { getCartContents } from '../../redux/goods/operations.js';
import { selectUserData } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import CartItems from '../../components/CartItems/CartItems.jsx';

const CartPage = () => {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserData).userId;
  const isLoading = useSelector(selectIsLoading);

  const cartContents = useSelector(selectCartWithProductData);
  const totalPrice = cartContents.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  useEffect(() => {
    dispatch(getCartContents(userId));
  }, [dispatch, userId]);

  return (
    <>
      {isLoading && <Loader />}
      <section className="container">
        <h2 className="header">
          Your <span style={{ color: '#3470ff' }}>order</span> cart
        </h2>

        {!cartContents ? (
          <h3 className="header">You currently have no orders in your cart!</h3>
        ) : (
          <>
            <ul className={css.cartList}>
              {cartContents.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};

export default CartPage;
