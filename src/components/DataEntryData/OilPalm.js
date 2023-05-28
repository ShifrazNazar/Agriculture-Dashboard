import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const OilPalm = () => {
  const [oilPalmValues, setOilPalmValues] = useState({
    fruitPericarpColour: "",
    fruitMesocarpColour: "",
    looseSocketNumber: "",
    attachedFruits: "",
    soilContaminant: "",
    rockContaminant: "",
    freshFruitBunchWeight: "",
    freshFruitBunchDensity: "",
    damagedFruits: "",
    pathenocarpicFruits: "",
    fruitShellSickness: "",
    pericarpRatio: "",
    mesocarpRatio: "",
    kernelRatio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOilPalmValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "OilPalm");
      await addDoc(collectionRef, oilPalmValues);
      console.log("Oil Palm data successfully stored in Firestore!");
      // Reset form values
      setOilPalmValues({
        fruitPericarpColour: "",
        fruitMesocarpColour: "",
        looseSocketNumber: "",
        attachedFruits: "",
        soilContaminant: "",
        rockContaminant: "",
        freshFruitBunchWeight: "",
        freshFruitBunchDensity: "",
        damagedFruits: "",
        pathenocarpicFruits: "",
        fruitShellSickness: "",
        pericarpRatio: "",
        mesocarpRatio: "",
        kernelRatio: "",
      });
    } catch (error) {
      console.error("Error storing oil palm data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="fruitPericarpColour" className="mb-2 block">
            Fruit Pericarp Colour
          </label>
          <input
            type="text"
            id="fruitPericarpColour"
            name="fruitPericarpColour"
            value={oilPalmValues.fruitPericarpColour}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fruitMesocarpColour" className="mb-2 block">
            Fruit Mesocarp Colour
          </label>
          <input
            type="text"
            id="fruitMesocarpColour"
            name="fruitMesocarpColour"
            value={oilPalmValues.fruitMesocarpColour}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="looseSocketNumber" className="mb-2 block">
            Number of Loose Socket
          </label>
          <input
            type="text"
            id="looseSocketNumber"
            name="looseSocketNumber"
            value={oilPalmValues.looseSocketNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="attachedFruits" className="mb-2 block">
            Attached Fruits (%)
          </label>
          <input
            type="text"
            id="attachedFruits"
            name="attachedFruits"
            value={oilPalmValues.attachedFruits}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="soilContaminant" className="mb-2 block">
            Contaminant (soil)
          </label>
          <input
            type="text"
            id="soilContaminant"
            name="soilContaminant"
            value={oilPalmValues.soilContaminant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rockContaminant" className="mb-2 block">
            Contaminant (rock)
          </label>
          <input
            type="text"
            id="rockContaminant"
            name="rockContaminant"
            value={oilPalmValues.rockContaminant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="freshFruitBunchWeight" className="mb-2 block">
            Fresh Fruit Brunch Weight (kg)
          </label>
          <input
            type="text"
            id="freshFruitBunchWeight"
            name="freshFruitBunchWeight"
            value={oilPalmValues.freshFruitBunchWeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="freshFruitBunchDensity" className="mb-2 block">
            Fresh Fruit Brunch Density (kg/m3)
          </label>
          <input
            type="text"
            id="freshFruitBunchDensity"
            name="freshFruitBunchDensity"
            value={oilPalmValues.freshFruitBunchDensity}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="damagedFruits" className="mb-2 block">
            Damaged Fruits (%)
          </label>
          <input
            type="text"
            id="damagedFruits"
            name="damagedFruits"
            value={oilPalmValues.damagedFruits}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pathenocarpicFruits" className="mb-2 block">
            Pathenocarpic Fruits (%)
          </label>
          <input
            type="text"
            id="pathenocarpicFruits"
            name="pathenocarpicFruits"
            value={oilPalmValues.pathenocarpicFruits}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fruitShellSickness" className="mb-2 block">
            Fruit shell sickness (mm)
          </label>
          <input
            type="text"
            id="fruitShellSickness"
            name="fruitShellSickness"
            value={oilPalmValues.fruitShellSickness}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pericarpRatio" className="mb-2 block">
            Pericarp ratio (%)
          </label>
          <input
            type="text"
            id="pericarpRatio"
            name="pericarpRatio"
            value={oilPalmValues.pericarpRatio}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mesocarpRatio" className="mb-2 block">
            Mesocarp ratio (%)
          </label>
          <input
            type="text"
            id="mesocarpRatio"
            name="mesocarpRatio"
            value={oilPalmValues.mesocarpRatio}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kernelRatio" className="mb-2 block">
            Kernel ratio (%)
          </label>
          <input
            type="text"
            id="kernelRatio"
            name="kernelRatio"
            value={oilPalmValues.kernelRatio}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Oil Palm
      </button>
    </form>
  );
};

export default OilPalm;
