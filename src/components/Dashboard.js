import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "../global/Sidebar";
import MgtCustomer from "./MgtCustomer";
import MgtTeam from "./MgtTeam";
import DataViewer from "./DataViewer";
import DataEntry from "./DataEntry";
import Dashboard2 from "../scenes/dashboard/index";
import Bar from "../scenes/bar/index";
import Pie from "../scenes/pie/index";
import Line from "../scenes/line/index";
import FAQ from "../scenes/faq/index";
import Geography from "../scenes/geography/index";
import Team from "../scenes/team/index";
import Contacts from "../scenes/contacts/index";
import Invoices from "../scenes/invoices/index";
import Form from "../scenes/form/index";


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row bg-gray-100">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="h-screen w-4/5">
          <Routes>
            <Route path="/" element={<Dashboard2 />} />
            <Route path="manage-team" element={<MgtTeam />} />

            <Route path="manage-customer" element={<MgtCustomer />} />
            <Route path="data-viewer" element={<DataViewer />} />
            <Route path="data-entry" element={<DataEntry />} />
            <Route path="bar" element={<Bar />} />
            <Route path="team" element={<Team />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="form" element={<Form />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />
            <Route path="line" element={<Line />} />
            <Route path="faq" element={<FAQ />} />

            <Route path="geography" element={<Geography />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
