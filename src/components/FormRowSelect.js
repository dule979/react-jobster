const FormRowSelect = ({ name, value, list, onChangeValue, labelName }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelName || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        value={value}
        onChange={onChangeValue}
      >
        {list.map((inputValue, index) => {
          return (
            <option key={index} value={inputValue}>
              {inputValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
