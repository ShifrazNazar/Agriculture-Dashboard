import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Corn = () => {
  const [cornValues, setCornValues] = useState({
    grade: "",
    testWeight: "",
    damagedKernels: "",
    brokenAndForeignMaterial: "",
    heatDamagedKernels: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCornValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Corn");
      await addDoc(collectionRef, cornValues);
      console.log("Corn data successfully stored in Firestore!");
      // Reset form values
      setCornValues({
        grade: "",
        testWeight: "",
        damagedKernels: "",
        brokenAndForeignMaterial: "",
        heatDamagedKernels: "",
      });
    } catch (error) {
      console.error("Error storing corn data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h1 className="font-bold">Corn</h1>
        <label htmlFor="grade" className="mb-2 block">
          Grade
        </label>
        <input
          type="text"
          id="grade"
          name="grade"
          value={cornValues.grade}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="testWeight" className="mb-2 block">
          Minimum test weight per bushel (g)
        </label>
        <input
          type="text"
          id="testWeight"
          name="testWeight"
          value={cornValues.testWeight}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="damagedKernels" className="mb-2 block">
          Damaged kernels (%)
        </label>
        <input
          type="text"
          id="damagedKernels"
          name="damagedKernels"
          value={cornValues.damagedKernels}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="brokenAndForeignMaterial" className="mb-2 block">
          Broken Corn and Foreign material (%)
        </label>
        <input
          type="text"
          id="brokenAndForeignMaterial"
          name="brokenAndForeignMaterial"
          value={cornValues.brokenAndForeignMaterial}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="heatDamagedKernels" className="mb-2 block">
          Heat damaged kernels (%)
        </label>
        <input
          type="text"
          id="heatDamagedKernels"
          name="heatDamagedKernels"
          value={cornValues.heatDamagedKernels}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Corn
      </button>
    </form>
  );
};

export default Corn;
