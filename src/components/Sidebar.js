import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DatasetIcon from "@mui/icons-material/Dataset";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed h-screen overflow-y-auto border-r-2 bg-white py-5 pl-5 pr-16">
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block pl-4 md:pl-0 mt-4 md:mt-0`}
      >
        <div className="mb-4 flex items-center gap-2">
          <ManageAccountsIcon className="text-lg" />
          <p className="font-semibold text-gray-800">Management</p>
        </div>
        <div className="pl-4">
          <div className="my-3">
            <Link
              className="text-gray-600 hover:text-gray-800"
              to="/dashboard/manage-team"
            >
              Manage Team
            </Link>
          </div>
          <div className="my-3">
            <Link
              className="text-gray-600 hover:text-gray-800"
              to="/dashboard/manage-customer"
            >
              Manage Customer
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block pl-4 md:pl-0 mt-4 md:mt-0`}
      >
        <div className="my-4 flex items-center gap-2">
          <DatasetIcon className="text-lg" />
          <p className="font-semibold text-gray-800">Data</p>
        </div>
        <div className="pl-4">
          <div className="my-3">
            <Link
              className="my-2 text-gray-600 hover:text-gray-800"
              to="/dashboard/data-entry"
            >
              Data Entry
            </Link>
          </div>
          <div className="my-3">
            <Link
              className="my-2 text-gray-600 hover:text-gray-800"
              to="/dashboard/data-viewer"
            >
              Data Viewer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
