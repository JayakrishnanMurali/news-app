import React from "react";
import { News } from "./News";

const MainContent = () => {
  return (
    // h-[30rem]
    <div className="p-4 border-2 h-96  overflow-y-scroll">
      <News />
      <News />
      <News />
      <News />
    </div>
  );
};

export default MainContent;
