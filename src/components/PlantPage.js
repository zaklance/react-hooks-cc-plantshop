import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [ query, setQuery ] = useState('');
  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase()));

  const onSetStock = (id) => {
    const updatePlants = plants.map((plant) => {
      if (plant.id === id) {
        return { ...plant, isInStock: !plant.isInStock};
      }
      return plant;
    })
    setPlants(updatePlants);
  }

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search query={query} setQuery={setQuery} />
      <PlantList plants={filterPlants} onSetStock={onSetStock} />
    </main>
  );
}

export default PlantPage;
