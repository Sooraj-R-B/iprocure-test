"use client";

export default function Tabs({ activeTab = 0, onTabChange }) {
  return (
    <div className="flex border-b border-gray-300">
      <button
        className={`tab cursor-pointer ${activeTab === 0 ? "active-tab" : ""}`}
        onClick={() => onTabChange(0)}
      >
        Products
      </button>
      <button
        className={`tab cursor-pointer ${activeTab === 1 ? "active-tab" : ""}`}
        onClick={() => onTabChange(1)}
      >
        Suppliers
      </button>
    </div>
  );
}
