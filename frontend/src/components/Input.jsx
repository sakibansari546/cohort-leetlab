import React from "react";

const Input = ({ label, icon, type, ...props }) => {
  return (
    <>
      <div>
        <div className="flex flex-col w-full">
          <label className="input ">
            {icon}
            <input className="w-70" type={type} {...props} required />
          </label>
        </div>
      </div>
    </>
  );
};

export default Input;
