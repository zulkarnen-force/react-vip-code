import Button from "../Button";
import InputForm from "../elements/Input";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
