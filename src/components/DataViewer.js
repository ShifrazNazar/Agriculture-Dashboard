import React, { useEffect, useState } from "react";
import { firestore, collection, getDocs } from "../firebase";

const DataViewer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      try {
        const collectionRef = collection(firestore, "BiologyBalance");
        const querySnapshot = await getDocs(collectionRef);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-md bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Data Viewer</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="mb-4 rounded bg-gray-100 p-4">
            <p className="mb-2">Biology Balance</p>
            <p className="mb-2">
              Active Photosynthesis Bacteria:{" "}
              {item.activePhotosynthesisBacteria}
            </p>
            <p className="mb-2">Active Yeasts: {item.activeYeasts}</p>
            <p className="mb-2">
              Total Lactic Acid Bacteria: {item.totalLacticAcidBacteria}
            </p>
            <p className="mb-2">
              Active Actinomycetes: {item.activeActinomycetes}
            </p>
            <p className="mb-2">Active Fungi: {item.activeFungi}</p>
            <p>Cellulose Utilisers: {item.celluloseUtilisers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataViewer;
