import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <header className="primaryColor h-16 flex items-center">
        <div className="flex items-center justify-between mx-auto text-center text-white max-w-7xl w-full px-6">
          <h1 className="font-medium text-lg">Redux Shopping Cart</h1>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenCart((prev) => !prev)}>
            <BsCart2 size={24} />
            <span className="py-1 px-3 rounded-full text-white bg-black">{cart?.length}</span>
          </div>
        </div>
      </header>

      {openCart && <Cart setOpenCart={setOpenCart} />}
    </>
  );
};

export default Header;
