import Form from "../../components/auth/LoginForm";
import Header from "../../components/layout/Header";

function Login() {
  return (
    <div>
      <Header />
      <Form route="/api/token/" method="login" />
    </div>
  );
}

export default Login;
