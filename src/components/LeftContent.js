import React from "react";
import { ArrowRight } from "react-feather";

const LeftContent = () => {
  return (
    <div className="p-4 h-96 overflow-hidden border-t-2 border-b-2">
      <div>
        <div className="flex items-end bg-gray-200 rounded-md p-2">
          <h1 className="text-xl font-semibold ">Advertisement is Open!!!</h1>
        </div>
        <div className="mt-4 cursor-pointer ">
          <p className="text-gray-500 text-left text-sm">
            Gather this oppertunity to grasp a 50% discount on advertising your
            products here on our page.
          </p>
          <div className="flex mt-4">
            <a href="/" className="mr-4 font-semibold">
              CONTACT US
            </a>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-end bg-gray-200 rounded-md p-2 ">
          <h1 className="text-xl font-semibold ">Trendig News</h1>
        </div>
        <div className="mt-4 cursor-pointer ">
          <p className="text-gray-500 text-left text-sm">
            Read the top Trending news 24/7. Check out us on YouTube, PlayStore
            and Appstore.
          </p>
          <div className="flex mt-4">
            <a href="/" className="mr-4 font-semibold">
              VISIT US
            </a>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
