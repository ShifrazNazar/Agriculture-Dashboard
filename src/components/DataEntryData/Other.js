import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Other = () => {
  const [otherValues, setOtherValues] = useState({
    soilMicrobialBioMassCarbon: "",
    soilCompaction: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOtherValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Other");
      await addDoc(collectionRef, otherValues);
      console.log("Other data successfully stored in Firestore!");
      // Reset form values
      setOtherValues({
        soilMicrobialBioMassCarbon: "",
        soilCompaction: "",
      });
    } catch (error) {
      console.error("Error storing other data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="soilMicrobialBioMassCarbon" className="mb-2 block">
            Soil Microbial Bio Mass Carbon (SMBC)
          </label>
          <input
            type="text"
            id="soilMicrobialBioMassCarbon"
            name="soilMicrobialBioMassCarbon"
            value={otherValues.soilMicrobialBioMassCarbon}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="soilCompaction" className="mb-2 block">
            Soil Compaction (psi)
          </label>
          <input
            type="text"
            id="soilCompaction"
            name="soilCompaction"
            value={otherValues.soilCompaction}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Other
      </button>
    </form>
  );
};

export default Other;
