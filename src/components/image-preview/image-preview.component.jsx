import Cropper from "react-cropper";

import "./image-preview.styles.scss";
import "cropperjs/dist/cropper.css";

export const ImagePreview = (props) => {
  const onCrop = (e) => {
    const imageElement = e.srcElement;
    // console.log(imageElement);
    const cropper = imageElement?.cropper;
    const croppedImage = cropper.getCroppedCanvas();
    props.onCrop(croppedImage, props.idx);
  };

  return (
    <div className={`${props.className} img-title-container`}>
      <Cropper
        className="preview-img"
        alt={`preview ${props.idx || props.idx === 0 ? props.idx + 1 : null}`}
        src={props.URL}
        style={{
          width: props.width ? props.width : "100%",
        }}
        //Cropper Options:
        aspectRatio={props.ratio ? props.ratio : null}
        cropend={(e) => onCrop(e)}
      />
      {props.title ? (
        <span className="preview-title">{props.title}</span>
      ) : null}
    </div>
  );
};
