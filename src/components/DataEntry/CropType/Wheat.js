import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const Wheat = () => {
  const [wheatValues, setWheatValues] = useState({
    plantHeight: "",
    spikeLength: "",
    grainYield: "",
    strawYield: "",
    proteinContent: "",
    grainWeightPerBush: "",
    heatDamagedKernels: "",
    totalForeignMaterial: "",
    shrunkenBrokenKernels: "",
    totalDamagedKernels: "",
    wheatOfContrastingClasses: "",
    totalOtherClasses: "",
    stones: "",
    animalFilth: "",
    castorBeans: "",
    crotalariaSeeds: "",
    glass: "",
    stonesCount: "",
    unknownForeignSubstances: "",
    totalOtherMaterials: "",
    insectDamagedKernels: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWheatValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Wheat");
      await addDoc(collectionRef, wheatValues);
      console.log("Wheat data successfully stored in Firestore!");
      // Reset form values
      setWheatValues({
        plantHeight: "",
        spikeLength: "",
        grainYield: "",
        strawYield: "",
        proteinContent: "",
        grainWeightPerBush: "",
        heatDamagedKernels: "",
        totalForeignMaterial: "",
        shrunkenBrokenKernels: "",
        totalDamagedKernels: "",
        wheatOfContrastingClasses: "",
        totalOtherClasses: "",
        stones: "",
        animalFilth: "",
        castorBeans: "",
        crotalariaSeeds: "",
        glass: "",
        stonesCount: "",
        unknownForeignSubstances: "",
        totalOtherMaterials: "",
        insectDamagedKernels: "",
      });
    } catch (error) {
      console.error("Error storing wheat data in Firestore:", error);
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
            value={wheatValues.plantHeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="spikeLength" className="mb-2 block">
            Spike Length (cm)
          </label>
          <input
            type="text"
            id="spikeLength"
            name="spikeLength"
            value={wheatValues.spikeLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="grainYield" className="mb-2 block">
            Grain Yield (t/ha)
          </label>
          <input
            type="text"
            id="grainYield"
            name="grainYield"
            value={wheatValues.grainYield}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="strawYield" className="mb-2 block">
            Straw Yield (t/ha)
          </label>
          <input
            type="text"
            id="strawYield"
            name="strawYield"
            value={wheatValues.strawYield}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="proteinContent" className="mb-2 block">
            Protein Content (%)
          </label>
          <input
            type="text"
            id="proteinContent"
            name="proteinContent"
            value={wheatValues.proteinContent}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="grainWeightPerBush" className="mb-2 block">
            Grain Weight per Bush (g)
          </label>
          <input
            type="text"
            id="grainWeightPerBush"
            name="grainWeightPerBush"
            value={wheatValues.grainWeightPerBush}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="heatDamagedKernels" className="mb-2 block">
            Heat Damaged Kernels (%)
          </label>
          <input
            type="text"
            id="heatDamagedKernels"
            name="heatDamagedKernels"
            value={wheatValues.heatDamagedKernels}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="totalForeignMaterial" className="mb-2 block">
            Total Foreign Material (%)
          </label>
          <input
            type="text"
            id="totalForeignMaterial"
            name="totalForeignMaterial"
            value={wheatValues.totalForeignMaterial}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="shrunkenBrokenKernels" className="mb-2 block">
            Shrunken and Broken Kernels (%)
          </label>
          <input
            type="text"
            id="shrunkenBrokenKernels"
            name="shrunkenBrokenKernels"
            value={wheatValues.shrunkenBrokenKernels}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="totalDamagedKernels" className="mb-2 block">
            Total Damaged Kernels (%)
          </label>
          <input
            type="text"
            id="totalDamagedKernels"
            name="totalDamagedKernels"
            value={wheatValues.totalDamagedKernels}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="wheatOfContrastingClasses" className="mb-2 block">
            Wheat of Contrasting Classes (%)
          </label>
          <input
            type="text"
            id="wheatOfContrastingClasses"
            name="wheatOfContrastingClasses"
            value={wheatValues.wheatOfContrastingClasses}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="totalOtherClasses" className="mb-2 block">
            Total Other Classes (%)
          </label>
          <input
            type="text"
            id="totalOtherClasses"
            name="totalOtherClasses"
            value={wheatValues.totalOtherClasses}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="stones" className="mb-2 block">
            Stones (%)
          </label>
          <input
            type="text"
            id="stones"
            name="stones"
            value={wheatValues.stones}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="animalFilth" className="mb-2 block">
            Animal Filth (Count/kg)
          </label>
          <input
            type="text"
            id="animalFilth"
            name="animalFilth"
            value={wheatValues.animalFilth}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="castorBeans" className="mb-2 block">
            Castor Beans (Count/kg)
          </label>
          <input
            type="text"
            id="castorBeans"
            name="castorBeans"
            value={wheatValues.castorBeans}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="crotalariaSeeds" className="mb-2 block">
            Crotalaria Seeds (Count/kg)
          </label>
          <input
            type="text"
            id="crotalariaSeeds"
            name="crotalariaSeeds"
            value={wheatValues.crotalariaSeeds}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="glass" className="mb-2 block">
            Glass (Count/kg)
          </label>
          <input
            type="text"
            id="glass"
            name="glass"
            value={wheatValues.glass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="stonesCount" className="mb-2 block">
            Stones (Count/kg)
          </label>
          <input
            type="text"
            id="stonesCount"
            name="stonesCount"
            value={wheatValues.stonesCount}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="unknownForeignSubstances" className="mb-2 block">
            Unknown Foreign Substances (Count/kg)
          </label>
          <input
            type="text"
            id="unknownForeignSubstances"
            name="unknownForeignSubstances"
            value={wheatValues.unknownForeignSubstances}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="totalOtherMaterials" className="mb-2 block">
            Total Other Materials (Count/kg)
          </label>
          <input
            type="text"
            id="totalOtherMaterials"
            name="totalOtherMaterials"
            value={wheatValues.totalOtherMaterials}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="insectDamagedKernels" className="mb-2 block">
            Insect-damaged Kernels (Count/100g)
          </label>
          <input
            type="text"
            id="insectDamagedKernels"
            name="insectDamagedKernels"
            value={wheatValues.insectDamagedKernels}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Wheat
      </button>
    </form>
  );
};

export default Wheat;
