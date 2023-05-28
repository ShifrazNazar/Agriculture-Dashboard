import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Peanut = () => {
  const [peanutValues, setPeanutValues] = useState({
    grade: "",
    screeningSize: "",
    prescribedScreenFlow: "",
    roundScreenFlow: "",
    otherScreenFlow: "",
    splits: "",
    damagedDefects: "",
    foreignMaterials: "",
    moisture: "",
    podYield: "",
    kernelYield: "",
    c: "",
    podWeightPerPlant: "",
    nodulesPerPlant: "",
    noduleWeightPerPlant: "",
    oilContent: "",
    branchNumber: "",
    lateralBranchLength: "",
    mainStemHeight: "",
    taprootLength: "",
    fibrousRootNumber: "",
    rootNoduleNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPeanutValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Peanut");
      await addDoc(collectionRef, peanutValues);
      console.log("Peanut data successfully stored in Firestore!");
      // Reset form values
      setPeanutValues({
        grade: "",
        screeningSize: "",
        prescribedScreenFlow: "",
        roundScreenFlow: "",
        otherScreenFlow: "",
        splits: "",
        damagedDefects: "",
        foreignMaterials: "",
        moisture: "",
        podYield: "",
        kernelYield: "",
        podPerPlant: "",
        podWeightPerPlant: "",
        nodulesPerPlant: "",
        noduleWeightPerPlant: "",
        oilContent: "",
        branchNumber: "",
        lateralBranchLength: "",
        mainStemHeight: "",
        taprootLength: "",
        fibrousRootNumber: "",
        rootNoduleNumber: "",
      });
    } catch (error) {
      console.error("Error storing peanut data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <label htmlFor="grade" className="mb-2 block">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={peanutValues.grade}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="screeningSize" className="mb-2 block">
            Screening Size
          </label>
          <input
            type="text"
            id="screeningSize"
            name="screeningSize"
            value={peanutValues.screeningSize}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prescribedScreenFlow" className="mb-2 block">
            Flow-through for Prescribed Screens (%)
          </label>
          <input
            type="text"
            id="prescribedScreenFlow"
            name="prescribedScreenFlow"
            value={peanutValues.prescribedScreenFlow}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="roundScreenFlow" className="mb-2 block">
            Flow-through for 17/64" Round Screens (%)
          </label>
          <input
            type="text"
            id="roundScreenFlow"
            name="roundScreenFlow"
            value={peanutValues.roundScreenFlow}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="otherScreenFlow" className="mb-2 block">
            Flow-through for Other Screens (%)
          </label>
          <input
            type="text"
            id="otherScreenFlow"
            name="otherScreenFlow"
            value={peanutValues.otherScreenFlow}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="splits" className="mb-2 block">
            Splits (%)
          </label>
          <input
            type="text"
            id="splits"
            name="splits"
            value={peanutValues.splits}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="damagedDefects" className="mb-2 block">
            Damaged &amp; Minor Defects (%)
          </label>
          <input
            type="text"
            id="damagedDefects"
            name="damagedDefects"
            value={peanutValues.damagedDefects}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="foreignMaterials" className="mb-2 block">
            Foreign Materials (%)
          </label>
          <input
            type="text"
            id="foreignMaterials"
            name="foreignMaterials"
            value={peanutValues.foreignMaterials}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="moisture" className="mb-2 block">
            Moisture (%)
          </label>
          <input
            type="text"
            id="moisture"
            name="moisture"
            value={peanutValues.moisture}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="podYield" className="mb-2 block">
            Pod Yield (t/ha)
          </label>
          <input
            type="text"
            id="podYield"
            name="podYield"
            value={peanutValues.podYield}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kernelYield" className="mb-2 block">
            Kernel Yield (t/ha)
          </label>
          <input
            type="text"
            id="kernelYield"
            name="kernelYield"
            value={peanutValues.kernelYield}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="podPerPlant" className="mb-2 block">
            Number of Pod per Plant
          </label>
          <input
            type="text"
            id="podPerPlant"
            name="podPerPlant"
            value={peanutValues.podPerPlant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="podWeightPerPlant" className="mb-2 block">
            Weight of Pods per Plant (g)
          </label>
          <input
            type="text"
            id="podWeightPerPlant"
            name="podWeightPerPlant"
            value={peanutValues.podWeightPerPlant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nodulesPerPlant" className="mb-2 block">
            Number of nodules per plant
          </label>
          <input
            type="text"
            id="nodulesPerPlant"
            name="nodulesPerPlant"
            value={peanutValues.nodulesPerPlant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noduleWeightPerPlant" className="mb-2 block">
            Weight of nodules per plant (mg)
          </label>
          <input
            type="text"
            id="noduleWeightPerPlant"
            name="noduleWeightPerPlant"
            value={peanutValues.noduleWeightPerPlant}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="oilContent" className="mb-2 block">
            Oil (%)
          </label>
          <input
            type="text"
            id="oilContent"
            name="oilContent"
            value={peanutValues.oilContent}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="branchNumber" className="mb-2 block">
            Branch number
          </label>
          <input
            type="text"
            id="branchNumber"
            name="branchNumber"
            value={peanutValues.branchNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lateralBranchLength" className="mb-2 block">
            Lateral branch length (cm)
          </label>
          <input
            type="text"
            id="lateralBranchLength"
            name="lateralBranchLength"
            value={peanutValues.lateralBranchLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mainStemHeight" className="mb-2 block">
            Main stem height (cm)
          </label>
          <input
            type="text"
            id="mainStemHeight"
            name="mainStemHeight"
            value={peanutValues.mainStemHeight}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="taprootLength" className="mb-2 block">
            Taproot length (cm)
          </label>
          <input
            type="text"
            id="taprootLength"
            name="taprootLength"
            value={peanutValues.taprootLength}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fibrousRootNumber" className="mb-2 block">
            Fibrous root number
          </label>
          <input
            type="text"
            id="fibrousRootNumber"
            name="fibrousRootNumber"
            value={peanutValues.fibrousRootNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rootNoduleNumber" className="mb-2 block">
            Root nodule number{" "}
          </label>
          <input
            type="text"
            id="rootNoduleNumber"
            name="rootNoduleNumber"
            value={peanutValues.rootNoduleNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Peanut
      </button>
    </form>
  );
};

export default Peanut;
