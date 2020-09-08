import React from "react";
import StoreIcon from "@material-ui/icons/Store";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "./topNavBar.styles.scss";
import NavSidebar from "../sidebar/sidebar.component";
import Products from "../products/products.component";
import Orders from "../Orders/orders.component";

function TopNavBar() {
  return (
    <div>
      <div className="topnavbar">
        <div className="store">
          <StoreIcon />
          <h2>Store name</h2>
        </div>
        <div className="icons">
          <div className="iconNname">
            <h4
              style={{
                backgroundColor: "#2699fb",
                borderRadius: "20px",
                padding: "5px",
                width: "100px",
                textAlign: "center",
                color: "white",
              }}
            >
              Basic
            </h4>
            <h4>Plan</h4>
          </div>
          <div className="iconNname">
            <NotificationsActiveIcon className="size" />
            <h4>Notification</h4>
          </div>
          <div className="iconNname">
            <AccountCircleIcon />
            <h4>Profile</h4>
          </div>
          <div className="iconNname">
            <ContactSupportIcon />
            <h4>Support</h4>
          </div>
        </div>
      </div>
      <div className="upgrade">
        <h4
          style={{
            backgroundColor: "green",
            borderRadius: "20px",
            padding: "5px",
            width: "100px",
            textAlign: "center",
            color: "white",
          }}
        >
          Upgrade Plan
        </h4>
      </div>

      <Orders />
    </div>
  );
}

export default TopNavBar;
