import React from "react";

const Select = ({ options }) => {
  console.log(options);
  return (
    <select className="border-[1px] border-gray-400  text-sm font-semibold text-gray-500 rounded-md">
      {options.map((option) => (
        <option value={option.name} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
