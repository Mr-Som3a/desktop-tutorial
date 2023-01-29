import React from "react";

const Input = ({ type, name, label, value = null }) => {
  return (
    <div className="col-md-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input name={name} value={value} className="form-control" type={type} id={name} />
    </div>
  );
};
export default Input;
