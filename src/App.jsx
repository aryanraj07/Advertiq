import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Footer, Header } from "./layout";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="fixed bottom-2">
        <Footer />
      </div>
    </>
  );
}

export default App;
