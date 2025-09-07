"use client";
import { useState } from "react";
import ProductList from "./ProductList";
import FilterSidebar from "./FilterSidebar";
import products from "@/data/products";
import Tabs from "./Tabs";
import SearchInputField from "./SearchInputField";
import SelectField from "./SelectField";
const ProductListWrapper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [filters, setFilters] = useState({
    businessType: [],
    category: [],
    subCategory: []
  });
  const [search, setSearch] = useState("");
  const [selectValue, setSelectValue] = useState("DESC");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectValue(e);
  };
  const options = [
    { label: "Latest", value: "DESC" },
    { label: "Oldest", value: "ASC" }
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1 p-4 flex flex-col">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>

      <div className="md:col-span-3 bg-white">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex md:flex-row flex-col items-center justify-between pt-8 pb-7">
          <p className="text-[#000000] font-semibold text-xs pb-3 md:pb-0">
            Showing Result for:
            <span className="text-[#304EA1]">
              {" "}
              Road alignment planning and design
            </span>
          </p>
          <div className="flex  md:flex-row flex-col items-center md:gap-11 gap-2 f">
            <SearchInputField
              value={search}
              onChange={handleSearchChange}
              className="flex-1 md:max-w-[118px]"
            />
            <SelectField
              value={selectValue}
              onChange={handleSelectChange}
              options={options}
              className="flex-1"
            />
          </div>
        </div>
        {activeTab === 0 ? (
          <ProductList products={products} filters={filters} />
        ) : (
          <div className="mt-6 text-gray-700">
            <p>Suppliers</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductListWrapper;
