import React from "react";

const Pagination = ({ page, setPage, total }) => {
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-4">
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className={`px-4 py-2 rounded font-bold border transition-colors ${
          page === 1
            ? "border-gray-600 text-gray-600 cursor-not-allowed"
            : "border-white text-white hover:bg-white hover:text-black"
        }`}
      >
        Prev
      </button>

      <span className="text-white font-semibold text-lg">
        Page {page} / {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => setPage((prev) => prev + 1)}
        className={`px-4 py-2 rounded font-bold border transition-colors ${
          page >= totalPages
            ? "border-gray-600 text-gray-600 cursor-not-allowed"
            : "border-white text-white hover:bg-white hover:text-black"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
