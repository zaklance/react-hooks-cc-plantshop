import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onSetStock }) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} onSetStock={onSetStock} />)}
      </ul>
  );
}

export default PlantList;
