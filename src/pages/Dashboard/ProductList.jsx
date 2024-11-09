/* eslint-disable react/prop-types */
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-y-10 justify-items-center">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          images={[product.images[0]]}
        />
      ))}
    </div>
  );
};

export default ProductList;
