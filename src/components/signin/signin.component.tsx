import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error: ",error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            label="Password"
            required
          />
        </form>
        <CustomButton
          minWidth={"250px"}
          type="submit"
          onClick={this.handleSubmit}
        >
          SIGN IN
        </CustomButton>
        <h2>OR</h2>
        <CustomButton
          minWidth={"250px"}
          onClick={signInWithGoogle}
          isGoogleSignin
        >
          SIGN IN WITH GOOGLE
        </CustomButton>
      </div>
    );
  }
}

export default SignIn;
