import React from 'react';

import './blog-item.styles.scss';
const BlogItem = ({ id, title, description, imageUrl }) => (
  <div className="blog-item border">
    <div className="title">{title}</div>
    <div
      className="background-image border"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="blog-description">{description}</div>
  </div>
);

export default BlogItem;

function HelloUser() {
  return <MessageUser message={'Hello'} />;
}

function MessageUser(props) {
  return (
    <h1 className="message">
      {props.message},{/* {state.userName} */}
    </h1>
  );
}
