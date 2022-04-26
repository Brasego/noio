import React from "react";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const collections = this.state;

    return (
      <h1 className="blog-page">
        This is the blog page
      </h1>
    );
  }
}

export default BlogPage;
