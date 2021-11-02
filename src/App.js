import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import MainContent from "./components/MainContent";
import RightContent from "./components/RightContent";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="px-8 py-4 h-screen overflow-hidden">
      <Header />
      <Search />
      <div className="lg:grid grid-cols-5 mt-8 gap-4">
        <div className="hidden lg:block">
          <LeftContent />
        </div>
        <div className="col-span-3">
          <MainContent />
        </div>
        <div className="hidden lg:block">
          <RightContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
