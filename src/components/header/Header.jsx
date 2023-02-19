import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className='header-container'>
        <div className='logo-rikkei'>
          <img
            className='rikkei-academy'
            src='https://rikkei.edu.vn/wp-content/uploads/2022/04/Logo-Rikkei.png'
            alt='rikkei'
          />
        </div>
        <h1 className='title-project'>Project - Shopping Cart</h1>
      </div>
    </>
  );
}

export default Header;
