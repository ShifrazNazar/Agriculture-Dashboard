import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const PaddyGrain = () => {
  const [paddyGrainValues, setPaddyGrainValues] = useState({
    tillerCount: "",
    grainPerTiller: "",
    grainWeight: "",
    screeningPercentage: "",
    emptyHuskPercentage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaddyGrainValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "PaddyGrain");
      await addDoc(collectionRef, paddyGrainValues);
      console.log("Paddy grain data successfully stored in Firestore!");
      // Reset form values
      setPaddyGrainValues({
        tillerCount: "",
        grainPerTiller: "",
        grainWeight: "",
        screeningPercentage: "",
        emptyHuskPercentage: "",
      });
    } catch (error) {
      console.error("Error storing paddy grain data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="tillerCount" className="mb-2 block">
            Tiller (Count)
          </label>
          <input
            type="text"
            id="tillerCount"
            name="tillerCount"
            value={paddyGrainValues.tillerCount}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grainPerTiller" className="mb-2 block">
            Number of Grain per Tiller
          </label>
          <input
            type="text"
            id="grainPerTiller"
            name="grainPerTiller"
            value={paddyGrainValues.grainPerTiller}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grainWeight" className="mb-2 block">
            1000 Grain Weight (g)
          </label>
          <input
            type="text"
            id="grainWeight"
            name="grainWeight"
            value={paddyGrainValues.grainWeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="screeningPercentage" className="mb-2 block">
            Screening (%)
          </label>
          <input
            type="text"
            id="screeningPercentage"
            name="screeningPercentage"
            value={paddyGrainValues.screeningPercentage}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emptyHuskPercentage" className="mb-2 block">
            Empty/Immature Husk (%)
          </label>
          <input
            type="text"
            id="emptyHuskPercentage"
            name="emptyHuskPercentage"
            value={paddyGrainValues.emptyHuskPercentage}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Paddy Grain
      </button>
    </form>
  );
};

export default PaddyGrain;
