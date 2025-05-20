import css from './UsersPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersList } from '../../redux/users/selectors.js';
import { useEffect } from 'react';
import { getAllUsersThunk } from '../../redux/users/operations.js';
import UserCard from '../../components/UserCard/UserCard.jsx';

const UsersPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector(selectUsersList);

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <section className="container">
      <h2 className={css.header}>All application users list</h2>

      <ul className={css.usersList}>
        {userList.map((item) => (
          <UserCard key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};

export default UsersPage;
