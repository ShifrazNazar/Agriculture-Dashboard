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
      <div className="flex flex-row bg-gray-100">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-8">
                  <h1 className="text-3xl font-semibold mb-4">
                    Welcome to Dashboard
                  </h1>
                  <p className="text-gray-500">
                    Get started by selecting an option from the sidebar.
                  </p>

                </div>
              }
            />
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
