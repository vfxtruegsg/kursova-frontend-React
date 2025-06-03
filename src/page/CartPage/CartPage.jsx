import css from './CartPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import CartItems from '../../components/CartItems/CartItems.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartWithProductData,
  selectIsLoading,
} from '../../redux/goods/selectors.js';
import { useEffect, useState } from 'react';
import { getCartContents } from '../../redux/goods/operations.js';
import { selectUserData } from '../../redux/auth/selectors.js';
import OrderModal from '../../components/OrderModal/OrderModal.jsx';

const CartPage = () => {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectIsLoading);

  const cartContents = useSelector(selectCartWithProductData);
  const totalPrice = cartContents.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  useEffect(() => {
    dispatch(getCartContents(userData.userId));
  }, [dispatch, userData.userId]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isLoading && <Loader />}
      <section className="container">
        <h2 className="header">
          Your <span style={{ color: '#3470ff' }}>order</span> cart
        </h2>

        {cartContents.length == 0 ? (
          <h3 className="header">You currently have no orders in your cart!</h3>
        ) : (
          <div>
            <OrderModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              totalPrice={totalPrice}
              userData={userData}
              cartContents={cartContents}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 24,
                paddingBottom: 48,
              }}
            >
              <h3 style={{ marginBottom: 0 }} className="header">
                Total price:{' '}
                <span style={{ color: '#3470ff' }}>{totalPrice} $</span>
              </h3>
              <button className="btn" onClick={() => setIsOpen(true)}>
                Place an order
              </button>
            </div>

            <ul className={css.cartList}>
              {cartContents.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default CartPage;
