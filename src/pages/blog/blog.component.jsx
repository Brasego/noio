import React from "react";

import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../redux/user/user.selector";

import BlogDisplay from "../../components/blog/blog-display.component";
import { BlogAdmin } from "../../components/blog-admin/blog-admin";

import { NewPostProvider } from "../../contexts/new-post.context";

const BlogPage = () => {
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <div className="blog-page">
      <NewPostProvider>
        {isAdmin ? <BlogAdmin /> : null}
        <BlogDisplay />
      </NewPostProvider>
    </div>
  );
};

export default BlogPage;
