import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";

//Component that holds a Card displaying an image and a title corresponding to a category of the shop
//Props are passed by the Diectory component where MenuItem is mapped.
const MenuItem = ({ title, imageUrl, size, history }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/${title}`)} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
