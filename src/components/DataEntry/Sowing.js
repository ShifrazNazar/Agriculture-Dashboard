import React, { useState } from "react";
import { firestore, doc, collection, setDoc } from "../../firebase";

import BiologyBalance from "./CropType/BiologyBalance";
import Crop from "./CropType/Crop";
import Canola from "./CropType/Canola";
import CationBalance from "./CropType/CationBalance";
import ChineseCabbage from "./CropType/ChineseCabbage";
import Corn from "./CropType/Corn";
import Cotton from "./CropType/Cotton";
import Flowers from "./CropType/Flowers";
import Forage from "./CropType/Forage";
import NutrientBalance from "./CropType/NutrientsBalance";
import OilPalm from "./CropType/OilPalm";
import Other from "./CropType/Other";
import PaddyGrain from "./CropType/PaddyGrain";
import Peanut from "./CropType/Peanut";
import Poppy from "./CropType/Poppy";
import Sorghum from "./CropType/Sorghum";
import Sugarcane from "./CropType/Sugarcane";
import Tea from "./CropType/Tea";
import Tobacco from "./CropType/Tobacco";
import Tree from "./CropType/Tree";
import Wheat from "./CropType/Wheat";
import WildCabbage from "./CropType/WildCabbage";

const Sowing = () => {
  const [farmId, setFarmId] = useState("");
  const [fieldId, setFieldId] = useState("");
  const [sowingId, setSowingId] = useState("");
  const [cropType, setCropType] = useState("");
  const [variety, setVariety] = useState("");
  const [method, setMethod] = useState("");
  const [supplier, setSupplier] = useState("");

  const [activeForm, setActiveForm] = useState("");

  const handleFilterChange = (event) => {
    setActiveForm(event.target.value);
  };

  const renderForm = () => {
    if (activeForm === "BiologyBalance") {
      return <BiologyBalance />;
    } else if (activeForm === "Crop") {
      return <Crop />;
    } else if (activeForm === "Canola") {
      return <Canola />;
    } else if (activeForm === "CationBalance") {
      return <CationBalance />;
    } else if (activeForm === "ChineseCabbage") {
      return <ChineseCabbage />;
    } else if (activeForm === "Corn") {
      return <Corn />;
    } else if (activeForm === "Cotton") {
      return <Cotton />;
    } else if (activeForm === "Flowers") {
      return <Flowers />;
    } else if (activeForm === "Forage") {
      return <Forage />;
    } else if (activeForm === "NutrientBalance") {
      return <NutrientBalance />;
    } else if (activeForm === "OilPalm") {
      return <OilPalm />;
    } else if (activeForm === "Other") {
      return <Other />;
    } else if (activeForm === "PaddyGrain") {
      return <PaddyGrain />;
    } else if (activeForm === "Peanut") {
      return <Peanut />;
    } else if (activeForm === "Poppy") {
      return <Poppy />;
    } else if (activeForm === "Sorghum") {
      return <Sorghum />;
    } else if (activeForm === "Sugarcane") {
      return <Sugarcane />;
    } else if (activeForm === "Tea") {
      return <Tea />;
    } else if (activeForm === "Tobacco") {
      return <Tobacco />;
    } else if (activeForm === "Tree") {
      return <Tree />;
    } else if (activeForm === "Wheat") {
      return <Wheat />;
    } else if (activeForm === "WildCabbage") {
      return <WildCabbage />;
    } else {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmDocRef = doc(firestore, "Farm", farmId);
      const fieldDocRef = doc(farmDocRef, "Field", fieldId);
      const sowingCollectionRef = collection(fieldDocRef, "Sowing");
      await setDoc(doc(sowingCollectionRef, sowingId), {
        sowingId,
        createDate: new Date(),
        cropType,
        variety,
        method,
        supplier,
      });
      console.log("Sowing document created with custom ID: ", sowingId);
      setFarmId("");
      setFieldId("");
      setSowingId("");
      setCropType("");
      setVariety("");
      setMethod("");
      setSupplier("");
    } catch (error) {
      console.error("Error adding Sowing document: ", error);
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
        <label htmlFor="sowingId" className="mb-2 block">
          Sowing ID:
          <input
            type="text"
            id="sowingId"
            value={sowingId}
            onChange={(e) => setSowingId(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>

        <label htmlFor="variety" className="mb-2 block">
          Variety:
          <input
            type="text"
            id="variety"
            value={variety}
            onChange={(e) => setVariety(e.target.value)}
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
        <label htmlFor="supplier" className="mb-2 block">
          Supplier:
          <input
            type="text"
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <label htmlFor="cropType" className="mb-2 block">
          Crop Type:
          <input
            type="text"
            id="cropType"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}

            className="w-full border border-gray-300 p-2"
            required
          />
        </label>
        <div className="mb-4">
          <label className="mb-2 block">Crop Type: </label>
          <select
            value={activeForm}
            onChange={handleFilterChange}
            className="border border-gray-300 p-2"
          >
            <option value="">Select Product</option>
            <option value="BiologyBalance">Biology Balance</option>
            <option value="Crop">Crop</option>
            <option value="Canola">Canola</option>
            <option value="CationBalance">Cation Balance</option>
            <option value="ChineseCabbage">Chinese Cabbage</option>
            <option value="Corn">Corn</option>
            <option value="Cotton">Cotton</option>
            <option value="Flowers">Flowers</option>
            <option value="Forage">Forage</option>
            <option value="NutrientBalance">Nutrient Balance</option>
            <option value="OilPalm">Oil Palm</option>
            <option value="Other">Other</option>
            <option value="PaddyGrain">Paddy Grain</option>
            <option value="Peanut">Peanut</option>
            <option value="Poppy">Poppy</option>
            <option value="Sorghum">Sorghum</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Tea">Tea</option>
            <option value="Tobacco">Tobacco</option>
            <option value="Tree">Tree</option>
            <option value="Wheat">Wheat</option>
            <option value="WildCabbage">Wild Cabbage</option>
          </select>
        </div>
        {renderForm()}
        
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Create Sowing
        </button>
      </form>
    </div>
  );
};

export default Sowing;
