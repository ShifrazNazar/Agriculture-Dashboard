import React, { useState } from "react";
import { firestore, doc, setDoc } from "../../firebase";

const Farm = () => {
    const [customId, setCustomId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [personInCharge, setPersonInCharge] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [totalYield, setTotalYield] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", customId);
      await setDoc(farmDocRef, {
        name,
        location,
        address,
        createDate: new Date(),
        personInCharge,
        totalArea,
        totalYield,
      });
      console.log("Document written with ID: ", customId);
      // Reset the form
      setCustomId("");
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
    <div className="bg-white dark:bg-gray-200 p-4">
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="name" className="block mb-2">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <label htmlFor="address" className="block mb-2">
          Address:
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
        <label htmlFor="totalArea" className="block mb-2">
          Total Area:
          <input
            type="number"
            id="totalArea"
            value={totalArea}
            onChange={(e) => setTotalArea(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label htmlFor="totalYield" className="block mb-2">
          Total Yield:
          <input
            type="number"
            id="totalYield"
            value={totalYield}
            onChange={(e) => setTotalYield(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4"
        >
          Create Farm
        </button>
      </form>
    </div>
  );
};

export default Farm;
