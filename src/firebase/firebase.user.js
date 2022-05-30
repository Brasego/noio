import { firestore } from "./firebase.utils";

export const getUserInfo = async (id) => {
  const userRef = firestore.doc(`users/${id}`);

  return await userRef.get().then((snapShot) => {
    return snapShot.data();
  });
};
