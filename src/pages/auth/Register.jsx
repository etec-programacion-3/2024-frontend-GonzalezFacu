import Form from "../../components/auth/RegisterForm";
import Header from "../../components/layout/Header";

function Register() {
  return (
    <div>
      <Header />
      <Form route="/api/user/register/" method="register" />;
    </div>
  );
}

export default Register;
