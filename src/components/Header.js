import React from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var today = new Date();
const curMonth = monthNames[today.getMonth()];
const currDay = today.getDate();
const currYear = today.getFullYear();

today = curMonth + " " + currDay + ", " + currYear;

const Header = () => {
  console.log(today);
  return (
    <div className="fixed  h-36 border-b-2 z-40 w-full top-0 left-0 bg-white">
      <div className="mx-8 py-9  flex items-center justify-between">
        <h1 className=" font-medium text-2xl">JK.</h1>
        <div className="flex flex-col items-center py-">
          <h1 className="text-4xl font-bold border-2 border-black p-2">
            NEWS FACTORY
          </h1>
          <p className="mt-2 text-gray-500 text-md tracking-wide4">{today}</p>
        </div>
        <div>
          <p className="text-lg font-medium">Weather</p>
          <div>
            <p className="text-gray-500">Clear Sky</p>
            {/* Add cloud */}
          </div>
          <div>
            <p className="text-gray-500">temp: 282.55</p>
            {/* Add temp */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
