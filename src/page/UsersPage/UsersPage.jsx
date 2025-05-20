import css from './UsersPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUsersList,
} from '../../redux/storeFunctionality/selectors.js';
import { useEffect } from 'react';
import { getAllUsersThunk } from '../../redux/storeFunctionality/operations.js';
import UserCard from '../../components/UserCard/UserCard.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const UsersPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector(selectUsersList);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <section className="container">
        <h2 className="header">All application users list</h2>

        <ul className={css.usersList}>
          {userList.map((item) => (
            <UserCard key={item.id} data={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default UsersPage;
