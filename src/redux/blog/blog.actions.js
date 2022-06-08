import { BlogActionTypes } from "./blog.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentBlog = (post) =>
  createAction(BlogActionTypes.SET_NEW_FILES, post);
