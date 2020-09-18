import React from "react";
import propTypes from "prop-types";

const Input = ({
  value,
  error,
  name,
  onChange,
  placeholder,
  labelName,
  inputClassName,
  type,
}) => {
  return (
    <div className="flex flex-col mb-4">
      {labelName && (
        <label
          htmlFor={name}
          className={[
            "text-lg mb-2",
            error ? "text-red-500" : "text-gray-900",
          ].join(" ")}
        >
          {labelName}
        </label>
      )}
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={[
          "bg-white focus:outline-none border px-6 py-3 w-full border-gray-600  rounded-md",
          error
            ? " border-red-500 text-red-500"
            : "text-gray-600 focus:border-teal-500 border-gray-600",
          inputClassName,
        ].join(" ")}
        value={value}
        placeholder={placeholder ?? "Please input placeholder"}
      />
      <span className="text-red-500 pt-2">{error}</span>
    </div>
  );
};

Input.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.oneOf(["text", "email", "password"]),
  onChange: propTypes.func.isRequired,
  error: propTypes.string,
  placeholder: propTypes.string,
  labelName: propTypes.string,
  inputClassName: propTypes.string,
};

export default Input;
