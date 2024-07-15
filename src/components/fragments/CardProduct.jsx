import Button from "./../Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-slate-800 border border-grey-700 shadow rounded-lg mx-2 mb-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="#">
      <img src={image} alt="" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <h5 className="text-xl font-bold tracking-light text-white ">{title}</h5>
      <p className="text-white text-sm">{children}</p>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
