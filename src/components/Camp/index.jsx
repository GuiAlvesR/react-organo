import "./Camp.css";

const Camp = ({
  type = "text",
  label,
  value,
  placeholder,
  mandatory,
  onAlter,
}) => {
  const placeholderModified = `${placeholder}...`;

  const onTyped = (event) => {
    onAlter(event.target.value);
  };

  return (
    <div className={`camp camp-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onTyped}
        required={mandatory}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default Camp;
