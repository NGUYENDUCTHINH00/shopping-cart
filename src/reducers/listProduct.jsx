// reducer --> function(state,action)--> newstate
const products = [
  {
    id: 1,
    name: "Air Pods Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    quantity: 1,
    image: require("../imgs/apple-airpods-pro-2-2022-didongviet.png"),
  },
  {
    id: 2,
    name: "Mac Books Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    quantity: 1,
    image: require("../imgs/macbook-pro-14-inc.jpg"),
  },
  {
    id: 3,
    name: "Iphone 14 ProMax",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 99,
    quantity: 1,
    image: require("../imgs/iPhone-14-Pro-Max-3.jpg"),
  },
  {
    id: 4,
    name: "SamSung S22 UT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    quantity: 1,
    image: require("../imgs/sammsung-ultra.png"),
  },
];

const listProduct = (state = products, action) => {
  return state;
};
export default listProduct;
