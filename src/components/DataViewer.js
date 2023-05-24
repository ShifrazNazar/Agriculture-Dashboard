import React, { useState } from "react";
import { firestore, collection, getDocs } from "../firebase";

const DataEntry = () => {
  const [selectedCollection, setSelectedCollection] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  const handleFilterChange = (event) => {
    setSelectedCollection(event.target.value);
    setFilteredValues([]);
  };

  const handleFilterSubmit = async (event) => {
    event.preventDefault();

    try {
      // Retrieve values from Firestore for selected collection
      const collectionRef = collection(firestore, selectedCollection);
      const querySnapshot = await getDocs(collectionRef);
      const values = querySnapshot.docs.map((doc) => doc.data());
      setFilteredValues(values);
    } catch (error) {
      console.error(`Error retrieving ${selectedCollection} data from Firestore:`, error);
    }
  };

  return (
    <div className="mx-auto max-w-md bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Entry</h2>
      <form onSubmit={handleFilterSubmit}>
        <div className="mb-4">
          <label htmlFor="filterCollection" className="mb-2 block">
            Select a Collection
          </label>
          <select
            id="filterCollection"
            name="filterCollection"
            value={selectedCollection}
            onChange={handleFilterChange}
            className="w-full border border-gray-300 p-2"
          >
            <option value="">Please select an option</option>
            <option value="BiologyBalance">Biology Balance</option>
            <option value="Tree">Tree</option>
            <option value="PaddyGrain">Paddy Grain</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Filter
        </button>
      </form>
      {filteredValues.length > 0 && (
        <div>
          <h3 className="text-lg font-bold mt-4">Filtered Values</h3>
          <ul>
            {filteredValues.map((value, index) => (
              <li key={index}>
                <pre>{JSON.stringify(value, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataEntry;
