import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import SideNavbar from "./components/Navbar/SidebarNav";

function App() {
  return (
    <Router>
      <div className="page">
        <div className="page-main">
          {/* Sidebar menu */}
          <Sidebar></Sidebar>
        </div>
        <div className="app-content">
          <div className="app-main">
            <SideNavbar></SideNavbar>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
