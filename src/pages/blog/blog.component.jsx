import React from "react";
import BlogDisplay from "../../components/blog/blog-display.component";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../redux/user/user.selector";

const BlogPage = () => {
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <h1 className="blog-page">
      <BlogDisplay />
    </h1>
  );
};

export default BlogPage;
