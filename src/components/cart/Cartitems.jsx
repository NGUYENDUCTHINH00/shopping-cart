import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";

function Cartitems() {
  const listCart = useSelector((state) => state.listCart);
  // tính tổng tiền
  const price = () => {
    let totalAmout = 0;
    listCart.forEach((cart) => {
      totalAmout += cart.product.price * cart.quantity;
    });
    return totalAmout;
  };

  return (
    <>
      <td colSpan='4'>
        There are <b>{listCart.length}</b> items in your shopping cart.
      </td>
      <td colSpan='2' className='total-price text-left'>
        {price()} USD
      </td>
    </>
  );
}

export default Cartitems;
