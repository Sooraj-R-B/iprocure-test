"use client";
import { ChevronUpIcon } from "lucide-react";
import { useState } from "react";

export default function FilterSidebar({ filters, setFilters }) {
  const [expanded, setExpanded] = useState({
    businessType: false,
    category: false,
    subCategory: false
  });

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckbox = (section, value) => {
    setFilters((prev) => {
      const current = prev[section] || [];
      return {
        ...prev,
        [section]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      };
    });
  };

  const businessType = [
    { type: "All", t: 10 },
    { type: "Supplier", t: 10 },
    { type: "Service Provider", t: 20 },
    { type: "Manufacture", t: 30 },
    { type: "Distribution", t: 40 },
    { type: "Contract Services", t: 50 }
  ];

  const category = [
    { type: "General Civil Contracting", t: 20 },
    { type: "Utilities and Services", t: 30 },
    { type: "Earthworks and Site Preparation", t: 50 },
    { type: "Concrete Works", t: 40 },
    { type: "Steel and Structural Works", t: 10 },
    { type: "Masonry and Finishing Works", t: 40 }
  ];

  const subCategory = [
    { type: "Water Supply", t: 50 },
    { type: "Electrical", t: 40 },
    { type: "Sewerage Systems", t: 10 },
    { type: "Drainage Management", t: 40 }
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-[#140342] font-medium text-xl">Filters</h2>
        <button className="border border-[#F3F3F3] rounded-4xl px-5 py-2.5 cursor-pointer text-[#726C6C] hover:bg-[#304EA1] hover:text-white transition-all">
          Clear All
        </button>
      </div>
      <div className="space-y-6 border border-[#F3F3F3] rounded-2xl mt-[60px] p-4">
        <div className="border-b border-b-[#DDDDDD] pb-7">
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => toggleExpand("businessType")}
          >
            <h3 className="font-medium text-[#304EA1] text-xl">
              Business Type
            </h3>
            <ChevronUpIcon
              color="#304EA1"
              className={`transform transition-transform ${
                expanded.businessType ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          {expanded.businessType && (
            <>
              {businessType.map((item, i) => (
                <div
                  className="flex items-center justify-between text-[#304EA1] text-sm font-normal leading-7"
                  key={i}
                >
                  <label className="flex items-center space-x-2 mb-1">
                    <input
                      type="checkbox"
                      checked={filters.businessType.includes(item?.type)}
                      onChange={() =>
                        handleCheckbox("businessType", item?.type)
                      }
                    />
                    <span className="pl-2.5">{item?.type}</span>
                  </label>
                  <span>({item?.t})</span>
                </div>
              ))}
              <span className="text-[#4983FF] font-medium text-sm cursor-pointer underline">
                {expanded.businessType ? "Show more" : "Show less"}
              </span>
            </>
          )}
        </div>

        <div className="border-b border-b-[#DDDDDD] pb-7">
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => toggleExpand("category")}
          >
            <h3 className="font-medium text-[#304EA1] text-xl">Category</h3>
            <ChevronUpIcon
              color="#304EA1"
              className={`transform transition-transform ${
                expanded.category ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          {expanded.category && (
            <>
              {category.map((cat, i) => (
                <div
                  className="flex items-center justify-between text-[#304EA1] text-sm font-normal leading-7"
                  key={i}
                >
                  <label className="flex items-center space-x-2 mb-1">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(cat?.type)}
                      onChange={() => handleCheckbox("category", cat?.type)}
                    />
                    <span className="pl-2.5">{cat?.type}</span>
                  </label>
                  <span>({cat?.t})</span>
                </div>
              ))}
              <span className="text-[#4983FF] font-medium text-sm cursor-pointer underline">
                {expanded.category ? "Show more" : "Show less"}
              </span>
            </>
          )}
        </div>

        <div className="border-b border-b-[#DDDDDD] pb-7">
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => toggleExpand("subCategory")}
          >
            <h3 className="font-medium text-[#304EA1] text-xl">Sub Category</h3>
            <ChevronUpIcon
              color="#304EA1"
              className={`transform transition-transform ${
                expanded.subCategory ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          {expanded.subCategory && (
            <>
              {subCategory.map((sub, i) => (
                <div
                  className="flex items-center justify-between text-[#304EA1] text-sm font-normal leading-7"
                  key={i}
                >
                  <label key={i} className="flex items-center space-x-2 mb-1">
                    <input
                      type="checkbox"
                      checked={filters.subCategory.includes(sub?.type)}
                      onChange={() => handleCheckbox("subCategory", sub?.type)}
                    />
                    <span className="pl-2.5">{sub?.type}</span>
                  </label>
                  <span>({sub?.t})</span>
                </div>
              ))}
              <span className="text-[#4983FF] font-medium text-sm pb-7 cursor-pointer underline">
                {expanded.subCategory ? "Show more" : "Show less"}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
