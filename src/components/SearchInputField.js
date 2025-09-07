"use client";
import { Search } from "lucide-react";

const SearchInputField = ({
  value,
  onChange,
  placeholder = "Search",
  className
}) => {
  return (
    <div
      className={`relative flex w-full items-center border border-gray-400 rounded-md px-3 py-1 max-w-xs bg-transparent ${className}`}
    >
      <input
        type="text"
        value={value || ""}
        onChange={onChange || (() => {})}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm text-[#304EA1] placeholder-gray-400 pr-6"
      />
      <Search className="absolute right-3 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
};
export default SearchInputField;
