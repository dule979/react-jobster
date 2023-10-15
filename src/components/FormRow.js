const FormRow = ({ name, value, type, onChangeValue, labelName }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelName || name}
      </label>
      <input
        id={name}
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
};
export default FormRow;
