import React, { useState } from "react";
import { firestore, collection, addDoc } from "../../firebase";

const Tree = () => {
  const [treeValues, setTreeValues] = useState({
    dbh: "",
    freshWeight: "",
    dryWeight: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTreeValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "Tree");
      await addDoc(collectionRef, treeValues);
      console.log("Tree data successfully stored in Firestore!");
      // Reset form values
      setTreeValues({
        dbh: "",
        freshWeight: "",
        dryWeight: "",
      });
    } catch (error) {
      console.error("Error storing tree data in Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h1 className="font-bold">Tree</h1>
        <label htmlFor="dbh" className="mb-2 block">
          Diameter at Breast Height (DBH)
        </label>
        <input
          type="text"
          id="dbh"
          name="dbh"
          value={treeValues.dbh}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="freshWeight" className="mb-2 block">
          Fresh Weight (1cm3 in g)
        </label>
        <input
          type="text"
          id="freshWeight"
          name="freshWeight"
          value={treeValues.freshWeight}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dryWeight" className="mb-2 block">
          Dry Weight (1cm3 in g)
        </label>
        <input
          type="text"
          id="dryWeight"
          name="dryWeight"
          value={treeValues.dryWeight}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>{" "}
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit Tree
      </button>
    </form>
  );
};

export default Tree;
