import React from "react";

type InputFieldProps = {
  label: string;
  showIsNecessaryInput?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputField: React.FC<InputFieldProps> = ({
  label,
  showIsNecessaryInput = false,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col py-2">
      <label className="py-2 font-medium">{label}</label>
      <input
        className={`border p-3 ${showIsNecessaryInput ? "border-red-400" : ""}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
