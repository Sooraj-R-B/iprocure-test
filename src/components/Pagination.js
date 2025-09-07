"use client";
import { useState } from "react";

const Pagination = ({ totalPages = 7, className }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div
      className={`${
        className ? className : ""
      } flex items-center space-x-2 justify-center mt-6`}
    >
      {/* Previous */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage !== 1 ? `cursor-pointer` : ``
        } px-3 py-1 border border-[#8699B8] rounded text-[#8699B8] disabled:opacity-50`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded cursor-pointer ${
            currentPage === page
              ? "bg-[#E8E6F9] text-[#1D364D] border-[#F4E8F3]"
              : "border-[#F3F3F3] text-[#667085] hover:bg-[#F3F4F6]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage !== totalPages ? `cursor-pointer` : ``
        } px-3 py-1 border border-[#8699B8] rounded text-[#8699B8] disabled:opacity-50`}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
