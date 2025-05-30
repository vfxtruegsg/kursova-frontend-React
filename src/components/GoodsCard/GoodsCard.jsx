import { useDispatch } from 'react-redux';
import css from './GoodsCard.module.css';

const UserCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.userCardContainer}>
      <img
        className={css.userAvatar}
        src={data.good_picture}
        alt={`${data.name} image`}
      />
      <h3>{data.name}</h3>
      <p>Price: {data.price} $</p>
      <button className={css.delBtn}>Get more information</button>
    </li>
  );
};

export default UserCard;
