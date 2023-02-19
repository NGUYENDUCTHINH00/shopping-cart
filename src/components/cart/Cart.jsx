import React from "react";
import "./cart.css";
import Cartitems from "./Cartitems";
import Products from "./Products";
import { useSelector } from "react-redux";

function Cart() {
  const listCart = useSelector((state) => state.listCart);

  return (
    <>
      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 cart'>
        <div className='panel panel-danger'>
          <div className='panel-heading'>
            <h1 className='panel-title'>Your Cart</h1>
          </div>
          <div className='panel-body'>
            <table className='table'>
              <thead>
                <tr>
                  <th style={{ width: "4%" }}>#</th>
                  <th>Name</th>
                  <th style={{ width: "15%" }}>Price</th>
                  <th style={{ width: "4%" }}>Quantity</th>
                  <th style={{ width: "20%" }}>Subtotal</th>
                  <th style={{ width: "25%" }}>Action</th>
                </tr>
              </thead>
              {listCart.map((cart, index) => (
                <Products key={cart.product.id} cart={cart} stt={index + 1} />
              ))}
              <tfoot className='my-cart-footer'>
                <tr>
                  <th colSpan='6'>Empty product in your cart</th>
                </tr>
                <tr>
                  <Cartitems />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className='alert alert-success' role='alert' id='mnotification'>
          Updated <b>ivysaur</b>
        </div>
      </div>
    </>
  );
}

export default Cart;
