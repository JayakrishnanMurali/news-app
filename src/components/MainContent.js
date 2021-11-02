import React from "react";
import { News } from "./News";

const MainContent = () => {
  return (
    <div className="p-4 border-2 h-[30rem] overflow-y-scroll">
      <News />
      <News />
    </div>
  );
};

export default MainContent;
