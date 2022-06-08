import { BlogActionTypes } from "./blog.types";

export const setCurrentBlog = (post) =>
  createAction(BlogActionTypes.SET_NEW_FILES, post);
