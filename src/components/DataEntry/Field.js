import React, { useState } from "react";
import { firestore, doc, collection, setDoc } from "../../firebase";

const Field = () => {
  const [farmId, setFarmId] = useState("");
  const [fieldId, setFieldId] = useState("");
  const [location, setLocation] = useState("");
  const [areaSize, setAreaSize] = useState("");
  const [personInCharge, setPersonInCharge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", farmId);
      const fieldCollectionRef = collection(farmDocRef, "Field");
      await setDoc(doc(fieldCollectionRef, fieldId), {
        createDate: new Date(),
        location,
        areaSize,
        personInCharge,
      });
      console.log("Field document created with Field ID: ", fieldId);
      // Reset the form
      setFarmId("");
      setFieldId("");
      setLocation("");
      setAreaSize("");
      setPersonInCharge("");
    } catch (error) {
      console.error("Error adding Field document: ", error);
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
        <label htmlFor="location" className="mb-2 block">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="areaSize" className="mb-2 block">
          Area Size (HCR):
          <input
            type="number"
            id="areaSize"
            value={areaSize}
            onChange={(e) => setAreaSize(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="personInCharge" className="mb-2 block">
          Person in Charge:
          <input
            type="text"
            id="personInCharge"
            value={personInCharge}
            onChange={(e) => setPersonInCharge(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Create Field
        </button>
      </form>
    </div>
  );
};

export default Field;
