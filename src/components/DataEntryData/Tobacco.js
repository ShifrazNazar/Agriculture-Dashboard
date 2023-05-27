import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Tobacco = () => {
  const [tobaccoValues, setTobaccoValues] = useState({
    ripeness: "",
    leafStructure: "",
    smokeIntensity: "",
    oilContent: "",
    colourIntensity: "",
    leafWidth: "",
    leafLength: "",
    uniformity: "",
    injury: "",
    topLeafCount: "",
    middleLeafCount: "",
    bottomLeafCount: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTobaccoValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Tobacco");
      await addDoc(collectionRef, tobaccoValues);
      console.log("Tobacco data successfully stored in Firestore!");
      // Reset form values
      setTobaccoValues({
        ripeness: "",
        leafStructure: "",
        smokeIntensity: "",
        oilContent: "",
        colourIntensity: "",
        leafWidth: "",
        leafLength: "",
        uniformity: "",
        injury: "",
        topLeafCount: "",
        middleLeafCount: "",
        bottomLeafCount: "",
      });
    } catch (error) {
      console.error("Error storing tobacco data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h1 className="font-bold">Tobacco</h1>
        <label htmlFor="ripeness" className="mb-2 block">
          Ripeness
        </label>
        <input
          type="text"
          id="ripeness"
          name="ripeness"
          value={tobaccoValues.ripeness}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="leafStructure" className="mb-2 block">
          Leaf Structure
        </label>
        <input
          type="text"
          id="leafStructure"
          name="leafStructure"
          value={tobaccoValues.leafStructure}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="smokeIntensity" className="mb-2 block">
          Smoke Intensity
        </label>
        <input
          type="text"
          id="smokeIntensity"
          name="smokeIntensity"
          value={tobaccoValues.smokeIntensity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="oilContent" className="mb-2 block">
          Oil Content
        </label>
        <input
          type="text"
          id="oilContent"
          name="oilContent"
          value={tobaccoValues.oilContent}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="colourIntensity" className="mb-2 block">
          Colour Intensity
        </label>
        <input
          type="text"
          id="colourIntensity"
          name="colourIntensity"
          value={tobaccoValues.colourIntensity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="leafWidth" className="mb-2 block">
          Leaf Width
        </label>
        <input
          type="text"
          id="leafWidth"
          name="leafWidth"
          value={tobaccoValues.leafWidth}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="leafLength" className="mb-2 block">
          Leaf Length
        </label>
        <input
          type="text"
          id="leafLength"
          name="leafLength"
          value={tobaccoValues.leafLength}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="uniformity" className="mb-2 block">
          Uniformity
        </label>
        <input
          type="text"
          id="uniformity"
          name="uniformity"
          value={tobaccoValues.uniformity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="injury" className="mb-2 block">
          Injury
        </label>
        <input
          type="text"
          id="injury"
          name="injury"
          value={tobaccoValues.injury}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="topLeafCount" className="mb-2 block">
          Top Leaf Count
        </label>
        <input
          type="text"
          id="topLeafCount"
          name="topLeafCount"
          value={tobaccoValues.topLeafCount}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="middleLeafCount" className="mb-2 block">
          Middle Leaf Count
        </label>
        <input
          type="text"
          id="middleLeafCount"
          name="middleLeafCount"
          value={tobaccoValues.middleLeafCount}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bottomLeafCount" className="mb-2 block">
          Bottom Leaf Count
        </label>
        <input
          type="text"
          id="bottomLeafCount"
          name="bottomLeafCount"
          value={tobaccoValues.bottomLeafCount}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Tobacco
      </button>
    </form>
  );
};

export default Tobacco;
