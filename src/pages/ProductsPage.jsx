import Button from "../components/Button";
import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header
          image={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ></CardProduct.Header>
        <CardProduct.Body title={"Nike Jordan"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          provident, repudiandae fugiat, facere harum eos nisi id consequatur
          sint nesciunt unde exercitationem commodi delectus eveniet magnam
          autem, architecto sed? Alias!
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp. 1.000.000"}></CardProduct.Footer>
      </CardProduct>
      <CardProduct className="mx-2">
        <CardProduct.Header
          image={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ></CardProduct.Header>
        <CardProduct.Body title={"Nike Jordan"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          provident, repudiandae fugiat, facere harum eos nisi id consequatur
          sint nesciunt unde exercitationem commodi delectus eveniet magnam
          autem, architecto sed? Alias!
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp. 1.000.000"}></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
