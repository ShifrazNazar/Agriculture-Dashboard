import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MgtCustomer from "./MgtCustomer";
import MgtTeam from "./MgtTeam";
import DataViewer from "./DataViewer";
import DataEntry from "./DataEntry";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="manage-team" element={<MgtTeam />} />
            <Route path="manage-customer" element={<MgtCustomer />} />
            <Route path="data-viewer" element={<DataViewer />} />
            <Route path="data-entry" element={<DataEntry />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
