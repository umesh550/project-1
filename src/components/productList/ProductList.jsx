import { products } from "../data";
import "./productList.css";
const ProductList = () => {
  return (
    <div className="product__list">
      {products.map((element) => (
        <div className="product__item" key={element.id}>
          <img src={element.imageId} alt="" />
          <h3>{element.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
