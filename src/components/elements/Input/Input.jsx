const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 mb-2 placeholder: opacity-50"
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
