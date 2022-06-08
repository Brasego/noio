import { combineReducers } from "redux";

import BlogReducer from "./blog/blog.reducer";
import UserReducer from "./user/user.reducer";

export default combineReducers({
  user: UserReducer,
  blog: BlogReducer,
});
