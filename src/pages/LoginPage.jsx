import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
