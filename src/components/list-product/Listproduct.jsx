import React from "react";
import "./listproduct.css";
import { useSelector } from "react-redux";
import List from "./List";

function Listproduct() {
  const listProduct = useSelector((state) => state.listProduct);

  return (
    <>
      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 list-product'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h1 className='panel-title'>List Products</h1>
          </div>
          <div className='panel-body' id='list-product'>
            {listProduct.map((product) => (
              <List key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Listproduct;
