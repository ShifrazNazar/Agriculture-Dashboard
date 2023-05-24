import React, { useState } from "react";
import { firestore, collection, addDoc } from "../firebase";

const DataEntry = () => {
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
    setBiologyBalanceValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setTreeValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setPaddyGrainValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBiologyBalanceSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "BiologyBalance");
      await addDoc(collectionRef, biologyBalanceValues);

      console.log("Biology Balance data successfully stored in Firestore!");
      // Reset form values
      setBiologyBalanceValues((prevValues) => ({
        ...prevValues,
        activePhotosynthesisBacteria: "",
        activeYeasts: "",
        totalLacticAcidBacteria: "",
        activeActinomycetes: "",
        activeFungi: "",
        celluloseUtilisers: "",
      }));
    } catch (error) {
      console.error("Error storing Biology Balance data in Firestore:", error);
    }
  };

  const handleTreeSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Tree");
      await addDoc(collectionRef, treeValues);

      console.log("Tree data successfully stored in Firestore!");
      // Reset form values
      setTreeValues((prevValues) => ({
        ...prevValues,
        dbh: "",
        freshWeight: "",
        dryWeight: "",
      }));
    } catch (error) {
      console.error("Error storing Tree data in Firestore:", error);
    }
  };

  const handlePaddyGrainSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "PaddyGrain");
      await addDoc(collectionRef, paddyGrainValues);

      console.log("Paddy Grain data successfully stored in Firestore!");
      // Reset form values
      setPaddyGrainValues({
        tillerCount: "",
        grainPerTiller: "",
        grainWeight: "",
        screeningPercentage: "",
        emptyHuskPercentage: "",
      });
    } catch (error) {
      console.error("Error storing Paddy Grain data in Firestore:", error);
    }
  };

  return (
    <div className="mx-auto max-w-md bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Entry</h2>
      <form onSubmit={handleBiologyBalanceSubmit}>
        <div className="mb-4">
          <h1 className="font-bold">Biology Balance</h1>
          <label htmlFor="activePhotosynthesisBacteria" className="mb-2 block">
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
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
      <form onSubmit={handleTreeSubmit}>
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
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit Tree
        </button>
      </form>

      <form onSubmit={handlePaddyGrainSubmit}>
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
    </div>
  );
};

export default DataEntry;
