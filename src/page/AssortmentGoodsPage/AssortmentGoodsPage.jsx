import css from './AssortmentGoodsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGoodsList,
  selectIsLoading,
} from '../../redux/goods/selectors.js';
import { useEffect } from 'react';
import { getAllAssortmentGoods } from '../../redux/goods/operations.js';
import GoodsCard from '../../components/GoodsCard/GoodsCard.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const UsersPage = () => {
  const dispatch = useDispatch();
  const goodsList = useSelector(selectGoodsList);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllAssortmentGoods());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <section style={{ paddingBottom: 64 }} className="container">
        <h2 className="header">
          Products <span style={{ color: '#3470ff' }}>Store</span> App
          <span style={{ color: '#3470ff' }}> Assortment</span>
        </h2>

        <ul className={css.usersList}>
          {goodsList.map((item) => (
            <GoodsCard key={item.id} data={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default UsersPage;
