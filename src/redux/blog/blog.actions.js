import { BlogActionTypes } from "./blog.types";

export const setCurrentBlog = (post) => ({
  type: BlogActionTypes().SET_NEW_FILES,
  payload: post,
});
