import * as types from "../constants/actionType";
export const act_buy_product = (product, quantity) => {
  return {
    type: types.BUY_PRODUCT,
    payload: { product, quantity },
  };
};
export const act_update_cart = (id, quantity) => {
  return {
    type: types.UPDATE_CART,
    payload: { id, quantity },
  };
};
export const act_delete_cart = (id) => {
  return {
    type: types.DELETE_CART,
    payload: id,
  };
};
