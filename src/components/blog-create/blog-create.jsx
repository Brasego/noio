import React from "react";

import FormInput from "../form-input/form-input.component";
import SelectCropImages from "../select-crop-images/select-crop-images";
import TextAreaInput from "../text-area-input/text-area-input";

import "./blog-create.scss";

class BlogCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      files: [],
      content: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = () => {};

  render() {
    return this.props.show ? (
      <div className="blog-create">
        <h2>Nouveau Post:</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            name={"title"}
            value={this.state.title}
            label={"Titre"}
            type={"text"}
            required
          />
          <SelectCropImages />
          <TextAreaInput
            onChange={this.handleChange}
            name={"content"}
            value={this.state.content}
            label={"Contenu"}
            required
          />
        </form>
      </div>
    ) : null;
  }
}

export default BlogCreate;
