import React from "react";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WebIcon from "@material-ui/icons/Web";

import "./sidebar.styles.scss";
import TopNavBar from "../topNavBar/topNavBar.component";

const NavSidebar = () => {
  return (
    <div className="default">
      <div className="sidebar">
        <div className="sidebarmenu">
          <div className="nameIcon">
            <h3>My Orders</h3>
            <ShoppingCartIcon />
          </div>
          <div class="dropdown">
            <div className="nameIcon">
              <h3>Profile</h3>
              <ArrowDropDownCircleIcon />
            </div>
            <div class="dropdown-content">
              <h3>Product</h3>
              <h3>Report</h3>
              <h3>Dashboard</h3>
            </div>
          </div>
          <div className="nameIcon">
            <h3>Market</h3>
            <WebIcon />
          </div>
        </div>
      </div>
      <div className="topNavBar">
        <TopNavBar />
      </div>
    </div>
  );
};

export default NavSidebar;
