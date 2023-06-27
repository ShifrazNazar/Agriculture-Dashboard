import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const WildCabbage = () => {
  const [cabbageValues, setCabbageValues] = useState({
    plantHeight: "",
    developmentDegree: "",
    maxOuterLeafWidth: "",
    ballDiameter: "",
    innerShrinkingDiameter: "",
    numOuterLeaves: "",
    grossWeight: "",
    netWeight: "",
    clubrootIncidence: "",
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
      const collectionRef = collection(firestore, "WildCabbage");
      await addDoc(collectionRef, cabbageValues);
      console.log("Wild Cabbage data successfully stored in Firestore!");
      // Reset form values
      setCabbageValues({
        plantHeight: "",
        developmentDegree: "",
        maxOuterLeafWidth: "",
        ballDiameter: "",
        innerShrinkingDiameter: "",
        numOuterLeaves: "",
        grossWeight: "",
        netWeight: "",
        clubrootIncidence: "",
      });
    } catch (error) {
      console.error("Error storing Wild Cabbage data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="plantHeight" className="mb-2 block">
            Plant Height (cm)
          </label>
          <input
            type="text"
            id="plantHeight"
            name="plantHeight"
            value={cabbageValues.plantHeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
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
          <label htmlFor="maxOuterLeafWidth" className="mb-2 block">
            Maximum Outer Leaf Width (cm × cm)
          </label>
          <input
            type="text"
            id="maxOuterLeafWidth"
            name="maxOuterLeafWidth"
            value={cabbageValues.maxOuterLeafWidth}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ballDiameter" className="mb-2 block">
            Vertical & Horizontal Diameter of Single Ball (cm × cm)
          </label>
          <input
            type="text"
            id="ballDiameter"
            name="ballDiameter"
            value={cabbageValues.ballDiameter}
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
          <label htmlFor="numOuterLeaves" className="mb-2 block">
            Number of Outer Leaves
          </label>
          <input
            type="text"
            id="numOuterLeaves"
            name="numOuterLeaves"
            value={cabbageValues.numOuterLeaves}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grossWeight" className="mb-2 block">
            Gross Weight per Plant (kg)
          </label>
          <input
            type="text"
            id="grossWeight"
            name="grossWeight"
            value={cabbageValues.grossWeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="netWeight" className="mb-2 block">
            Net Weight per Plant (kg)
          </label>
          <input
            type="text"
            id="netWeight"
            name="netWeight"
            value={cabbageValues.netWeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="clubrootIncidence" className="mb-2 block">
            Incidence of Clubroot Disease (%)
          </label>
          <input
            type="text"
            id="clubrootIncidence"
            name="clubrootIncidence"
            value={cabbageValues.clubrootIncidence}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="col-span-2 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Wild Cabbage
      </button>
    </form>
  );
};

export default WildCabbage;
