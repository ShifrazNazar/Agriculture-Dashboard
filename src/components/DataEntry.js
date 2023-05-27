import React, { useState } from "react";
import BiologyBalance from "./DataEntryData/BiologyBalance";
import Crop from "./DataEntryData/Crop";
import Canola from "./DataEntryData/Canola";
import CationBalance from "./DataEntryData/CationBalance";
import ChineseCabbage from "./DataEntryData/ChineseCabbage";
import Corn from "./DataEntryData/Corn";
import Cotton from "./DataEntryData/Cotton";
import Flowers from "./DataEntryData/Flowers";
import Forage from "./DataEntryData/Forage";
import NutrientBalance from "./DataEntryData/NutrientsBalance";
import OilPalm from "./DataEntryData/OilPalm";
import Other from "./DataEntryData/Other";
import PaddyGrain from "./DataEntryData/PaddyGrain";
import Peanut from "./DataEntryData/Peanut";
import Poppy from "./DataEntryData/Poppy";
import Sorghum from "./DataEntryData/Sorghum";
import Sugarcane from "./DataEntryData/Sugarcane";
import Tea from "./DataEntryData/Tea";
import Tobacco from "./DataEntryData/Tobacco";
import Tree from "./DataEntryData/Tree";
import Wheat from "./DataEntryData/Wheat";
import WildCabbage from "./DataEntryData/WildCabbage";

const DataEntry = () => {
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

  return (
    <div className="mx-auto max-w-md bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Entry</h2>
      <div className="mb-4">
        <label className="mb-2 block font-bold">
          Select Agricultral Product
        </label>
        <select
          value={activeForm}
          onChange={handleFilterChange}
          className="w-full border border-gray-300 p-2"
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
    </div>
  );
};

export default DataEntry;
