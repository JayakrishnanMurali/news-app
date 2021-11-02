import React from "react";

export const Search = () => {
  return (
    <div className="mt-24  sm:mt-40 sm:pt-4 sm:flex justify-center items-center ">
      <div>
        {/* Implemented Country Filter inplace of Language Filter because different langauge API call was not returning any response due to limited availability of API */}

        <select
          name="countries"
          id=""
          className="cursor-pointer outline-none text-gray-500 ml-4 sm:ml-0"
        >
          <option defaultValue value="in">
            India
          </option>
          <option value="us">USA</option>
          <option value="ae">UAE</option>
          <option value="ua">Ukraine</option>
        </select>
      </div>
      <div className="ml-4 sm:mt-0 mt-4 flex flex-col sm:block">
        <input
          className="border-b-2 sm:mr-8 outline-none p-1 text-gray-500"
          type="text"
          placeholder="Search here..."
        />
        <button className="mt-4 sm:mt-0 bg-gray-900 text-white px-4 py-1 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-700">
          Search
        </button>
      </div>
    </div>
  );
};
