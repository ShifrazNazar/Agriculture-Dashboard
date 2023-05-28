import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Canola = () => {
  const [canolaValues, setCanolaValues] = useState({
    heatDamagedKernel: "",
    greenKernel: "",
    totalDamagedKernel: "",
    ergot: "",
    sclerotinia: "",
    stones: "",
    totalTrash: "",
    animalFilth: "",
    glass: "",
    otherTrash: "",
    erucicAcid: "",
    butenylGlucosinolate: "",
    pentenylGlucosinolate: "",
    hydroxyButenyl: "",
    hydroxyPentenylGlucosinolate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCanolaValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Canola");
      await addDoc(collectionRef, canolaValues);
      console.log("Canola data successfully stored in Firestore!");
      // Reset form values
      setCanolaValues({
        heatDamagedKernel: "",
        greenKernel: "",
        totalDamagedKernel: "",
        ergot: "",
        sclerotinia: "",
        stones: "",
        totalTrash: "",
        animalFilth: "",
        glass: "",
        otherTrash: "",
        erucicAcid: "",
        butenylGlucosinolate: "",
        pentenylGlucosinolate: "",
        hydroxyButenyl: "",
        hydroxyPentenylGlucosinolate: "",
      });
    } catch (error) {
      console.error("Error storing canola data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="heatDamagedKernel" className="mb-2 block">
            Heat Damaged Kernel
          </label>
          <input
            type="text"
            id="heatDamagedKernel"
            name="heatDamagedKernel"
            value={canolaValues.heatDamagedKernel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="greenKernel" className="mb-2 block">
            Green Kernel
          </label>
          <input
            type="text"
            id="greenKernel"
            name="greenKernel"
            value={canolaValues.greenKernel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalDamagedKernel" className="mb-2 block">
            Total Damaged Kernel
          </label>
          <input
            type="text"
            id="totalDamagedKernel"
            name="totalDamagedKernel"
            value={canolaValues.totalDamagedKernel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ergot" className="mb-2 block">
            Ergot (Trash)
          </label>
          <input
            type="text"
            id="ergot"
            name="ergot"
            value={canolaValues.ergot}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sclerotinia" className="mb-2 block">
            Sclerotinia (Trash)
          </label>
          <input
            type="text"
            id="sclerotinia"
            name="sclerotinia"
            value={canolaValues.sclerotinia}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stones" className="mb-2 block">
            Stones (Trash)
          </label>
          <input
            type="text"
            id="stones"
            name="stones"
            value={canolaValues.stones}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalTrash" className="mb-2 block">
            Total (Trash)
          </label>
          <input
            type="text"
            id="totalTrash"
            name="totalTrash"
            value={canolaValues.totalTrash}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="animalFilth" className="mb-2 block">
            Animal filth (Trash)
          </label>
          <input
            type="text"
            id="animalFilth"
            name="animalFilth"
            value={canolaValues.animalFilth}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="glass" className="mb-2 block">
            Glass (Trash)
          </label>
          <input
            type="text"
            id="glass"
            name="glass"
            value={canolaValues.glass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="otherTrash" className="mb-2 block">
            Other (Trash)
          </label>
          <input
            type="text"
            id="otherTrash"
            name="otherTrash"
            value={canolaValues.otherTrash}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="erucicAcid" className="mb-2 block">
            Erucic acid (%)
          </label>
          <input
            type="text"
            id="erucicAcid"
            name="erucicAcid"
            value={canolaValues.erucicAcid}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="butenylGlucosinolate" className="mb-2 block">
            3-butenyl glucosinolate (mM/g)
          </label>
          <input
            type="text"
            id="butenylGlucosinolate"
            name="butenylGlucosinolate"
            value={canolaValues.butenylGlucosinolate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pentenylGlucosinolate" className="mb-2 block">
            4-pentenyl glucosinolate (mM/g)
          </label>
          <input
            type="text"
            id="pentenylGlucosinolate"
            name="pentenylGlucosinolate"
            value={canolaValues.pentenylGlucosinolate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hydroxyButenyl" className="mb-2 block">
            2-hydroxy-3-butenyl (mM/g)
          </label>
          <input
            type="text"
            id="hydroxyButenyl"
            name="hydroxyButenyl"
            value={canolaValues.hydroxyButenyl}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hydroxyPentenylGlucosinolate" className="mb-2 block">
            2-hydroxy-4-pentenyl glucosinolate (mM/g)
          </label>
          <input
            type="text"
            id="hydroxyPentenylGlucosinolate"
            name="hydroxyPentenylGlucosinolate"
            value={canolaValues.hydroxyPentenylGlucosinolate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Canola
      </button>
    </form>
  );
};

export default Canola;
