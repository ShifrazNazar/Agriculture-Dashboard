import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const CationBalance = () => {
  const [cationBalanceValues, setCationBalanceValues] = useState({
    pH_1_5Water: "",
    pH_1_5CaCl2: "",
    electricalConductivity: "",
    totalSolubleSalt: "",
    totalOrganicMatter: "",
    totalOrganicCarbon: "",
    exchangeableCalcium: "",
    exchangeableMagnesium: "",
    exchangeableSodium: "",
    exchangeablePotassium: "",
    exchangeableHydrogen: "",
    cationExchangeCapacity: "",
    adjustedCEC: "",
    saturatedBasePercentage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCationBalanceValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "CationBalance");
      await addDoc(collectionRef, cationBalanceValues);
      console.log("Cation balance data successfully stored in Firestore!");
      // Reset form values
      setCationBalanceValues({
        pH_1_5Water: "",
        pH_1_5CaCl2: "",
        electricalConductivity: "",
        totalSolubleSalt: "",
        totalOrganicMatter: "",
        totalOrganicCarbon: "",
        exchangeableCalcium: "",
        exchangeableMagnesium: "",
        exchangeableSodium: "",
        exchangeablePotassium: "",
        exchangeableHydrogen: "",
        cationExchangeCapacity: "",
        adjustedCEC: "",
        saturatedBasePercentage: "",
      });
    } catch (error) {
      console.error("Error storing cation balance data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h1 className="font-bold">Cation Balance</h1>
        <label htmlFor="pH_1_5Water" className="mb-2 block">
          pH (1:5 water)
        </label>
        <input
          type="text"
          id="pH_1_5Water"
          name="pH_1_5Water"
          value={cationBalanceValues.pH_1_5Water}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pH_1_5CaCl2" className="mb-2 block">
          pH (1:5, 0.01 CaCl2)
        </label>
        <input
          type="text"
          id="pH_1_5CaCl2"
          name="pH_1_5CaCl2"
          value={cationBalanceValues.pH_1_5CaCl2}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="electricalConductivity" className="mb-2 block">
          Electrical Conductivity (EC)
        </label>
        <input
          type="text"
          id="electricalConductivity"
          name="electricalConductivity"
          value={cationBalanceValues.electricalConductivity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="totalSolubleSalt" className="mb-2 block">
          Total Soluble Salt (TSS)
        </label>
        <input
          type="text"
          id="totalSolubleSalt"
          name="totalSolubleSalt"
          value={cationBalanceValues.totalSolubleSalt}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="totalOrganicMatter" className="mb-2 block">
          Total Organic Matter (%)
        </label>
        <input
          type="text"
          id="totalOrganicMatter"
          name="totalOrganicMatter"
          value={cationBalanceValues.totalOrganicMatter}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="totalOrganicCarbon" className="mb-2 block">
          Total Organic Carbon (%)
        </label>
        <input
          type="text"
          id="totalOrganicCarbon"
          name="totalOrganicCarbon"
          value={cationBalanceValues.totalOrganicCarbon}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exchangeableCalcium" className="mb-2 block">
          Exchangeable Calcium (me/100 of soil)
        </label>
        <input
          type="text"
          id="exchangeableCalcium"
          name="exchangeableCalcium"
          value={cationBalanceValues.exchangeableCalcium}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exchangeableMagnesium" className="mb-2 block">
          Exchangeable Magnesium (me/100 of soil)
        </label>
        <input
          type="text"
          id="exchangeableMagnesium"
          name="exchangeableMagnesium"
          value={cationBalanceValues.exchangeableMagnesium}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exchangeableSodium" className="mb-2 block">
          Exchangeable Sodium (me/100 of soil)
        </label>
        <input
          type="text"
          id="exchangeableSodium"
          name="exchangeableSodium"
          value={cationBalanceValues.exchangeableSodium}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exchangeablePotassium" className="mb-2 block">
          Exchangeable Potassium (me/100 of soil)
        </label>
        <input
          type="text"
          id="exchangeablePotassium"
          name="exchangeablePotassium"
          value={cationBalanceValues.exchangeablePotassium}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exchangeableHydrogen" className="mb-2 block">
          Exchangeable Hydrogen (me/100 of soil)
        </label>
        <input
          type="text"
          id="exchangeableHydrogen"
          name="exchangeableHydrogen"
          value={cationBalanceValues.exchangeableHydrogen}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cationExchangeCapacity" className="mb-2 block">
          Cation Exchange Capacity
        </label>
        <input
          type="text"
          id="cationExchangeCapacity"
          name="cationExchangeCapacity"
          value={cationBalanceValues.cationExchangeCapacity}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      {/* Adjusted CEC */}
      <div className="mb-4">
        <label htmlFor="adjustedCEC" className="mb-2 block">
          Adjusted CEC
        </label>
        <input
          type="text"
          id="adjustedCEC"
          name="adjustedCEC"
          value={cationBalanceValues.adjustedCEC}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="saturatedBasePercentage" className="mb-2 block">
          Saturated Base Percentage (%)
        </label>
        <input
          type="text"
          id="saturatedBasePercentage"
          name="saturatedBasePercentage"
          value={cationBalanceValues.saturatedBasePercentage}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Cation Balance
      </button>
    </form>
  );
};

export default CationBalance;
