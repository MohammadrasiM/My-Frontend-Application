import React from "react";
interface InputProps {
  label?: string;
}
function Input({ label }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="uppercase text-sm py-2">{label}</label>
      <input
        type="text"
        className="border-2 rounded-lg p-3 flex border-gray-300"
      />
    </div>
  );
}

export default Input;
