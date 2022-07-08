import React from "react";
import { Field } from "formik";
interface InputProps {
  label?: string;
  name?: string;

  divclass?: string;
}
function TextArea({ label, name, divclass }: InputProps) {
  return (
    <div className={divclass}>
      <label className="uppercase text-sm py-2">{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        rows={10}
        className="border-2 rounded-lg p-3  border-gray-300"
      />
    </div>
  );
}

export default TextArea;
