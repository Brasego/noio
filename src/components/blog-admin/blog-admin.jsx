import { useState } from "react";

import { BlogCreate } from "../blog-create/blog-create";

import AddCircle from "../../utils/icons/addCircle/addCircle";

import "./blog-admin.scss";

export const BlogAdmin = () => {
  const [isCreating, setIsCreating] = useState(false);

  const openBlogCreate = () => {
    setIsCreating(!isCreating);
  };

  return (
    <div className="blog-admin">
      <AddCircle onClick={() => openBlogCreate()} />
      <BlogCreate show={isCreating} />
    </div>
  );
};
