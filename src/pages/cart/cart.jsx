import React from 'react';
import { useCart } from '../../context/cart';
import { Link } from 'react-router-dom';

const SHIPPING_CHARGES = 5; // Corrected variable name

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  };

  return (
    <>
      {cart.length >= 1 ? (
        <div className="flex mt-24 ml-64 shadow-md w-[900px]">
          <div className="p-7 flex flex-col">
            <h1 className="text-3xl pb-3 w-64 border-gray-900">Order Summary</h1>
            <hr />
            {cart.map((item) => (
              <div key={item.product.id} className="flex mt-10">
                <img src={item.product.image} alt="" className="h-56 w-48 ml-4 rounded-xl shadow-3xl" />
                <div className="w-full">
                  <div className="description&quantity flex p-7 h-40 justify-around mt-10">
                    <div className="w-[490px]">
                    <Link to={"/product/" + item.product.id}>
                      <p className="text-xl hover:underline cursor-pointer ">
                      {item.product.title}
                      </p>

                    </Link>
                    </div>
                  </div>
                  <div className="bg flex h-20 justify-around mt-3">
                    <div className="price mr-48">
                      <p className="text-2xl text-green-600">${round(item.product.price * item.quantity, 2)}</p>
                    </div>
                    <div className="flex flex-col h-28 pb-3">
                      <div className="text-3xl flex justify-around pb-3">
                        <button
                          className="border border-1 text-white bg-green-600 border-gray-300 rounded-xl px-3"
                          onClick={() => increaseQuantity(item.product.id)}
                        >
                          +
                        </button>
                        <b>{item.quantity}</b>
                        <button
                          className="border border-1 text-white bg-green-600 border-gray-300 rounded-xl px-3"
                          onClick={() => decreaseQuantity(item.product.id)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="text-white text-3xl remove bg-green-700 rounded-lg px-3 py-1 h-12 ml-2"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <i>Remove</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-7xl opacity-30 ml-[481px] mt-9">
          <p>Cart is empty</p>
        </div>
      )}
      <div className="shadow-md w-[900px] ml-64 mt-20">
        <div className="heading">
          <h1 className="text-3xl p-3 text-center border-gray-900">Payment Summary</h1>
          <hr />
        </div>
        <div>
          <p className="p-3 flex justify-around text-xl">
            <span>Subtotal</span> <span>${round(cartTotal(), 2)}</span>
          </p>
          <p className="p-3 flex justify-around text-xl">
            <span>Shipping fee</span> <span>${SHIPPING_CHARGES}</span>
          </p>
          <p className="p-3 flex justify-around text-xl">
            <span>Total</span> <span>${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export { Cart };
