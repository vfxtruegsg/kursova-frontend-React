import css from './DetailGoodInformation.module.css';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/selectors.js';
import { baseURL } from '../../utils/axiosDefaultSettings.js';
import {
  showToastErrorMessage,
  showToastSuccessMessage,
} from '../../utils/toastMessages.js';

const DetailGoodInformation = ({ data }) => {
  const navigate = useNavigate();
  const userId = useSelector(selectUserData).userId;
  const schema = yup.object().shape({
    quantity: yup.number().min(1).required(),
  });

  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const addToCart = async (formData) => {
    const goodData = { userId, goodId: data.id, quantity: formData.quantity };
    try {
      await baseURL.post('/orders/addToCart', goodData);

      navigate('/');

      showToastSuccessMessage('Successfully added to cart');
    } catch (error) {
      showToastErrorMessage('Something went wrong');
    }
    reset();
  };

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
          <form className={css.form} onSubmit={handleSubmit(addToCart)}>
            <input
              className={css.quantityInput}
              {...register('quantity')}
              type="number"
            />
            <button className="btn">Add to cart</button>
          </form>
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
