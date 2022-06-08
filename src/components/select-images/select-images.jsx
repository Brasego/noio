import React from "react";

import "./select-images.scss";

export const SelectImages = ({ onChange }) => {
  /* Props:
onChange(required): function to get data in parent's component
*/
  const onImageChange = (e) => {
    onChange([...e.target.files]);
  };

  return (
    <div className="select-images-container">
      <span className="select-image-label">
        Sélectionnez une ou plusieurs image sà importer:
      </span>
      <input
        className="select-images-input"
        type="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
    </div>
  );
};
