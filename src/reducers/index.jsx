import { combineReducers } from "redux";
import listCart from "./listCart";
import listProduct from "./listProduct";
//combineReducers({listCart:listCart,listProduct:listProduct,notify:notify})
export const reducer = combineReducers({ listCart, listProduct });
