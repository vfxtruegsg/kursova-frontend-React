import css from './AccountPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGoodsList,
  selectIsLoading,
} from '../../redux/goods/selectors.js';
import { useEffect } from 'react';
import { getAllAssortmentGoods } from '../../redux/goods/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import GoodItem from '../../components/GoodItem/GoodItem.jsx';
import {
  selectIsLoggedIn,
  selectUserData,
} from '../../redux/auth/selectors.js';
import { Link } from 'react-router-dom';

const GoodsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoading && <Loader />}
      <section className="container">
        {isLoggedIn ? (
          <h2 className="header">
            Hello,{' '}
            <span style={{ color: '#3470ff' }}>
              {userData.firstName} {userData.lastName}!
            </span>
          </h2>
        ) : (
          <div className={css.unloginContainer}>
            <h2 className="header">At the moment you aren't logged in :(</h2>
            <div className={css.btnContainer}>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
            <img
              src="https://content.presentermedia.com/files/clipart/00028000/28699/sad_worry_emoji_face_800_wht.jpg"
              alt="Sad emotion"
              width={300}
              height={300}
            />
          </div>
        )}

        <ul className={css.goodsList}></ul>
      </section>
    </>
  );
};

export default GoodsPage;
