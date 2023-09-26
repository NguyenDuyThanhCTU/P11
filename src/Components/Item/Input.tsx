import React from "react";

const Input = ({ placeholder }: any) => {
  return (
    <div>
      <input
        type="text"
        className="outline-none border rounded-md p-2 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
