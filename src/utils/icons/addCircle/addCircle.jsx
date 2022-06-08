import "./addCircle.scss";

const AddCircle = ({ onClick, size = "48" }) => {
  return (
    <span onClick={onClick} className={`material-icons add-circle md-${size}`}>
      add_circle
    </span>
  );
};

export default AddCircle;
