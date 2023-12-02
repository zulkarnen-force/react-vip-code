import Button from "../Button";
import InputForm from "../elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        name="name"
        label="Name"
        placeholder="insert your name here..."
      ></InputForm>
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
      <InputForm
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        placeholder="**************"
      ></InputForm>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
