import React from "react";
import "./Header.css";
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text"  />
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">hello</span>
          <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Return</span>
          <span className="header_optionTwo">Order</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default header;
