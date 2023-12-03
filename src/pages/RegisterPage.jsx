import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
