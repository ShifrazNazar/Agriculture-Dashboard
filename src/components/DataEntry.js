import React, { useState } from 'react';
import { firestore, collection, addDoc } from '../firebase';

const DataEntry = () => {
  const [values, setValues] = useState({
    activePhotosynthesisBacteria: '',
    activeYeasts: '',
    totalLacticAcidBacteria: '',
    activeActinomycetes: '',
    activeFungi: '',
    celluloseUtilisers: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, 'BiologyBalance');
      await addDoc(collectionRef, values);

      console.log('Data successfully stored in Firestore!');
      // Reset form values
      setValues({
        activePhotosynthesisBacteria: '',
        activeYeasts: '',
        totalLacticAcidBacteria: '',
        activeActinomycetes: '',
        activeFungi: '',
        celluloseUtilisers: '',
      });
    } catch (error) {
      console.error('Error storing data in Firestore:', error);
    }
  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="activePhotosynthesisBacteria" className="block mb-2">
            Active Photosynthesis Bacteria
          </label>
          <input
            type="text"
            id="activePhotosynthesisBacteria"
            name="activePhotosynthesisBacteria"
            value={values.activePhotosynthesisBacteria}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="activeYeasts" className="block mb-2">
            Active Yeasts
          </label>
          <input
            type="text"
            id="activeYeasts"
            name="activeYeasts"
            value={values.activeYeasts}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalLacticAcidBacteria" className="block mb-2">
            Total Lactic Acid Bacteria
          </label>
          <input
            type="text"
            id="totalLacticAcidBacteria"
            name="totalLacticAcidBacteria"
            value={values.totalLacticAcidBacteria}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="activeActinomycetes" className="block mb-2">
            Active Actinomycetes
          </label>
          <input
            type="text"
            id="activeActinomycetes"
            name="activeActinomycetes"
            value={values.activeActinomycetes}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="activeFungi" className="block mb-2">
            Active Fungi
          </label>
          <input
            type="text"
            id="activeFungi"
            name="activeFungi"
            value={values.activeFungi}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="celluloseUtilisers" className="block mb-2">
            Cellulose Utilisers
          </label>
          <input
            type="text"
            id="celluloseUtilisers"
            name="celluloseUtilisers"
            value={values.celluloseUtilisers}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataEntry;
