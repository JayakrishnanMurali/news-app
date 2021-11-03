import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [lat, setLatitude] = useState("");
  const [long, setLongitude] = useState("");
  const [weathers, setWeather] = useState();

  const WEATHER_API = process.env.REACT_APP_WEATHER_API;

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const storeGeoLocation = async () => {
    const {
      coords: { latitude, longitude },
    } = await getPosition();
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API}&units=metric`
    );
    setWeather(data);
  };

  useEffect(() => {
    storeGeoLocation();
    if (lat && long) {
      getWeather(lat, long);
    }
  }, [lat, long]);

  return (
    <div className="fixed  sm:h-36  z-40 w-full top-0 left-0 bg-white">
      <div className="mx-8 py-2 sm:py-9 border-b-2 flex items-center justify-between">
        <h1 className=" font-medium sm:text-2xl">JK.</h1>
        <div className="flex flex-col items-center py-">
          <h1 className="text-sm sm:text-2xl md:text-4xl font-bold border-2 border-black p-2">
            NEWS FACTORY
          </h1>
          <p className="text-sm sm:text-base mt-2 text-gray-500 text-md tracking-wide4">
            {today}
          </p>
        </div>
        <div>
          {weathers && (
            <div>
              <p className="text-sm sm:text-lg font-medium">Weather</p>
              <div>
                <p className="text-xs sm:text-base text-gray-500">
                  {weathers.weather[0].description}
                </p>
              </div>
              <div>
                <p className="hidden sm:block text-xs sm:text-base text-gray-500">
                  Temp: {weathers.main.temp}
                </p>
                <p className="text-xs sm:text-base text-gray-500">
                  Location: {weathers.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
