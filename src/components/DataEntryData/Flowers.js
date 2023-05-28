import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Flowers = () => {
  const [flowerValues, setFlowerValues] = useState({
    numberOfFlowers: "",
    flowerLifespan: "",
    flowerDiameter: "",
    totalSeedGerminated: "",
    seedGerminationRate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFlowerValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Flowers");
      await addDoc(collectionRef, flowerValues);
      console.log("Flower data successfully stored in Firestore!");
      // Reset form values
      setFlowerValues({
        numberOfFlowers: "",
        flowerLifespan: "",
        flowerDiameter: "",
        totalSeedGerminated: "",
        seedGerminationRate: "",
      });
    } catch (error) {
      console.error("Error storing flower data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="numberOfFlowers" className="mb-2 block">
            Number of flowers
          </label>
          <input
            type="text"
            id="numberOfFlowers"
            name="numberOfFlowers"
            value={flowerValues.numberOfFlowers}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="flowerLifespan" className="mb-2 block">
            Flower Lifespan (days)
          </label>
          <input
            type="text"
            id="flowerLifespan"
            name="flowerLifespan"
            value={flowerValues.flowerLifespan}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="flowerDiameter" className="mb-2 block">
            Flower Diameter (mm)
          </label>
          <input
            type="text"
            id="flowerDiameter"
            name="flowerDiameter"
            value={flowerValues.flowerDiameter}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalSeedGerminated" className="mb-2 block">
            Total Seed Germinated
          </label>
          <input
            type="text"
            id="totalSeedGerminated"
            name="totalSeedGerminated"
            value={flowerValues.totalSeedGerminated}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seedGerminationRate" className="mb-2 block">
            Total Seed Germination Rate (%)
          </label>
          <input
            type="text"
            id="seedGerminationRate"
            name="seedGerminationRate"
            value={flowerValues.seedGerminationRate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Flowers
      </button>
    </form>
  );
};

export default Flowers;
