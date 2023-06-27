import React, { useState } from "react";
import { firestore, doc, setDoc } from "../../firebase";

const Farm = () => {
  const [farmId, setFarmId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [personInCharge, setPersonInCharge] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [totalYield, setTotalYield] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", farmId);
      await setDoc(farmDocRef, {
        name,
        location,
        address,
        createDate: new Date(),
        personInCharge,
        totalArea,
        totalYield,
      });
      console.log("Document written with ID: ", farmId);
      // Reset the form
      setFarmId("");
      setName("");
      setLocation("");
      setAddress("");
      setPersonInCharge("");
      setTotalArea("");
      setTotalYield("");
    } catch (error) {
      console.error("Error adding document: ", error);
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
        <label htmlFor="name" className="mb-2 block">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <label htmlFor="address" className="mb-2 block">
          Address:
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
        <label htmlFor="totalArea" className="mb-2 block">
          Total Area:
          <input
            type="number"
            id="totalArea"
            value={totalArea}
            onChange={(e) => setTotalArea(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="totalYield" className="mb-2 block">
          Total Yield:
          <input
            type="number"
            id="totalYield"
            value={totalYield}
            onChange={(e) => setTotalYield(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Create Farm
        </button>
      </form>
    </div>
  );
};

export default Farm;
