import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Sugarcane = () => {
  const [sugarcaneValues, setSugarcaneValues] = useState({
    sucroseContent: "",
    tonneCaneToTonneSugar: "",
    yield: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSugarcaneValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Sugarcane");
      await addDoc(collectionRef, sugarcaneValues);
      console.log("Sugarcane data successfully stored in Firestore!");
      // Reset form values
      setSugarcaneValues({
        sucroseContent: "",
        tonneCaneToTonneSugar: "",
        yield: "",
      });
    } catch (error) {
      console.error("Error storing sugarcane data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="font-bold">Sugarcane</h1>
        <div className="mb-4">
          <label htmlFor="sucroseContent" className="mb-2 block">
            Sucrose Content (Pol%)
          </label>
          <input
            type="text"
            id="sucroseContent"
            name="sucroseContent"
            value={sugarcaneValues.sucroseContent}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <label htmlFor="tonneCaneToTonneSugar" className="mb-2 block">
            Tonne Cane to Tonne Sugar (tcts)
          </label>
          <input
            type="text"
            id="tonneCaneToTonneSugar"
            name="tonneCaneToTonneSugar"
            value={sugarcaneValues.tonneCaneToTonneSugar}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="mb-4">
          <label htmlFor="yield" className="mb-2 block">
            Yield (tca t/ha)
          </label>
          <input
            type="text"
            id="yield"
            name="yield"
            value={sugarcaneValues.yield}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white col-span-2"
      >
        Submit Sugarcane
      </button>
    </form>
  );
};

export default Sugarcane;
