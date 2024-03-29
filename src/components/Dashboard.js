import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "../global/Sidebar";
import Dashboard2 from "../scenes/dashboard/index";
import Bar from "../scenes/bar/index";
import Pie from "../scenes/pie/index";
import Line from "../scenes/line/index";
import FAQ from "../scenes/faq/index";
import Geography from "../scenes/geography/index";
import Contacts from "../scenes/contacts/index";
import Invoices from "../scenes/invoices/index";
import Form from "../scenes/form/index";
import InventoryControl from "./InventoryControl";
import Customers from "../scenes/customers/index";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className=" h-full w-4/5">
          <Routes>
            <Route path="/" element={<Dashboard2 />} />
            <Route path="customers" element={<Customers />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="form" element={<Form />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />
            <Route path="line" element={<Line />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="geography" element={<Geography />} />
            <Route path="inventory" element={<InventoryControl />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
