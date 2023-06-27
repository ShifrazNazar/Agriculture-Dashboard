import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const Sorghum = () => {
  const [sorghumValues, setSorghumValues] = useState({
    stalkNitrogen: "",
    stalkPhosphorus: "",
    stalkPotassium: "",
    grainNitrogen: "",
    grainPhosphorus: "",
    grainPotassium: "",
    amylopectin: "",
    tannin: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSorghumValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Sorghum");
      await addDoc(collectionRef, sorghumValues);
      console.log("Sorghum data successfully stored in Firestore!");
      // Reset form values
      setSorghumValues({
        stalkNitrogen: "",
        stalkPhosphorus: "",
        stalkPotassium: "",
        grainNitrogen: "",
        grainPhosphorus: "",
        grainPotassium: "",
        amylopectin: "",
        tannin: "",
      });
    } catch (error) {
      console.error("Error storing sorghum data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="stalkNitrogen" className="mb-2 block">
            Stalk Nitrogen (%)
          </label>
          <input
            type="text"
            id="stalkNitrogen"
            name="stalkNitrogen"
            value={sorghumValues.stalkNitrogen}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stalkPhosphorus" className="mb-2 block">
            Stalk Phosphorus (%)
          </label>
          <input
            type="text"
            id="stalkPhosphorus"
            name="stalkPhosphorus"
            value={sorghumValues.stalkPhosphorus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stalkPotassium" className="mb-2 block">
            Stalk Potassium (%)
          </label>
          <input
            type="text"
            id="stalkPotassium"
            name="stalkPotassium"
            value={sorghumValues.stalkPotassium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grainNitrogen" className="mb-2 block">
            Grain Nitrogen (%)
          </label>
          <input
            type="text"
            id="grainNitrogen"
            name="grainNitrogen"
            value={sorghumValues.grainNitrogen}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grainPhosphorus" className="mb-2 block">
            Grain Phosphorus (%)
          </label>
          <input
            type="text"
            id="grainPhosphorus"
            name="grainPhosphorus"
            value={sorghumValues.grainPhosphorus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grainPotassium" className="mb-2 block">
            Grain Potassium (%)
          </label>
          <input
            type="text"
            id="grainPotassium"
            name="grainPotassium"
            value={sorghumValues.grainPotassium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amylopectin" className="mb-2 block">
            Amylopectin (%)
          </label>
          <input
            type="text"
            id="amylopectin"
            name="amylopectin"
            value={sorghumValues.amylopectin}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tannin" className="mb-2 block">
            Tannin (%)
          </label>
          <input
            type="text"
            id="tannin"
            name="tannin"
            value={sorghumValues.tannin}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Sorghum
      </button>
    </form>
  );
};

export default Sorghum;
