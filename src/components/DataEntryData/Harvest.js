import React, { useState } from "react";
import { firestore, doc, collection, setDoc } from "../../firebase";

const Harvest = () => {
  const [farmId, setFarmId] = useState("");
  const [fieldId, setFieldId] = useState("");
  const [harvestId, setHarvestId] = useState("");
  const [yieldQuantity, setYieldQuantity] = useState("");
  const [production, setProduction] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", farmId);
      const fieldDocRef = doc(farmDocRef, "Field", fieldId);
      const harvestCollectionRef = collection(fieldDocRef, "Harvest");
      await setDoc(doc(harvestCollectionRef, harvestId), {
        harvestId,
        createDate: new Date(),
        yieldQuantity,
        production,
      });
      console.log("Harvest document created with custom ID: ", harvestId);
      setFarmId("");
      setFieldId("");
      setHarvestId("");
      setYieldQuantity("");
      setProduction("");
    } catch (error) {
      console.error("Error adding Harvest document: ", error);
    }
  };

  return (
    <div className="bg-white p-4 dark:bg-gray-200">
      <form onSubmit={handleSubmit}>
        <label htmlFor="farmId" className="mb-2 block">
          Farm ID:
          <input
            type="text"
            id="farmId"
            value={farmId}
            onChange={(e) => setFarmId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="fieldId" className="mb-2 block">
          Field ID:
          <input
            type="text"
            id="fieldId"
            value={fieldId}
            onChange={(e) => setFieldId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="harvestId" className="mb-2 block">
          Harvest ID:
          <input
            type="text"
            id="harvestId"
            value={harvestId}
            onChange={(e) => setHarvestId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="yieldQuantity" className="mb-2 block">
          Yield (Quantity):
          <input
            type="text"
            id="yieldQuantity"
            value={yieldQuantity}
            onChange={(e) => setYieldQuantity(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="production" className="mb-2 block">
          Production:
          <input
            type="text"
            id="production"
            value={production}
            onChange={(e) => setProduction(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Create Harvest
        </button>
      </form>
    </div>
  );
};

export default Harvest;
