export const createAction = (actionType, value) => {
  return {
    type: actionType,
    payload: value,
  };
};
