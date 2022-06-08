import { BlogActionTypes } from "./blog.types";

const INITIAL_STATE = {
  currentBlog: {
    title: "",
    content: "",
    files: [],
  },
};

const BlogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes().SET_NEW_FILES:
      return {
        ...state,
        newFiles: action.payload,
      };
    default:
      return state;
  }
};

export default BlogReducer;
