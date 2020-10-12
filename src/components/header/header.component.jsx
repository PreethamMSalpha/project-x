import React from "react";
import "./header.styles.scss";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";

function Header() {
  return (
    <div className="Path">
      <div className="Header">
        <div className="Logo">
          <h3>LOGO</h3>
          <h4>Shop Keeper</h4>
        </div>
        <div className="Searchbar" for="search">
          <SearchIcon for="search" />
          <input type="search" placeholder="Search..." id="search" />
        </div>
        <div className="Contents">
          <p>Courses</p>
          <div class="dropdown">
            <p>Buy</p>
            <div class="dropdown-content">
              <p>Food</p>
              <p>Fashion</p>
              <p>Art</p>
            </div>
          </div>

          <div class="dropdown">
            <p>Shop</p>
            <div class="dropdown-content">
              <p>Sell</p>
              <p>Market</p>
              <p>Manage</p>
            </div>
          </div>

          <MailIcon id="icon" />
          <AccountCircleIcon id="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
