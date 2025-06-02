import css from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/goods/selectors.js';
import { useEffect } from 'react';
import { getCartContents } from '../../redux/goods/operations.js';
import { selectUserData } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';

const CartPage = () => {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserData).userId;
  const isLoading = useSelector(selectIsLoading);

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

        <ul className={css.ordersList}></ul>
      </section>
    </>
  );
};

export default CartPage;
