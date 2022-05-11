import React from "react";

import "./blog-item.styles.scss";
const BlogItem = ({ id, title, description, imageUrl }) => (
  <div className="blog-item border">
    <div className="title">
      {title}
    </div>
    <div className="background-image border" style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="blog-description">
      {description}
    </div>
  </div>
);

export default BlogItem;
