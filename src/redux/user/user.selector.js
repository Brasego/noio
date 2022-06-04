//Selects the currentUser
export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};
//Functions that checks if the user is an admin
export const selectIsAdmin = (state) => {
  if (!state.user.currentUser) return false;
  if (!state.user.currentUser.isAdmin) return false;
  return state.user.currentUser.isAdmin
    ? state.user.currentUser.isAdmin
    : false;
};
