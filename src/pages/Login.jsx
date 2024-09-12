import Form from "../components/LoginForm";
import Header from "../components/Header";

function Login() {
  return (
    <div>
      <Header />
      <Form route="/api/token/" method="login" />
    </div>
  );
}

export default Login;
