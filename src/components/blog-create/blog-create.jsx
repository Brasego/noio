import React from "react";
import FormInput from "../form-input/form-input.component";
import TextAreaInput from "../text-area-input/text-area-input";

import "./blog-create.scss";

class BlogCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return this.props.show ? (
      <div className="blog-create">
        <h2>Nouveau Post:</h2>
        <FormInput
          onChange={this.handleChange}
          name={"title"}
          value={this.state.title}
          label={"Titre"}
          type={"text"}
          required
        />
        <TextAreaInput
          onChange={this.handleChange}
          name={"content"}
          value={this.state.content}
          label={"Contenu"}
          required
        />
      </div>
    ) : null;
  }
}

export default BlogCreate;
