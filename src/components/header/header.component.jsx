import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";

import Logo from "../../assets/NOIO_LOGO.png";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  const dispatch = useDispatch();

  const onSignOut = () => {
    auth.signOut();
    dispatch(setCurrentUser(null));
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img alt="noio-logo" className="logo" src={Logo}></img>
      </Link>
      <div className="options">
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser !== null ? (
          <div className="option" onClick={() => onSignOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
