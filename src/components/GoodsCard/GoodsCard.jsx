import css from './GoodsCard.module.css';
import { Link } from 'react-router-dom';

const GoodsCard = ({ data }) => {
  return (
    <li className={css.userCardContainer}>
      <img
        className={css.userAvatar}
        src={
          !data.stock_quantity
            ? 'https://solidcoreaudio.pl/wp-content/uploads/2019/12/stockout.jpg'
            : data.good_picture
        }
        alt={`${data.name} image`}
      />
      <h3>{data.name}</h3>
      <p>
        Price: <span style={{ color: '#3470ff' }}>{data.price} $</span>
      </p>

      <Link
        className="btn"
        style={{ background: '#101828' }}
        to={`/goods/${data.id}`}
      >
        Read more
      </Link>
    </li>
  );
};

export default GoodsCard;
