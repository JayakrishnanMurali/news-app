import React from "react";

export const News = ({ title, image, url, desc }) => {
  return (
    <div className="my-4 bg-gray-200 rounded-md p-4">
      <img
        className="object-cover h-32 sm:h-48 w-full rounded-md"
        src={image}
        alt=""
      />
      <h1 className="text-2xl font-semibold mt-4">{title}</h1>
      <p className="mt-1 text-gray-500">{desc}</p>
      <a
        href={url}
        target={"_blank"}
        rel="noreferrer"
        className="font-semibold"
      >
        ... READ MORE
      </a>
    </div>
  );
};
