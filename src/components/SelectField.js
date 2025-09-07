"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SelectField = ({ value, options, onChange, className }) => {
  const [open, setOpen] = useState(false);

  const selected = options?.find((opt) => opt.value === value);

  return (
    <div className="relative inline-block flex-1 w-full">
      {/*  */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between border border-gray-400 rounded-md px-3 py-1 bg-transparent text-sm text-[#6A6A6A] ${
          className ? className : ``
        }`}
      >
        {selected ? selected.label : "Select"}
        <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-black border border-gray-600 rounded-md shadow-lg z-10">
          {options?.map((opt) => (
            <div
              key={opt?.value}
              onClick={() => {
                onChange(opt?.value);
                setOpen(false);
              }}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-700 ${
                value === opt?.value ? "text-blue-400" : "text-gray-200"
              }`}
            >
              {opt?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SelectField;
