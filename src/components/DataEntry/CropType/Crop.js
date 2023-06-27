import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const Crop = () => {
  const [cropValues, setCropValues] = useState({
    commonName: "",
    scientificName: "",
    cultivar: "",
    yields: "",
    leafLength: "",
    leafWidth: "",
    shootHeight: "",
    freshRootMass: "",
    dryRootMass: "",
    rootVolume: "",
    rootActivity: "",
    freshShootMass: "",
    dryShootMass: "",
    germinationRate: "",
    totalSeedling: "",
    seeding: "",
    maturedPlants: "",
    disease: "",
    mortality: "",
    rootLength: "",
    protein: "",
    damages: "",
    sugar: "",
    stemDiameter: "",
    spikeLength: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCropValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Crop");
      await addDoc(collectionRef, cropValues);
      console.log("Crop data successfully stored in Firestore!");
      // Reset form values
      setCropValues({
        commonName: "",
        scientificName: "",
        cultivar: "",
        yields: "",
        leafLength: "",
        leafWidth: "",
        shootHeight: "",
        freshRootMass: "",
        dryRootMass: "",
        rootVolume: "",
        rootActivity: "",
        freshShootMass: "",
        dryShootMass: "",
        germinationRate: "",
        totalSeedling: "",
        seeding: "",
        maturedPlants: "",
        disease: "",
        mortality: "",
        rootLength: "",
        protein: "",
        damages: "",
        sugar: "",
        stemDiameter: "",
        spikeLength: "",
      });
    } catch (error) {
      console.error("Error storing crop data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="commonName" className="mb-2 block">
            Common Name
          </label>
          <input
            type="text"
            id="commonName"
            name="commonName"
            value={cropValues.commonName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="scientificName" className="mb-2 block">
            Scientific Name
          </label>
          <input
            type="text"
            id="scientificName"
            name="scientificName"
            value={cropValues.scientificName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cultivar" className="mb-2 block">
            Cultivar/Variety
          </label>
          <input
            type="text"
            id="cultivar"
            name="cultivar"
            value={cropValues.cultivar}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="yields" className="mb-2 block">
            Yields (t/ha)
          </label>
          <input
            type="text"
            id="yields"
            name="yields"
            value={cropValues.yields}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="leafLength" className="mb-2 block">
            Leaf Length (cm)
          </label>
          <input
            type="text"
            id="leafLength"
            name="leafLength"
            value={cropValues.leafLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="leafWidth" className="mb-2 block">
            Leaf Width (cm)
          </label>
          <input
            type="text"
            id="leafWidth"
            name="leafWidth"
            value={cropValues.leafWidth}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shootHeight" className="mb-2 block">
            Shoot Height (cm)
          </label>
          <input
            type="text"
            id="shootHeight"
            name="shootHeight"
            value={cropValues.shootHeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="freshRootMass" className="mb-2 block">
            Fresh Root Mass (g)
          </label>
          <input
            type="text"
            id="freshRootMass"
            name="freshRootMass"
            value={cropValues.freshRootMass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dryRootMass" className="mb-2 block">
            Dry Root Mass (g)
          </label>
          <input
            type="text"
            id="dryRootMass"
            name="dryRootMass"
            value={cropValues.dryRootMass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rootVolume" className="mb-2 block">
            Root Volume (cm3)
          </label>
          <input
            type="text"
            id="rootVolume"
            name="rootVolume"
            value={cropValues.rootVolume}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rootActivity" className="mb-2 block">
            Root Activity (per ug.g.h)
          </label>
          <input
            type="text"
            id="rootActivity"
            name="rootActivity"
            value={cropValues.rootActivity}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="freshShootMass" className="mb-2 block">
            Fresh Shoot Mass (g)
          </label>
          <input
            type="text"
            id="freshShootMass"
            name="freshShootMass"
            value={cropValues.freshShootMass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dryShootMass" className="mb-2 block">
            Dry Shoot Mass (g)
          </label>
          <input
            type="text"
            id="dryShootMass"
            name="dryShootMass"
            value={cropValues.dryShootMass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="germinationRate" className="mb-2 block">
            Germination Rate (%)
          </label>
          <input
            type="text"
            id="germinationRate"
            name="germinationRate"
            value={cropValues.germinationRate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalSeedling" className="mb-2 block">
            Total Seedling
          </label>
          <input
            type="text"
            id="totalSeedling"
            name="totalSeedling"
            value={cropValues.totalSeedling}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seeding" className="mb-2 block">
            Seeding (kg)
          </label>
          <input
            type="text"
            id="seeding"
            name="seeding"
            value={cropValues.seeding}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="maturedPlants" className="mb-2 block">
            Matured Plants (Count)
          </label>
          <input
            type="text"
            id="maturedPlants"
            name="maturedPlants"
            value={cropValues.maturedPlants}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="disease" className="mb-2 block">
            Disease (Count)
          </label>
          <input
            type="text"
            id="disease"
            name="disease"
            value={cropValues.disease}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mortality" className="mb-2 block">
            Mortality (Count)
          </label>
          <input
            type="text"
            id="mortality"
            name="mortality"
            value={cropValues.mortality}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rootLength" className="mb-2 block">
            Root Length (cm)
          </label>
          <input
            type="text"
            id="rootLength"
            name="rootLength"
            value={cropValues.rootLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="protein" className="mb-2 block">
            Protein (%)
          </label>
          <input
            type="text"
            id="protein"
            name="protein"
            value={cropValues.protein}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="damages" className="mb-2 block">
            Damages (%)
          </label>
          <input
            type="text"
            id="damages"
            name="damages"
            value={cropValues.damages}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sugar" className="mb-2 block">
            Sugar (Brix)
          </label>
          <input
            type="text"
            id="sugar"
            name="sugar"
            value={cropValues.sugar}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stemDiameter" className="mb-2 block">
            Stem Diameter (mm)
          </label>
          <input
            type="text"
            id="stemDiameter"
            name="stemDiameter"
            value={cropValues.stemDiameter}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="spikeLength" className="mb-2 block">
            Spike Length (cm)
          </label>
          <input
            type="text"
            id="spikeLength"
            name="spikeLength"
            value={cropValues.spikeLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Crop
      </button>
    </form>
  );
};

export default Crop;
