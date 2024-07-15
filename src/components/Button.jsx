export default function Button(props) {
  const { children, classname = "bg-black", type, onClick } = props;
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
