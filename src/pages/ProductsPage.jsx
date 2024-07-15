import { useState } from "react";
import Button from "../components/Button";
import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    name: "Nike",
    price: 1000000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Awesome product",
  },
  {
    name: "Adidas",
    price: 1000000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Awesome product",
  },
  {
    name: "Puma",
    price: 1000000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Awesome product",
  },
];

const ProductsPage = () => {
  const email = localStorage.getItem("email");
  const [cart, setCart] = useState([
    {
      name: "Nike",
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="flex justify-end bg-blue-600 h-20 font-bold  text-white items-center px-10">
        {email}
        <Button
          type="button"
          classname={"bg-slate-600 mx-10"}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </nav>
      <div className="flex justify-center py-3">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product, idx) => (
            <CardProduct key={idx}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body title={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price}></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          {cart.map((item, idx) => (
            <div key={idx}> {item.name} </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
