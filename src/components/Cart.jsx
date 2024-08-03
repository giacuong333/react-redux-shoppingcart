import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "../store";

const Cart = ({ setOpenCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="overlay" onClick={() => setOpenCart(false)}></div>
      <section className="fixed top-0 bottom-0 right-0 max-w-[600px] w-full shadow-2xl bg-white z-50 secondaryColor">
        <div className="font-medium text-2xl text-white text-center primaryColor h-16 flex items-center justify-center shadow-xl">
          <IoClose
            size={30}
            className="absolute top-0 left-0 bottom-0 p-1 bg-gray-200 hover:bg-gray-100 text-black cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
          Cart ({cart.length})
        </div>
        <div className="p-6 pb-20 overflow-y-scroll h-full">
          {cart.length === 0 ? (
            <li className="text-2xl flex items-center justify-center h-full">Cart is empty</li>
          ) : (
            <ul className="flex flex-col gap-4">
              {cart.map((product) => {
                return (
                  <li key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={product.img} alt="" className="size-28" />
                      <div className="flex flex-col gap-1 items-start">
                        <p className="text-lg">{product.title}</p>
                        <span className="font-bold text-lg">$ {product.totalPrice}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="border-[1px] border-gray-300 primaryColor text-white">
                        <button
                          className="px-3 py-1 border-r-[1px] border-gray-300"
                          onClick={() => dispatch(decreaseQuantity(product.id))}>
                          -
                        </button>
                        <span className="inline-block px-3 py-1">{product.quantity}</span>
                        <button
                          className="px-3 py-1 border-l-[1px] border-gray-300"
                          onClick={() => dispatch(increaseQuantity(product.id))}>
                          +
                        </button>
                      </div>
                      <IoClose
                        size={26}
                        className="cursor-pointer"
                        onClick={() => dispatch(deleteProduct(product.id))}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="primaryColor w-full h-16 p-6 flex items-center justify-between text-white">
          <div className="text-lg flex-1">
            Total: <span className="text-xl font-bold">$ 499</span>
          </div>
          <button className="secondaryColor p-2 text-gray-800 font-medium">Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
