import Button from "../Button";
import InputForm from "../elements/Input";

const handleLogin = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  window.location.href = "/products";
};
const FormLogin = () => {
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="email"
        name="email"
        label="Email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        type="password"
        name="password"
        label="Password"
        placeholder="**************"
      ></InputForm>
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
