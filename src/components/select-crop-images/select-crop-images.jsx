import React from "react";

import { CropImages } from "../crop-images/crop-images.component";
import { SelectImages } from "../select-images/select-images.component";

import "./select-crop-images.scss";

export default class SelectCropImages extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
      croppedFiles: [],
    };
  }

  //Gets selectImages files and stores it in the state
  onSelect = (files) => {
    console.log(files);
    this.setState({ files: files }, () => {
      console.log(this.state);
    });
  };

  onCrop = (croppedImage, idx) => {
    this.setState((prevState) => {});
  };

  render() {
    return (
      <div className="select-crop-images-container">
        <SelectImages onChange={this.onSelect} />
        {this.state.files.length ? (
          <CropImages files={this.state.files} onCrop={this.onCrop} />
        ) : null}
      </div>
    );
  }
}
