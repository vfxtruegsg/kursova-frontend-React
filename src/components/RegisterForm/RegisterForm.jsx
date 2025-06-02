import css from './RegisterForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUserThunk } from '../../redux/auth/operations.js';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    first_name: yup.string().min(2).max(16).required(),
    last_name: yup.string().min(2).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(14).required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(registerUserThunk(data))
      .unwrap()
      .then(() => navigate('/login'));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        className={css.input}
        {...register('first_name')}
      />
      <input
        type="text"
        placeholder="Last name"
        className={css.input}
        {...register('last_name')}
      />
      <input
        type="text"
        placeholder="Email"
        className={css.input}
        {...register('email')}
      />
      <input
        type="password"
        placeholder="Password"
        className={css.input}
        {...register('password')}
      />

      <div className={css.btnContainer}>
        <button type="submit" className="btn">
          Register
        </button>
        <button
          onClick={() => navigate('/login')}
          className="btn"
          style={{ background: '#101828' }}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
