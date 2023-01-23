import React from "react";
import { useContext } from "react";

import { CropImages } from "../crop-images/crop-images.component";
import { SelectImages } from "../select-images/select-images.component";

import "./select-crop-images.scss";

export const SelectCropImages = ({ context }) => {
  let { files, setFiles, croppedFiles, setCroppedFiles } = useContext(context);

  //Gets selectImages files and stores it in the state
  const onSelect = (newFiles) => {
    setFiles(newFiles);
  };

  const onCrop = (croppedImage, idx) => {
    const prevFiles = croppedFiles;

    prevFiles[idx] = croppedImage;
    setCroppedFiles(prevFiles);
  };

  return (
    <div className="select-crop-images-container">
      <SelectImages onChange={onSelect} />
      {files.length ? <CropImages files={files} onCrop={onCrop} /> : null}
    </div>
  );
};
