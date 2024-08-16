import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Footer, Header } from "./layout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
