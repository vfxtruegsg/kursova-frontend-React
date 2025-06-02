import LoginForm from '../../components/LoginForm/LoginForm.jsx';

const LoginPage = () => {
  return (
    <section
      className="container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2 className="header">Login Form</h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
