import React, { useState } from "react";
import { firestore, collection, addDoc } from "../firebase";

const DataEntry = () => {
  const [values, setValues] = useState({
    activePhotosynthesisBacteria: "",
    activeYeasts: "",
    totalLacticAcidBacteria: "",
    activeActinomycetes: "",
    activeFungi: "",
    celluloseUtilisers: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "BiologyBalance");
      await addDoc(collectionRef, values);

      console.log("Data successfully stored in Firestore!");
      // Reset form values
      setValues({
        activePhotosynthesisBacteria: "",
        activeYeasts: "",
        totalLacticAcidBacteria: "",
        activeActinomycetes: "",
        activeFungi: "",
        celluloseUtilisers: "",
      });
    } catch (error) {
      console.error("Error storing data in Firestore:", error);
    }
  };

  return (
    <div className="mx-auto max-w-md bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="activePhotosynthesisBacteria" className="mb-2 block">
            Active Photosynthesis Bacteria
          </label>
          <input
            type="text"
            id="activePhotosynthesisBacteria"
            name="activePhotosynthesisBacteria"
            value={values.activePhotosynthesisBacteria}
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
            value={values.activeYeasts}
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
            value={values.totalLacticAcidBacteria}
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
            value={values.activeActinomycetes}
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
            value={values.activeFungi}
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
            value={values.celluloseUtilisers}
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
    </div>
  );
};

export default DataEntry;
