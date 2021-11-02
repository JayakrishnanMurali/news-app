import React from "react";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import MainContent from "./components/MainContent";
import RightContent from "./components/RightContent";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="px-8 py-4">
      <Header />
      <Search />
      <div className="grid grid-cols-5 mt-8 gap-4">
        <div className="">
          <LeftContent />
        </div>
        <div className="col-span-3">
          <MainContent />
        </div>
        <div>
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default App;
