
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {
  LayoutDashboard,
  Gauge,
  ClipboardCheck,
  NotebookPen,
  Import,
} from "lucide-react";
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
    <div className="flex">
      <div className="hidden sm:block sticky top-0 h-screen overflow-y-auto w-64 bg-gray-200">
        <Bar>
          <BarItem
            icon={<LayoutDashboard size={20} />}
            text={"Tasks"}
            path={"/"}
          />
          <BarItem
            icon={<Gauge size={20} />}
            text={"Important"}
            path={"/important"}
          />
          <BarItem
            icon={<ClipboardCheck size={20} />}
            text={"Completed"}
            path={"/completed"}
          />
          <BarItem
            icon={<NotebookPen size={20} />}
            text={"ToDo"}
            path={"/todo"}
          />
        </Bar>
      </div>
      <div className="flex-1 p-6 overflow-y-auto w-full min-h-screen">
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
