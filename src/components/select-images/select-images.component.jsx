import React from "react";

import { useState } from "react";

import "./select-images.styles.scss";

export const SelectImages = ({ onChange }) => {
  /* Props:
onChange(required): function that returns file's data to parent component
*/
  const [files, setFiles] = useState([]);

  const onSelect = (e) => {
    let newFiles = files;
    const selectedFiles = [...e.target.files];

    selectedFiles.forEach((file) => {
      file.URL = URL.createObjectURL(file);
      newFiles.push(file);
    });
    setFiles(newFiles);
    onChange(newFiles);
  };

  return (
    <div className="select-images-container">
      <label className="select-image-label">
        Sélectionnez une ou plusieurs image sà importer:
      </label>
      <input
        className="select-images-input"
        type="file"
        multiple
        accept="image/*"
        onChange={onSelect}
      />
    </div>
  );
};
