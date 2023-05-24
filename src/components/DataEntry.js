import React, { useState } from "react";
import { firestore, collection, addDoc } from "../firebase";

const DataEntry = () => {
  const [activeForm, setActiveForm] = useState(""); // State to track the active form

  const [biologyBalanceValues, setBiologyBalanceValues] = useState({
    activePhotosynthesisBacteria: "",
    activeYeasts: "",
    totalLacticAcidBacteria: "",
    activeActinomycetes: "",
    activeFungi: "",
    celluloseUtilisers: "",
  });

  const [treeValues, setTreeValues] = useState({
    dbh: "",
    freshWeight: "",
    dryWeight: "",
  });

  const [paddyGrainValues, setPaddyGrainValues] = useState({
    tillerCount: "",
    grainPerTiller: "",
    grainWeight: "",
    screeningPercentage: "",
    emptyHuskPercentage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (activeForm === "BiologyBalance") {
      setBiologyBalanceValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else if (activeForm === "Tree") {
      setTreeValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else if (activeForm === "PaddyGrain") {
      setPaddyGrainValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let collectionName = "";
      let formValues = {};

      if (activeForm === "BiologyBalance") {
        collectionName = "BiologyBalance";
        formValues = biologyBalanceValues;
      } else if (activeForm === "Tree") {
        collectionName = "Tree";
        formValues = treeValues;
      } else if (activeForm === "PaddyGrain") {
        collectionName = "PaddyGrain";
        formValues = paddyGrainValues;
      }

      // Store values in Firestore
      const collectionRef = collection(firestore, collectionName);
      await addDoc(collectionRef, formValues);

      console.log(`${activeForm} data successfully stored in Firestore!`);
      // Reset form values based on the active form
      if (activeForm === "BiologyBalance") {
        setBiologyBalanceValues({
          activePhotosynthesisBacteria: "",
          activeYeasts: "",
          totalLacticAcidBacteria: "",
          activeActinomycetes: "",
          activeFungi: "",
          celluloseUtilisers: "",
        });
      } else if (activeForm === "Tree") {
        setTreeValues({
          dbh: "",
          freshWeight: "",
          dryWeight: "",
        });
      } else if (activeForm === "PaddyGrain") {
        setPaddyGrainValues({
          tillerCount: "",
          grainPerTiller: "",
          grainWeight: "",
          screeningPercentage: "",
          emptyHuskPercentage: "",
        });
      }
    } catch (error) {
      console.error(`Error storing ${activeForm} data in Firestore:`, error);
    }
  };

  const handleFilterChange = (event) => {
    setActiveForm(event.target.value);
  };

  const renderForm = () => {
    if (activeForm === "BiologyBalance") {
      return (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="font-bold">Biology Balance</h1>
            <label
              htmlFor="activePhotosynthesisBacteria"
              className="mb-2 block"
            >
              Active Photosynthesis Bacteria
            </label>
            <input
              type="text"
              id="activePhotosynthesisBacteria"
              name="activePhotosynthesisBacteria"
              value={biologyBalanceValues.activePhotosynthesisBacteria}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="activeYeasts" className="mb-2 block">
              Active Yeasts
            </label>
            <input
              type="text"
              id="activeYeasts"
              name="activeYeasts"
              value={biologyBalanceValues.activeYeasts}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="totalLacticAcidBacteria" className="mb-2 block">
              Total Lactic Acid Bacteria
            </label>
            <input
              type="text"
              id="totalLacticAcidBacteria"
              name="totalLacticAcidBacteria"
              value={biologyBalanceValues.totalLacticAcidBacteria}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="activeActinomycetes" className="mb-2 block">
              Active Actinomycetes
            </label>
            <input
              type="text"
              id="activeActinomycetes"
              name="activeActinomycetes"
              value={biologyBalanceValues.activeActinomycetes}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="activeFungi" className="mb-2 block">
              Active Fungi
            </label>
            <input
              type="text"
              id="activeFungi"
              name="activeFungi"
              value={biologyBalanceValues.activeFungi}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="celluloseUtilisers" className="mb-2 block">
              Cellulose Utilisers
            </label>
            <input
              type="text"
              id="celluloseUtilisers"
              name="celluloseUtilisers"
              value={biologyBalanceValues.celluloseUtilisers}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>{" "}
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Submit Biology Balance
          </button>
        </form>
      );
    } else if (activeForm === "Tree") {
      return (
        <form onSubmit={handleSubmit}>
          {/* Tree fields */}
          <div className="mb-4">
            <h1 className="font-bold">Tree</h1>
            <label htmlFor="dbh" className="mb-2 block">
              Diameter at Breast Height (DBH)
            </label>
            <input
              type="text"
              id="dbh"
              name="dbh"
              value={treeValues.dbh}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="freshWeight" className="mb-2 block">
              Fresh Weight (1cm3 in g)
            </label>
            <input
              type="text"
              id="freshWeight"
              name="freshWeight"
              value={treeValues.freshWeight}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dryWeight" className="mb-2 block">
              Dry Weight (1cm3 in g)
            </label>
            <input
              type="text"
              id="dryWeight"
              name="dryWeight"
              value={treeValues.dryWeight}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>{" "}
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Submit Tree
          </button>
        </form>
      );
    } else if (activeForm === "PaddyGrain") {
      return (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="font-bold">Paddy Grain</h1>
            <label htmlFor="tillerCount" className="mb-2 block">
              Tiller (Count)
            </label>
            <input
              type="text"
              id="tillerCount"
              name="tillerCount"
              value={paddyGrainValues.tillerCount}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grainPerTiller" className="mb-2 block">
              Number of Grain per Tiller
            </label>
            <input
              type="text"
              id="grainPerTiller"
              name="grainPerTiller"
              value={paddyGrainValues.grainPerTiller}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grainWeight" className="mb-2 block">
              1000 Grain Weight (g)
            </label>
            <input
              type="text"
              id="grainWeight"
              name="grainWeight"
              value={paddyGrainValues.grainWeight}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="screeningPercentage" className="mb-2 block">
              Screening (%)
            </label>
            <input
              type="text"
              id="screeningPercentage"
              name="screeningPercentage"
              value={paddyGrainValues.screeningPercentage}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="emptyHuskPercentage" className="mb-2 block">
              Empty/Immature Husk (%)
            </label>
            <input
              type="text"
              id="emptyHuskPercentage"
              name="emptyHuskPercentage"
              value={paddyGrainValues.emptyHuskPercentage}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Submit Paddy Grain
          </button>
        </form>
      );
    } else {
      return null; // No form selected
    }
  };

  return (
    <div className="mx-auto max-w-md bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Entry</h2>
      <div className="mb-4">
        <label className="mb-2 block font-bold">Select Form:</label>
        <select
          value={activeForm}
          onChange={handleFilterChange}
          className="w-full border border-gray-300 p-2"
        >
          <option value="">Select Form</option>
          <option value="BiologyBalance">Biology Balance</option>
          <option value="Tree">Tree</option>
          <option value="PaddyGrain">Paddy Grain</option>
        </select>
      </div>
      {renderForm()}
    </div>
  );
};

export default DataEntry;
