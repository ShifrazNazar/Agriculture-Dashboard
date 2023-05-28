import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  return (
    <div className="h-screen border-r-2 p-4 ">
      <div className="py-2">
        <img
          className="h-12"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
      </div>
      <ul>
        <li>
          {/* HomeIcon added */}
          <Link
            className="text-gray-600 hover:text-gray-800 flex items-center"
            to="/dashboard"
          >
            <HomeIcon />
            <span className="ml-2">Home</span>

          </Link>
          <p className="mb-2 font-semibold text-gray-700">Management</p>
          <ul className="pl-4">
            <li>
              <Link
                className="text-gray-600 hover:text-gray-800"
                to="/dashboard/manage-team"
              >
                Manage Team
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-gray-800"
                to="/dashboard/manage-customer"
              >
                Manage Customer
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <p className="mb-2 font-semibold text-gray-700">Data</p>
          <ul className="pl-4">
            <li>
              <Link
                className="text-gray-600 hover:text-gray-800"
                to="/dashboard/data-entry"
              >
                Data Entry
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-gray-800"
                to="/dashboard/data-viewer"
              >
                Data Viewer
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
