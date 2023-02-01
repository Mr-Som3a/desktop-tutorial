import React from "react";

const Input = ({ type, name, label, value = "", onChange }) => {
  if (type === "hidden") {
    return <input name={name} onChange={onChange} value={value} className="form-control" type={type} id={name} />;
  } else {
    return (
      <div className="col-md-4">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input name={name} onChange={onChange} value={value} className="form-control" type={type} id={name} />
      </div>
    );
  }
};
export default Input;
