import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Forage = () => {
  const [forageValues, setForageValues] = useState({
    moisture: "",
    protein: "",
    phosphorus: "",
    potassium: "",
    calcium: "",
    sodium: "",
    magnesium: "",
    acidDetergentFiber: "",
    neutralDetergentFiber: "",
    metabolisableEnergy: "",
    netEnergyForGain: "",
    netEnergyForLactation: "",
    netEnergyForMilk: "",
    digestibleEnergy: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForageValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Forage");
      await addDoc(collectionRef, forageValues);
      console.log("Forage data successfully stored in Firestore!");
      // Reset form values
      setForageValues({
        moisture: "",
        protein: "",
        phosphorus: "",
        potassium: "",
        calcium: "",
        sodium: "",
        magnesium: "",
        acidDetergentFiber: "",
        neutralDetergentFiber: "",
        metabolisableEnergy: "",
        netEnergyForGain: "",
        netEnergyForLactation: "",
        netEnergyForMilk: "",
        digestibleEnergy: "",
      });
    } catch (error) {
      console.error("Error storing forage data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="moisture" className="mb-2 block">
            Moisture
          </label>
          <input
            type="text"
            id="moisture"
            name="moisture"
            value={forageValues.moisture}
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
            value={forageValues.protein}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phosphorus" className="mb-2 block">
            Phosphorus (%)
          </label>
          <input
            type="text"
            id="phosphorus"
            name="phosphorus"
            value={forageValues.phosphorus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="potassium" className="mb-2 block">
            Potassium (%)
          </label>
          <input
            type="text"
            id="potassium"
            name="potassium"
            value={forageValues.potassium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="calcium" className="mb-2 block">
            Calcium (%)
          </label>
          <input
            type="text"
            id="calcium"
            name="calcium"
            value={forageValues.calcium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sodium" className="mb-2 block">
            Sodium (%)
          </label>
          <input
            type="text"
            id="sodium"
            name="sodium"
            value={forageValues.sodium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="magnesium" className="mb-2 block">
            Magnesium (%)
          </label>
          <input
            type="text"
            id="magnesium"
            name="magnesium"
            value={forageValues.magnesium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="acidDetergentFiber" className="mb-2 block">
            Acid Detergent Fiber (%)
          </label>
          <input
            type="text"
            id="acidDetergentFiber"
            name="acidDetergentFiber"
            value={forageValues.acidDetergentFiber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="neutralDetergentFiber" className="mb-2 block">
            Neutral Detergent Fiber (%)
          </label>
          <input
            type="text"
            id="neutralDetergentFiber"
            name="neutralDetergentFiber"
            value={forageValues.neutralDetergentFiber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metabolisableEnergy" className="mb-2 block">
            Metabolisable Energy (Mcal/kg)
          </label>
          <input
            type="text"
            id="metabolisableEnergy"
            name="metabolisableEnergy"
            value={forageValues.metabolisableEnergy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="netEnergyForGain" className="mb-2 block">
            Net Energy for Gain (Mcal/kg)
          </label>
          <input
            type="text"
            id="netEnergyForGain"
            name="netEnergyForGain"
            value={forageValues.netEnergyForGain}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="netEnergyForLactation" className="mb-2 block">
            Net Energy for Lactation (Mcal/kg)
          </label>
          <input
            type="text"
            id="netEnergyForLactation"
            name="netEnergyForLactation"
            value={forageValues.netEnergyForLactation}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="netEnergyForMilk" className="mb-2 block">
            Net Energy for Milk (Mcal/kg)
          </label>
          <input
            type="text"
            id="netEnergyForMilk"
            name="netEnergyForMilk"
            value={forageValues.netEnergyForMilk}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="digestibleEnergy" className="mb-2 block">
            Digestible Energy (Mcal/kg)
          </label>
          <input
            type="text"
            id="digestibleEnergy"
            name="digestibleEnergy"
            value={forageValues.digestibleEnergy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="col-span-2 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Forage
      </button>
    </form>
  );
};

export default Forage;
