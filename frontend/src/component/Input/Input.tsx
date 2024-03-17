import React from "react";
type Props = {
  name: string;
};
const Input = ({ name }: Props) => {
  return (
    <div className="w-full mt-5">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-[#002559]"
      >
        {name}
      </label>
      <div className="mt-2">
        <input
          id="email"
          name={`${name}`}
          type="text"
          autoComplete={`${name}`}
          required
          placeholder={`${name}`}
          className="block w-full border-solid border-2 border-[#e8eae9] bg-[#e8eae9]"
        />
      </div>
    </div>
  );
};

export default Input;
