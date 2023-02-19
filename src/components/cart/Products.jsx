import React, { useState } from "react";
import "./cart.css";
import { useDispatch } from "react-redux";
import { act_delete_cart, act_update_cart } from "../../action";

function Products(props) {
  let { cart, stt } = props;
  let [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  let cartQuantity = quantity == 0 ? cart.quantity : quantity;
  const handleUpdateCart = () => {
    dispatch(act_update_cart(cart.product.id, quantity));
  };
  const handleDeleteCart = () => {
    dispatch(act_delete_cart(cart.product.id));
  };
  return (
    <>
      <tbody>
        <tr>
          <th>{stt}</th>
          <td>{cart.product.name}</td>
          <td>{cart.product.price} USD</td>
          <td>
            <input
              style={{ maxWidth: "50px" }}
              className='cart-item-quantity-1'
              type='number'
              min={1}
              value={cartQuantity}
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </td>
          <td>
            <strong>{cart.product.price * cart.quantity} USD</strong>
          </td>
          <td>
            <a
              className='label label-info update-cart-item'
              href='#'
              data-product=''
              onClick={handleUpdateCart}
            >
              Update
            </a>
            <a
              className='label label-danger delete-cart-item'
              href='#'
              data-product=''
              onClick={handleDeleteCart}
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default Products;
