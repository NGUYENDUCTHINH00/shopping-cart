import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { act_buy_product } from "../../action";
import "./listproduct.css";

function List(props) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let { product } = props;
  // console.log(product.price);
  const handleBuyProduct = () => {
    dispatch(act_buy_product(product, quantity));
  };

  return (
    <>
      <div className='media product'>
        <div className='media-left'>
          <a href='#'>
            <img
              className='media-object'
              src={product.image}
              alt={product.name}
            />
          </a>
        </div>
        <div className='media-body'>
          <h4 className='media-heading'>{product.name}</h4>
          <p>{product.description}</p>
          <input
            name='quantity-product-1'
            type='number'
            min={1}
            defaultValue={1}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <a
            data-product={1}
            href='#'
            className='price'
            onClick={handleBuyProduct}
          >
            {product.price} USD
          </a>
        </div>
      </div>
    </>
  );
}

export default List;
