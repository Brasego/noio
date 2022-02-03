import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

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

    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (e) => {
    console.log("Boorgir", e, this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            label="password"
            type="password"
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
        <h2>OR</h2>
        <CustomButton onClick={signInWithGoogle}>
          SIGN IN WITH GOOGLE
        </CustomButton>
      </div>
    );
  }
}

export default SignIn;
