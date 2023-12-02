export default function Button(props) {
  const { children, classname = "bg-black" } = props;
  return (
    <button
      type="submit"
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
    >
      {children}
    </button>
  );
}
