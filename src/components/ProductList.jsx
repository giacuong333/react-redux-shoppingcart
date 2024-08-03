import React from "react";
import productList from "../data";
import Product from "./Product";

const ProductList = () => {
  return (
    <section className=" w-full px-6 mx-auto text-center py-20 secondaryColor">
      <div className="max-w-7xl w-full mx-auto">
        <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-10">
          {productList.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
