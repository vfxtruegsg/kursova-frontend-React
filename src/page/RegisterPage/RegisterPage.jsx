import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';

const RegisterPage = () => {
  return (
    <section
      className="container"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2 className="header">Register Form</h2>
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
