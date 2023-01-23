import React, { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import { SelectCropImages } from "../select-crop-images/select-crop-images";
import TextAreaInput from "../text-area-input/text-area-input";

import { NewPostContext } from "../../contexts/new-post.context";

import "./blog-create.scss";

export const BlogCreate = (props) => {
  const { title, content, files } = useContext(NewPostContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    //  [name]: value
  };

  const handleSubmit = () => {};

  return props.show ? (
    <div className="blog-create">
      <h2>Nouveau Post:</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          name={"title"}
          value={title}
          label={"Titre"}
          type={"text"}
          required
        />
        <SelectCropImages context={NewPostContext} />
        <TextAreaInput
          onChange={handleChange}
          name={"content"}
          value={content}
          label={"Contenu"}
          required
        />
      </form>
    </div>
  ) : null;
};
