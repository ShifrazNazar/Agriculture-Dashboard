import React, { useState } from "react";
import { firestore, doc, collection, setDoc } from "../../firebase";

const Consumption = () => {
  const [farmId, setFarmId] = useState("");
  const [fieldId, setFieldId] = useState("");
  const [consumptionId, setConsumptionId] = useState("");
  const [dosage, setDosage] = useState("");
  const [product, setProduct] = useState("");
  const [method, setMethod] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", farmId);
      const fieldDocRef = doc(farmDocRef, "Field", fieldId);
      const harvestCollectionRef = collection(fieldDocRef, "Consumption");
      await setDoc(doc(harvestCollectionRef, consumptionId), {
        consumptionId,
        createDate: new Date(),
        dosage,
        product,
        method,
      });
      console.log("Harvest document created with custom ID: ", consumptionId);
      setFarmId("");
      setFieldId("");
      setConsumptionId("");
      setDosage("");
      setProduct("");
      setMethod("");

    } catch (error) {
      console.error("Error adding Harvest document: ", error);
    }
  };

  return (
    <div className="bg-white p-4 dark:bg-gray-200">
      <form onSubmit={handleSubmit}>
        <label htmlFor="farmId" className="mb-2 block">
          Farm ID:
          <input
            type="text"
            id="farmId"
            value={farmId}
            onChange={(e) => setFarmId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="fieldId" className="mb-2 block">
          Field ID:
          <input
            type="text"
            id="fieldId"
            value={fieldId}
            onChange={(e) => setFieldId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="consumptionId" className="mb-2 block">
          Consumption ID:
          <input
            type="text"
            id="consumptionId"
            value={consumptionId}
            onChange={(e) => setConsumptionId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="dosage" className="mb-2 block">
          Dosage:
          <input
            type="text"
            id="dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="product" className="mb-2 block">
          Product:
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="method" className="mb-2 block">
          Method:
          <input
            type="text"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>



       
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit Consumption
        </button>
      </form>
    </div>
  );
}


export default Consumption