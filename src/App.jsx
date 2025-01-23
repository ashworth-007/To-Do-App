import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LayoutDashboard, Gauge, ClipboardCheck, NotebookPen } from "lucide-react";
import Bar, { BarItem } from "./components/Bar";
import Todo from "./pages/Todo";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import MobileHeader from "./components/MobileHeader";

const App = () => {
  const mobileMenuRef = useRef();
  const [showMobileMainDropdown, setShowMobileMainDropdown] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!mobileMenuRef.current.contains(e.target)) {
        console.log(mobileMenuRef);
        setShowMobileMainDropdown(false);
      }
    };

    if (showMobileMainDropdown) {
      document.addEventListener("mousedown", handler);
    } else {
      document.removeEventListener("mousedown", handler);
    }
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [showMobileMainDropdown]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Horizontal Bar (Top Bar) */}
      <div className="w-full bg-gray-200 shadow-md sm:block hidden">
        <div className="flex justify-between items-center p-4">
          <div className="font-semibold text-gray-700 text-2xl">To Do App</div>
          <div className="flex space-x-6">
            <BarItem
              text={"Tasks"}
              path={"/"}
            />
            <BarItem
              text={"Important"}
              path={"/important"}
            />
            <BarItem
              text={"Completed"}
              path={"/completed"}
            />
            <BarItem
              text={"ToDo"}
              path={"/todo"}
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto w-full">
        <MobileHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
