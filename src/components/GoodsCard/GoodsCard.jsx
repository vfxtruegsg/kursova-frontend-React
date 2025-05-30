import css from './GoodsCard.module.css';
import { Link } from 'react-router-dom';

const UserCard = ({ data }) => {
  return (
    <li className={css.userCardContainer}>
      <img
        className={css.userAvatar}
        src={data.good_picture}
        alt={`${data.name} image`}
      />
      <h3>{data.name}</h3>
      <p>Price: {data.price} $</p>
      <Link className={css.delBtn} to={`/goods/${data.id}`}>
        Get more information
      </Link>
    </li>
  );
};

export default UserCard;
