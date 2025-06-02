import css from './LoginForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk } from '../../redux/auth/operations.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(14).required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(loginUserThunk(data))
      .unwrap()
      .then(() => navigate('/account'));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
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
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="btn"
          style={{ background: '#101828' }}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
