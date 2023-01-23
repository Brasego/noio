import './crop-images.styles.scss';

import FormInput from '../form-input/form-input.component';
import { ImagePreview } from '../image-preview/image-preview.component';
import { useEffect } from 'react';

export const CropImages = ({ files, onCrop }) => {
  useEffect(() => {});
  const rename = (file) => {
    console.log(file);
  };

  return (
    <div className="crop-images-container">
      {files.length
        ? files.map((file, idx) => {
            return (
              <div className="crop-image-row" key={idx}>
                <ImagePreview
                  className="crop-image-preview"
                  ratio={1 / 1}
                  idx={idx}
                  URL={file.URL}
                  title={file.name}
                  onCrop={onCrop}
                />
                <FormInput
                  className="crop-image-input"
                  onChange={() => rename(file)}
                  label={`Renommer Image ${idx + 1}`}
                  name={file.name}
                  type={'text'}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
