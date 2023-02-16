import React, { useState, useEffect } from "react";
import "./cart.css";

function Cart() {
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
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Lorem ipsum</td>
                  <td>12 USD</td>
                  <td>
                    <input
                      style={{ maxWidth: "50px" }}
                      className='cart-item-quantity-1'
                      type='number'
                      min='1'
                    />
                  </td>
                  <td>
                    <strong>12 USD</strong>
                  </td>
                  <td>
                    <a
                      className='label label-info update-cart-item'
                      href='#'
                      data-product
                    >
                      Update
                    </a>
                    <a
                      className='label label-danger delete-cart-item'
                      href='#'
                      data-product
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot className='my-cart-footer'>
                <tr>
                  <th colSpan='6'>Empty product in your cart</th>
                </tr>
                <tr>
                  <td colSpan='4'>
                    There are <b>5</b> items in your shopping cart.
                  </td>
                  <td colSpan='2' className='total-price text-left'>
                    12 USD
                  </td>
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
