import React from "react";
import { ArrowRight } from "react-feather";

const LeftContent = () => {
  return (
    <div className="p-4 h-96 overflow-hidden border-t-2 border-b-2">
      <div className="flex items-end">
        <h1 className="text-xl font-semibold ">Captian To Retire</h1>
        <img
          className="object-cover w-32 h-36"
          src="https://c.ndtvimg.com/2021-11/p02dkegg_virat-kohli-afp_625x300_01_November_21.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 cursor-pointer ">
        <p className="text-gray-500 text-left text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          officiis sapiente eligendi quo. Magnam porro nisi at quas perferendis
          deleniti quo assumenda modi quaerat?
        </p>
        <div className="flex mt-4">
          <a href="/" className="mr-4 font-semibold">
            READ MORE
          </a>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
