import css from './GoodItem.module.css';

const GoodItem = ({ data }) => {
  return (
    <li className={css.goodItem}>
      <h3>{data.name}</h3>

      <p>
        <span style={{ color: '#3470ff' }}>Country:</span> {data.country_origin}
      </p>
      <p>
        <span style={{ color: '#3470ff' }}>Price:</span> {data.price}$
      </p>

      <p>
        <span style={{ color: '#3470ff' }}>Rating:</span> {data.rating}
      </p>
    </li>
  );
};

export default GoodItem;
