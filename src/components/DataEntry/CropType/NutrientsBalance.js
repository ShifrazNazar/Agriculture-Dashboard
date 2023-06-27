import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const NutrientBalance = () => {
  const [nutrientValues, setNutrientValues] = useState({
    calcium: "",
    magnesium: "",
    sodium: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    sulphur: "",
    copper: "",
    zinc: "",
    iron: "",
    manganese: "",
    cobalt: "",
    molybdenum: "",
    boron: "",
    totalPhosphorus: "",
    totalNitrogen: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNutrientValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "NutrientBalance");
      await addDoc(collectionRef, nutrientValues);
      console.log("Nutrient balance data successfully stored in Firestore!");
      // Reset form values
      setNutrientValues({
        calcium: "",
        magnesium: "",
        sodium: "",
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        sulphur: "",
        copper: "",
        zinc: "",
        iron: "",
        manganese: "",
        cobalt: "",
        molybdenum: "",
        boron: "",
        totalPhosphorus: "",
        totalNitrogen: "",
      });
    } catch (error) {
      console.error("Error storing nutrient balance data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="calcium" className="mb-2 block">
            Available Calcium (ppm)
          </label>
          <input
            type="text"
            id="calcium"
            name="calcium"
            value={nutrientValues.calcium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="magnesium" className="mb-2 block">
            Available Magnesium (ppm)
          </label>
          <input
            type="text"
            id="magnesium"
            name="magnesium"
            value={nutrientValues.magnesium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="sodium" className="mb-2 block">
            Available Sodium (ppm)
          </label>
          <input
            type="text"
            id="sodium"
            name="sodium"
            value={nutrientValues.sodium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="nitrogen" className="mb-2 block">
            Available Nitrogen (ppm)
          </label>
          <input
            type="text"
            id="nitrogen"
            name="nitrogen"
            value={nutrientValues.nitrogen}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="phosphorus" className="mb-2 block">
            Available Phosphorus (ppm)
          </label>
          <input
            type="text"
            id="phosphorus"
            name="phosphorus"
            value={nutrientValues.phosphorus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="potassium" className="mb-2 block">
            Available Potassium (ppm)
          </label>
          <input
            type="text"
            id="potassium"
            name="potassium"
            value={nutrientValues.potassium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="sulphur" className="mb-2 block">
            Available Sulphur (ppm)
          </label>
          <input
            type="text"
            id="sulphur"
            name="sulphur"
            value={nutrientValues.sulphur}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="copper" className="mb-2 block">
            Available Copper (ppm)
          </label>
          <input
            type="text"
            id="copper"
            name="copper"
            value={nutrientValues.copper}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="zinc" className="mb-2 block">
            Available Zinc (ppm)
          </label>
          <input
            type="text"
            id="zinc"
            name="zinc"
            value={nutrientValues.zinc}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="iron" className="mb-2 block">
            Available Iron (ppm)
          </label>
          <input
            type="text"
            id="iron"
            name="iron"
            value={nutrientValues.iron}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="manganese" className="mb-2 block">
            Available Manganese (ppm)
          </label>
          <input
            type="text"
            id="manganese"
            name="manganese"
            value={nutrientValues.manganese}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="cobalt" className="mb-2 block">
            Available Cobalt (ppm)
          </label>
          <input
            type="text"
            id="cobalt"
            name="cobalt"
            value={nutrientValues.cobalt}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="molybdenum" className="mb-2 block">
            Available Molybdenum (ppm)
          </label>
          <input
            type="text"
            id="molybdenum"
            name="molybdenum"
            value={nutrientValues.molybdenum}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="boron" className="mb-2 block">
            Available Boron (ppm)
          </label>
          <input
            type="text"
            id="boron"
            name="boron"
            value={nutrientValues.boron}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label htmlFor="totalPhosphorus" className="mb-2 block">
            XV. Total Phosphorus (ppm)
          </label>
          <input
            type="text"
            id="totalPhosphorus"
            name="totalPhosphorus"
            value={nutrientValues.totalPhosphorus}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalNitrogen" className="mb-2 block">
            Total Nitrogen (ppm)
          </label>
          <input
            type="text"
            id="totalNitrogen"
            name="totalNitrogen"
            value={nutrientValues.totalNitrogen}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Nutrient Balance
      </button>
    </form>
  );
};

export default NutrientBalance;
