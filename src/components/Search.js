import React from "react";

export const Search = () => {
  return (
    <div className="mt-40 pt-4 flex justify-center items-center ">
      <div>
        {/* Implemented Country Filter inplace of Language Filter because different langauge API call was not returning any response due to limited availability of API */}

        <select
          name="countries"
          id=""
          className="cursor-pointer outline-none text-gray-500"
        >
          <option selected value="in">
            India
          </option>
          <option value="us">USA</option>
          <option value="ae">UAE</option>
          <option value="ua">Ukraine</option>
        </select>
      </div>
      <div className="ml-4">
        <input
          className="border-b-2 mr-8 outline-none p-1 text-gray-500"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-gray-900 text-white px-4 py-1 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-700">
          Search
        </button>
      </div>
    </div>
  );
};
