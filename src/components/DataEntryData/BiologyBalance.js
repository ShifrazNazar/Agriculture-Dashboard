import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const BiologyBalanceForm = () => {
  const [biologyBalanceValues, setBiologyBalanceValues] = useState({
    activePhotosynthesisBacteria: "",
    activeYeasts: "",
    totalLacticAcidBacteria: "",
    activeActinomycetes: "",
    activeFungi: "",
    celluloseUtilisers: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBiologyBalanceValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "BiologyBalance");
      await addDoc(collectionRef, biologyBalanceValues);
      console.log("Biology Balance data successfully stored in Firestore!");
      // Reset form values
      setBiologyBalanceValues({
        activePhotosynthesisBacteria: "",
        activeYeasts: "",
        totalLacticAcidBacteria: "",
        activeActinomycetes: "",
        activeFungi: "",
        celluloseUtilisers: "",
      });
    } catch (error) {
      console.error("Error storing Biology Balance data in Firestore:", error);
    }
  };

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
};

export default BiologyBalanceForm;
