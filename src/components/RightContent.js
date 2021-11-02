import React from "react";

const RightContent = () => {
  return (
    <div className="p-4  overflow-hidden border-t-2 border-b-2">
      <div className=" border-2 border-black text-center rounded-md p-4 mb-8">
        <p className="font-semibold">Download the official app</p>
        <div className="flex flex-col ">
          <p className="text-gray-500 text-sm mt-2">
            Check out the mobile application on both Android and IOS
          </p>
          <button className="bg-black text-white px-4 py-1 mt-4 rounded-md">
            Download
          </button>
        </div>
      </div>

      <div className="bg-green-300 text-center rounded-md p-4">
        <p className="">Subscribe to the news letter</p>
        <div className="flex flex-col mt-4">
          <input
            className="px-4 py-1 outline-none rounded-md"
            type="text"
            placeholder="Email"
          />
          <button className="bg-black text-white px-4 py-1 mt-4 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
