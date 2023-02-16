import React, { useState, useEffect } from "react";
import "./listproduct.css";
import List from "./List";

function Listproduct({ product }) {
  return (
    <>
      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 list-product'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h1 className='panel-title'>List Products</h1>
          </div>
          <div className='panel-body' id='list-product'>
            <List />;
          </div>
        </div>
      </div>
    </>
  );
}

export default Listproduct;
