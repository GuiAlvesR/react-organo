import "./CampText.css";

const CampText = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onAlter(event.target.value);
  };

  return (
    <>
      <div className="camp-text">
        <label>{props.label}</label>
        <input
          value={props.value}
          onChange={onTyped}
          required={props.mandatory}
          type="text"
          placeholder={placeholderModified}
        />
      </div>
    </>
  );
};

export default CampText;
