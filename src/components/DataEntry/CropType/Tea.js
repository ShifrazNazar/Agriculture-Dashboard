import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../../firebase";

const Tea = () => {
  const [teaValues, setTeaValues] = useState({
    polyphenol: "",
    catechin: "",
    aminoAcid: "",
    theaflavins: "",
    thearubigins: "",
    hps: "",
    caffeine: "",
    colorIndex: "",
    brisknessIndex: "",
    infusion: "",
    color: "",
    strength: "",
    briskness: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeaValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Tea");
      await addDoc(collectionRef, teaValues);
      console.log("Tea data successfully stored in Firestore!");
      // Reset form values
      setTeaValues({
        polyphenol: "",
        catechin: "",
        aminoAcid: "",
        theaflavins: "",
        thearubigins: "",
        hps: "",
        caffeine: "",
        colorIndex: "",
        brisknessIndex: "",
        infusion: "",
        color: "",
        strength: "",
        briskness: "",
      });
    } catch (error) {
      console.error("Error storing tea data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="polyphenol" className="mb-2 block">
            Polyphenol (%)
          </label>
          <input
            type="text"
            id="polyphenol"
            name="polyphenol"
            value={teaValues.polyphenol}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="catechin" className="mb-2 block">
            Catechin (%)
          </label>
          <input
            type="text"
            id="catechin"
            name="catechin"
            value={teaValues.catechin}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="aminoAcid" className="mb-2 block">
            Amino Acid (%)
          </label>
          <input
            type="text"
            id="aminoAcid"
            name="aminoAcid"
            value={teaValues.aminoAcid}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="theaflavins" className="mb-2 block">
            Theaflavins (%)
          </label>
          <input
            type="text"
            id="theaflavins"
            name="theaflavins"
            value={teaValues.theaflavins}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="thearubigins" className="mb-2 block">
            Thearubigins (%)
          </label>
          <input
            type="text"
            id="thearubigins"
            name="thearubigins"
            value={teaValues.thearubigins}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hps" className="mb-2 block">
            High Polymerised Substances Liquor Colour (HPS)
          </label>
          <input
            type="text"
            id="hps"
            name="hps"
            value={teaValues.hps}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caffeine" className="mb-2 block">
            Caffeine (%)
          </label>
          <input
            type="text"
            id="caffeine"
            name="caffeine"
            value={teaValues.caffeine}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="colorIndex" className="mb-2 block">
            Color Index (CI)
          </label>
          <input
            type="text"
            id="colorIndex"
            name="colorIndex"
            value={teaValues.colorIndex}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brisknessIndex" className="mb-2 block">
            Briskness Index (%)
          </label>
          <input
            type="text"
            id="brisknessIndex"
            name="brisknessIndex"
            value={teaValues.brisknessIndex}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="infusion" className="mb-2 block">
            Infusion
          </label>
          <input
            type="text"
            id="infusion"
            name="infusion"
            value={teaValues.infusion}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="mb-2 block">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={teaValues.color}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="strength" className="mb-2 block">
            Strength
          </label>
          <input
            type="text"
            id="strength"
            name="strength"
            value={teaValues.strength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="briskness" className="mb-2 block">
            Briskness
          </label>
          <input
            type="text"
            id="briskness"
            name="briskness"
            value={teaValues.briskness}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Tea
      </button>
    </form>
  );
};

export default Tea;
