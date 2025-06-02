import css from './OrdersPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/goods/selectors.js';
import { useEffect } from 'react';

const OrdersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <section className="container">
        <h2 className="header">All current orders</h2>

        <ul className={css.ordersList}></ul>
      </section>
    </>
  );
};

export default OrdersPage;
