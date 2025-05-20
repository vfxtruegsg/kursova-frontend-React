import css from './GoodsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGoodsList,
  selectIsLoading,
} from '../../redux/storeFunctionality/selectors.js';
import { useEffect } from 'react';
import { getAllAssortmentGoods } from '../../redux/storeFunctionality/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import GoodItem from '../../components/GoodItem/GoodItem.jsx';

const GoodsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const goodsList = useSelector(selectGoodsList);

  useEffect(() => {
    dispatch(getAllAssortmentGoods());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <section className="container">
        <h2 className="header">All current assortment goods</h2>

        <ul className={css.goodsList}>
          {goodsList.map((item) => (
            <GoodItem key={item.id} data={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default GoodsPage;
