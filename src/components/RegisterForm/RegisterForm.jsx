import css from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUserThunk } from '../../redux/auth/operations.js';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

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
        {...register('first_name', {
          required: true,
          pattern: /[A-Za-z]{1,32}/,
        })}
      />
      <input
        type="text"
        placeholder="Last name"
        className={css.input}
        {...register('last_name', {
          required: true,
          pattern: /[A-Za-z]{1,32}/,
        })}
      />
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
