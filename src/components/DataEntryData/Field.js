import React, { useState } from "react";
import { firestore, doc, collection, setDoc } from "../../firebase";

const Field = () => {
    const [farmId, setFarmId] = useState("");
  const [customId, setCustomId] = useState("");
  const [location, setLocation] = useState("");
  const [areaSize, setAreaSize] = useState("");
  const [personInCharge, setPersonInCharge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", farmId);
      const fieldCollectionRef = collection(farmDocRef, "Field");
      await setDoc(doc(fieldCollectionRef, customId), {
        location,
        areaSize,
        personInCharge,
      });
      console.log("Field document created with custom ID: ", customId);
      // Reset the form
      setFarmId("");
      setCustomId("");
      setLocation("");
      setAreaSize("");
      setPersonInCharge("");
    } catch (error) {
      console.error("Error adding Field document: ", error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-200 p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="farmId" className="block mb-2">
          Farm ID:
          <input
            type="text"
            id="farmId"
            value={farmId}
            onChange={(e) => setFarmId(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label htmlFor="customId" className="block mb-2">
          Custom ID:
          <input
            type="text"
            id="customId"
            value={customId}
            onChange={(e) => setCustomId(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label htmlFor="location" className="block mb-2">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label htmlFor="areaSize" className="block mb-2">
          Area Size (HCR):
          <input
            type="number"
            id="areaSize"
            value={areaSize}
            onChange={(e) => setAreaSize(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label htmlFor="personInCharge" className="block mb-2">
          Person in Charge:
          <input
            type="text"
            id="personInCharge"
            value={personInCharge}
            onChange={(e) => setPersonInCharge(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4"
        >
          Create Field
        </button>
      </form>
    </div>
  );
};

export default Field;
