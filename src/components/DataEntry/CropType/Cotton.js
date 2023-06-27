import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const Cotton = () => {
  const [cottonValues, setCottonValues] = useState({
    leafGrade: "",
    cottonColourGrade: "",
    strength: "",
    upperHalfMeanLength: "",
    lengthUniformityIndex: "",
    micronaire: "",
    shortFiberIndex: "",
    fiberLength: "",
    trash: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCottonValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Cotton");
      await addDoc(collectionRef, cottonValues);
      console.log("Cotton data successfully stored in Firestore!");
      // Reset form values
      setCottonValues({
        leafGrade: "",
        cottonColourGrade: "",
        strength: "",
        upperHalfMeanLength: "",
        lengthUniformityIndex: "",
        micronaire: "",
        shortFiberIndex: "",
        fiberLength: "",
        trash: "",
      });
    } catch (error) {
      console.error("Error storing cotton data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="leafGrade" className="mb-2 block">
            Leaf Grade
          </label>
          <input
            type="text"
            id="leafGrade"
            name="leafGrade"
            value={cottonValues.leafGrade}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cottonColourGrade" className="mb-2 block">
            Cotton Colour Grade
          </label>
          <input
            type="text"
            id="cottonColourGrade"
            name="cottonColourGrade"
            value={cottonValues.cottonColourGrade}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="strength" className="mb-2 block">
            Strength (g/tex)
          </label>
          <input
            type="text"
            id="strength"
            name="strength"
            value={cottonValues.strength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="upperHalfMeanLength" className="mb-2 block">
            Upper Half Mean Length (inches)
          </label>
          <input
            type="text"
            id="upperHalfMeanLength"
            name="upperHalfMeanLength"
            value={cottonValues.upperHalfMeanLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lengthUniformityIndex" className="mb-2 block">
            Length Uniformity Index (%)
          </label>
          <input
            type="text"
            id="lengthUniformityIndex"
            name="lengthUniformityIndex"
            value={cottonValues.lengthUniformityIndex}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="micronaire" className="mb-2 block">
            Micronaire
          </label>
          <input
            type="text"
            id="micronaire"
            name="micronaire"
            value={cottonValues.micronaire}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortFiberIndex" className="mb-2 block">
            Short Fiber Index
          </label>
          <input
            type="text"
            id="shortFiberIndex"
            name="shortFiberIndex"
            value={cottonValues.shortFiberIndex}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fiberLength" className="mb-2 block">
            Fiber Length
          </label>
          <input
            type="text"
            id="fiberLength"
            name="fiberLength"
            value={cottonValues.fiberLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trash" className="mb-2 block">
            Trash
          </label>
          <input
            type="text"
            id="trash"
            name="trash"
            value={cottonValues.trash}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Cotton
      </button>
    </form>
  );
};

export default Cotton;
