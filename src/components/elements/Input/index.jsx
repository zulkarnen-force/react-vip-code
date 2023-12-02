import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name}></Input>
    </div>
  );
};

export default InputForm;
