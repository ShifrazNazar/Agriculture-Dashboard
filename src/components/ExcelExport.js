import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../firebase";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const ExcelExport = () => {
  const [data, setData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [harvestData, setHarvestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve values from Firestore for the 'farm' collection
        const collectionRef = collection(firestore, "farm");
        const querySnapshot = await getDocs(collectionRef);
        const values = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setData(values);
      } catch (error) {
        console.error("Error retrieving data from Firestore:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFieldData = async () => {
      try {
        // Retrieve values from the 'field' subcollection of each farm
        const fieldValues = [];

        for (const farm of data) {
          const fieldQuery = query(
            collection(firestore, "farm", farm.id, "field")
          );
          const fieldQuerySnapshot = await getDocs(fieldQuery);
          const fieldValuesForFarm = fieldQuerySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          fieldValues.push(...fieldValuesForFarm);
        }

        setFieldData(fieldValues);
      } catch (error) {
        console.error("Error retrieving field data from Firestore:", error);
      }
    };

    if (data.length > 0) {
      fetchFieldData();
    }
  }, [data]);

  useEffect(() => {
    const fetchHarvestData = async () => {
      try {
        // Retrieve harvest values from the 'harvest' subcollection of each field
        const harvestValues = [];
  
        for (const farm of data) {
          const fieldCollectionRef = collection(firestore, "farm", farm.id, "field");
          const fieldQuerySnapshot = await getDocs(fieldCollectionRef);
          const fieldDocs = fieldQuerySnapshot.docs;
  
          for (const fieldDoc of fieldDocs) {
            const fieldId = fieldDoc.id;
            const harvestCollectionRef = collection(
              firestore,
              "farm",
              farm.id,
              "field",
              fieldId,
              "harvest"
            );
            const harvestQuerySnapshot = await getDocs(harvestCollectionRef);
            const harvestDocs = harvestQuerySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            harvestValues.push(...harvestDocs);
          }
        }
  
        setHarvestData(harvestValues);
      } catch (error) {
        console.error("Error retrieving harvest data from Firestore:", error);
      }
    };
  
    if (data.length > 0) {
      fetchHarvestData();
    }
  }, [data]);
  

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "Name", headerName: "Name", width: 200 },
    { field: "Date", headerName: "Date", width: 200 },
    { field: "Location", headerName: "Location", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1 className="text-xl font-bold">Farm Data</h1>
      <DataGrid
        rows={data}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />
      <h1 className="text-xl font-bold">Field Data</h1>
      <DataGrid
        rows={fieldData}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />
      <h1 className="text-xl font-bold">Harvest Data</h1>
      <DataGrid
        rows={harvestData}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>

  );
};

export default ExcelExport;
