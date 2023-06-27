import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const ChineseCabbage = () => {
  const [cabbageValues, setCabbageValues] = useState({
    developmentDegree: "",
    grossWeightPerPlant: "",
    netWeightPerPlant: "",
    cabbageHeartHeight: "",
    innerShrinkingDiameter: "",
    softLeafRate: "",
    plantingQuantity: "",
    headFormingRate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCabbageValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "ChineseCabbage");
      await addDoc(collectionRef, cabbageValues);
      console.log("Chinese cabbage data successfully stored in Firestore!");
      // Reset form values
      setCabbageValues({
        developmentDegree: "",
        grossWeightPerPlant: "",
        netWeightPerPlant: "",
        cabbageHeartHeight: "",
        innerShrinkingDiameter: "",
        softLeafRate: "",
        plantingQuantity: "",
        headFormingRate: "",
      });
    } catch (error) {
      console.error("Error storing Chinese cabbage data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="developmentDegree" className="mb-2 block">
            Development Degree (cm × cm)
          </label>
          <input
            type="text"
            id="developmentDegree"
            name="developmentDegree"
            value={cabbageValues.developmentDegree}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grossWeightPerPlant" className="mb-2 block">
            Gross Weight per Plant (kg)
          </label>
          <input
            type="text"
            id="grossWeightPerPlant"
            name="grossWeightPerPlant"
            value={cabbageValues.grossWeightPerPlant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="netWeightPerPlant" className="mb-2 block">
            Net Weight per Plant (kg)
          </label>
          <input
            type="text"
            id="netWeightPerPlant"
            name="netWeightPerPlant"
            value={cabbageValues.netWeightPerPlant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cabbageHeartHeight" className="mb-2 block">
            Cabbage Heart Height (cm)
          </label>
          <input
            type="text"
            id="cabbageHeartHeight"
            name="cabbageHeartHeight"
            value={cabbageValues.cabbageHeartHeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="innerShrinkingDiameter" className="mb-2 block">
            Inner Shrinking Vertical & Horizontal Diameter (cm × cm)
          </label>
          <input
            type="text"
            id="innerShrinkingDiameter"
            name="innerShrinkingDiameter"
            value={cabbageValues.innerShrinkingDiameter}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="softLeafRate" className="mb-2 block">
            Soft Leaf Rate (%)
          </label>
          <input
            type="text"
            id="softLeafRate"
            name="softLeafRate"
            value={cabbageValues.softLeafRate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="plantingQuantity" className="mb-2 block">
            Planting Quantity (plant)
          </label>
          <input
            type="text"
            id="plantingQuantity"
            name="plantingQuantity"
            value={cabbageValues.plantingQuantity}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="headFormingRate" className="mb-2 block">
            Head-forming Rate (%)
          </label>
          <input
            type="text"
            id="headFormingRate"
            name="headFormingRate"
            value={cabbageValues.headFormingRate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="col-span-2 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Chinese Cabbage
      </button>
    </form>
  );
};

export default ChineseCabbage;
