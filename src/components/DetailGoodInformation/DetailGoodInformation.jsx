import { Link, useNavigate } from 'react-router-dom';
import css from './DetailGoodInformation.module.css';

const DetailGoodInformation = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={css.carDescriptionContainer}>
      <div className={css.communicateContainer}>
        <img
          className={css.img}
          src={data.good_picture}
          alt={`${data.name} image`}
        />
      </div>
      <div className={css.InfContainer}>
        <div className={css.basicInf}>
          <div className={css.carInf}>
            <h1 className={css.header}>{data.name}</h1>
            <p style={{ color: '#8d929a' }}>Id: {data.id}</p>
          </div>
          <div className={css.location}>
            <img
              src="/location.svg"
              alt="Location image"
              width={16}
              height={16}
              style={{ marginRight: 4 }}
            />
            <p style={{ marginRight: 16 }}>{data.country_origin}</p>
          </div>
          <p className={css.price}>$ {data.price}</p>
          <p>{data.description}</p>
        </div>
        <div className={css.btnContainer}>
          <button className="btn">Add to cart</button>
          <button
            onClick={() => navigate(-1)}
            className="btn"
            style={{ backgroundColor: '#101828' }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailGoodInformation;
