import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { name, placeholder, setValue, value } = props;
  return (
    <div className="p-[15px] mt-[10px] mb-[10px] border">
      {/* <label>Username</label> */}
      <input
        name={name}
        placeholder={placeholder}
        className="outline-none"
        onChange={(e) => {
          setValue({ ...props.value, name: e.target.value });
        }}
      />
    </div>
  );
};

export default FormInput;
