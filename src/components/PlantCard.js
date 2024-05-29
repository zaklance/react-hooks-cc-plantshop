import React from "react";

function PlantCard({ plant, onSetStock }) {

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.isInStock ? (
        <button className="primary" onClick={() => onSetStock(plant.id)} >In Stock</button>
      ) : (
        <button onClick={() => onSetStock(plant.id)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
