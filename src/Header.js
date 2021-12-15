import React from "react";
import { Router } from "react-router";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
export {initialState } from "./reducer";

function Header() {
  const [{basket}] = useStateValue();
  
  return (
    <nav className="header">
      
      <Link to="/">
        <img
          className="header__img"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

     
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__nav">
        <Link to="/Login" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">Hello</span>
            <span className="header__optionline2">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">Returns</span>
            <span className="header__optionline2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">Your</span>
            <span className="header__optionline2">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingCartIcon className="shopping_carticon" />
          <span className="header__optionline2" className="basket_count">
          {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
