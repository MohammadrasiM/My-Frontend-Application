import React from "react";
import { Field } from "formik";
interface InputProps {
  label?: string;
  name?: string;
  type?: string;

  divclass?: string;
}
function Input({ label, name, type, divclass }: InputProps) {
  return (
    <div className={divclass}>
      <label className="uppercase text-sm py-2">{label}</label>
      <Field
        id={name}
        name={name}
        type={type}
        className="border-2 rounded-lg p-3 flex border-gray-300"
      />
    </div>
  );
}

export default Input;
