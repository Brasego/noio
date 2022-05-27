import React from "react";
import BlogDisplay from "../../components/blog/blog-display.component";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <h1 className="blog-page">
        
        <BlogDisplay/>
      </h1>
    );
  }
}

export default BlogPage;
