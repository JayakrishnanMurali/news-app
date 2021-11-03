import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchNews } from "../redux/news-slice";

export const Search = () => {
  const [searchBox, seetSearchBox] = useState("");
  const [language, setLanguage] = useState("en");
  const dispatch = useDispatch();
  const NEWS_API = process.env.REACT_APP_NEWS_API;

  const newsApiCall = async (searchBox, language) => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchBox}&language=${language}&apiKey=${NEWS_API}&sortBy=publishedAt`
    );
    dispatch(setSearchNews(data.articles));
  };

  const handleSearch = (searchBox, language) => {
    if (!searchBox) {
      return alert("Please enter any charecter in search feild!");
    }
    newsApiCall(searchBox, language);
  };

  // While using the search feature - Please try to search relevent
  // words.

  // For search results returning no output -  please refrain to search
  //  for particular charecter for getting to see the implementeed
  // functionality. Due to the limitation of API response
  // and Pagination feature some search response can be invalid.
  // for eg. Results wihtout image.

  return (
    <div className="mt-24  sm:mt-40 sm:pt-4 sm:flex justify-center items-center ">
      <div>
        <select
          name="countries"
          id=""
          onChange={(e) => setLanguage(e.target.value)}
          className="cursor-pointer outline-none text-gray-500 ml-4 sm:ml-0"
        >
          <option defaultValue value="en">
            English
          </option>
          <option value="ml">Malayalam</option>
          <option value="ar">Arab</option>
          <option value="de">German</option>
        </select>
      </div>
      <div className="ml-4 sm:mt-0 mt-4 flex flex-col sm:block">
        <input
          className="border-b-2 sm:mr-8 outline-none p-1 text-gray-500"
          type="text"
          placeholder="Search here..."
          value={searchBox}
          onChange={(e) => seetSearchBox(e.target.value)}
        />
        <button
          onClick={() => handleSearch(searchBox, language)}
          className="mt-4 sm:mt-0 bg-gray-900 text-white px-4 py-1 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};
