import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  console.log(product);

  return (
    <li className="flex flex-col items-center justify-center gap-4 shadow-lg">
      <div className="p-4 flex flex-col items-center justify-center max-w[200px] w-full h-full">
        <img src={product.img} alt="" className="object-cover object-center w-1/2" />
        <div className="primaryTextColor">{product.rating}</div>
        <p className="text-xl text-gray-600">{product.title}</p>
        <span className="font-bold text-lg">$ {product.price}</span>
      </div>
      <button className="w-full primaryColor text-white py-2" onClick={() => dispatch(addProduct(product))}>
        Add to cart
      </button>
    </li>
  );
};

export default Product;
