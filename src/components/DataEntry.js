import React, { useState } from "react";
import Farm from "./DataEntryData/Farm";
import Field from "./DataEntryData/Field";
import Harvest from "./DataEntryData/Harvest";
import Sowing from "./DataEntryData/Sowing";

const DataEntry = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="h-screen bg-gray-100 p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Entry</h2>
      <select
        className="bg-white text-gray-800 rounded-lg py-2 px-4 mb-2"
        onChange={(e) => handleSectionChange(e.target.value)}
        value={selectedSection || ""}
      >
        <option value="">Select a section</option>
        <option value="farm">Farm</option>
        <option value="field">Field</option>
        <option value="harvest">Harvest</option>
        <option value="sowing">Sowing</option>
      </select>

      {selectedSection === "farm" && <Farm />}
      {selectedSection === "field" && <Field />}
      {selectedSection === "harvest" && <Harvest />}
      {selectedSection === "sowing" && <Sowing />}
    </div>
  );
};

export default DataEntry;
