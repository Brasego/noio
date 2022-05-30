import { createAction } from "../../utils/reducer/createAction";
import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(UserActionTypes.SET_CURRENT_USER, user);
