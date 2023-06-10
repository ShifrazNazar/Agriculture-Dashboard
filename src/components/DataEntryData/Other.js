import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Other = () => {
  const [otherValues, setOtherValues] = useState({
    soilMicrobialBioMassCarbon: "",
    soilCompaction: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOtherValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Check if at least one field is filled
    if (
      otherValues.soilMicrobialBioMassCarbon.trim() !== "" ||
      otherValues.soilCompaction.trim() !== ""
    ) {
      setIsFormValid(true);
      setErrorMessage("");
    } else {
      setIsFormValid(false);
      setErrorMessage("Please fill at least one field");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
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
        setIsFormValid(false);
        setErrorMessage("");
      } catch (error) {
        console.error("Error storing other data in Firestore:", error);
      }
    } else {
      console.error("All fields are empty");
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
            onBlur={validateForm}
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
            onBlur={validateForm}
          />
        </div>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
