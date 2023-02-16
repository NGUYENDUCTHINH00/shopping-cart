import React from "react";
import "./listproduct.css";
import airpods from "../../imgs/apple-airpods-pro-2-2022-didongviet.png";
import mac from "../../imgs/macbook-pro-14-inc.jpg";
import iphone from "../../imgs/iPhone-14-Pro-Max-3.jpg";
import ss from "../../imgs/sammsung-ultra.png";

const products = [
  {
    id: 1,
    name: "Air Pods Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    image: require("../../imgs/apple-airpods-pro-2-2022-didongviet.png"),
  },
  {
    id: 2,
    name: "Mac Books Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    image: require("../../imgs/macbook-pro-14-inc.jpg"),
  },
  {
    id: 3,
    name: "Iphone 14 ProMax",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 99,
    image: require("../../imgs/iPhone-14-Pro-Max-3.jpg"),
  },
  {
    id: 4,
    name: "SamSung S22 UT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    image: require("../../imgs/sammsung-ultra.png"),
  },
];

function List() {
  return (
    <>
      {products.map((product) => (
        <div className='media product' key={product.id}>
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
            <input name='quantity-product-1' type='number' min='1' />
            <a data-product='1' href='#' className='price'>
              {product.price} USD
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
