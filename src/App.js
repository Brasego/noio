import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import BlogPage from "./pages/blog/blog.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

import "./App.css";

//Routing:
//React-router-dom V6 replaced the Switch Element and it's overall syntax. So my code is a bit different from what's in the course
//What changed :
// No "Switch", no "component" anymore
// "Switch" => "Routes" | "component" => "element"

//We can have access to browser's history with props. (See HomePage Component)

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      let profileData = null;
      if (user) {
        const userProfile = await createUserProfileDocument(user);
        profileData = await userProfile.get().then((snapShot) => {
          return snapShot.data();
        });
      }
      dispatch(setCurrentUser({ id: user.uid, ...profileData }));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
        />
      </Routes>
    </div>
  );
};

export default App;
