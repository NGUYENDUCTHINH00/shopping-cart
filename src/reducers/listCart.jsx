import { BUY_PRODUCT, DELETE_CART, UPDATE_CART } from "../constants/actionType";
import { SHOP_CARTS } from "../constants/shoppingCart";
let products = [];
// Giỏ hàng được lưu trong localStorage với tên là SHOP_CARTS
//-Lấy giỏ hàng của khách hàng trong localStorage
let carts = JSON.parse(localStorage.getItem(SHOP_CARTS));
products = carts != null && carts.length != 0 ? carts : products;
//Hàm kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
const getIndexProduct = (id, listCarts) => {
  for (let i = 0; i < listCarts.length; i++) {
    if (listCarts[i].product.id == id) {
      return i;
    }
  }
  return -1;
};
const listCart = (state = products, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      let index = getIndexProduct(action.payload.product.id, state);
      if (index >= 0) {
        // Sản phẩm đã có trong giỏ hàng --> tăng số lượng
        state[index].quantity = parseInt(action.payload.quantity);
        console.log(parseInt(action.payload.quantity));
      } else {
        // Sản phẩm chưa có trong giỏ hàng --> add thêm vào
        state = [
          ...state,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
          },
        ];
      }
      //set giỏ hàng vào localStorage
      localStorage.setItem(SHOP_CARTS, JSON.stringify(state));
      return [...state];
    case UPDATE_CART:
      let { id, quantity } = action.payload;
      let indexUpdate = getIndexProduct(id, state);
      state[indexUpdate].quantity = quantity;
      //set giỏ hàng vào localStorage
      localStorage.setItem(SHOP_CARTS, JSON.stringify(state));
      return [...state];
    case DELETE_CART:
      let indexDelete = getIndexProduct(state.payload, state);
      state.splice(indexDelete, 1);
      return [...state];
    default:
      return state;
  }
};
export default listCart;
