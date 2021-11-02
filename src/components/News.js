import React from "react";

export const News = () => {
  return (
    <div className="my-4 bg-gray-200 rounded-md p-4">
      <img
        className="object-cover h-32 sm:h-48 w-full rounded-md"
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Ground_Report-Kerala_Covid_1200x768.jpeg?cJNsARVUvYwt7zEY6PCdLTe52EB3DA_5&size=770:433"
        alt=""
      />
      <h1 className="text-2xl font-semibold mt-4">
        Covid 19 Cases Fall in Kerala
      </h1>
      <p className="mt-1 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde
        deserunt animi voluptates ullam aliquid a perferendis sed. Ab ducimus
        earum perferendis sequi nam.
      </p>
      <a href="/" className="font-semibold">
        ... READ MORE
      </a>
    </div>
  );
};
