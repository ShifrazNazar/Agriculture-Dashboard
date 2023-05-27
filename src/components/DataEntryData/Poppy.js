import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Poppy = () => {
  const [poppyValues, setPoppyValues] = useState({
    alkaloid: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPoppyValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Poppy");
      await addDoc(collectionRef, poppyValues);
      console.log("Poppy data successfully stored in Firestore!");
      // Reset form values
      setPoppyValues({
        alkaloid: "",
      });
    } catch (error) {
      console.error("Error storing poppy data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div className="col-span-2 mb-4">
        <h1 className="font-bold">Poppy</h1>
      </div>
      <div className="mb-4">
        <label htmlFor="alkaloid" className="mb-2 block">
          Alkaloid (%)
        </label>
        <input
          type="text"
          id="alkaloid"
          name="alkaloid"
          value={poppyValues.alkaloid}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      {/* Additional input fields can be added here */}
      <div className="col-span-2">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit Poppy
        </button>
      </div>
    </form>
  );
};

export default Poppy;
