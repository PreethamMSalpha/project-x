import React from "react";
import { Link } from "react-router-dom";
import "./MainImage.styles.scss";

import InputIcon from "@material-ui/icons/Input";

function MainImage() {
  return (
    <div className="MainImage">
      <div className="contents">
        <h1>Get your business online</h1>
        <h1>in just one click</h1>
        <div className="getStarted">
          <Link
            to="/openshop"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3>Get started for free</h3>

            <InputIcon id="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
