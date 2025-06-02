import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk } from '../../redux/auth/operations.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

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
        {...register('email', {
          required: true,
          pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
      />
      <input
        type="password"
        placeholder="Password"
        className={css.input}
        {...register('password', {
          required: true,
        })}
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
