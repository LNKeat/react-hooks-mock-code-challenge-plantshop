import React, { useState } from "react";
import PriceForm from "./PriceForm";

function PlantCard({ plant, removePlant, updatePlants }) {
  const [inStock, setInStock] = useState(true)
  const [isPriceForm, setIsPriceForm] = useState(false)

  function toggleStock() {
    setInStock(!inStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE',
    })
      .then(() => removePlant(plant))
  }

  function togglePriceForm() {
    setIsPriceForm(!isPriceForm)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: $ {plant.price}</p>
      <div className="card-button-container">
        <button className="price" onClick={togglePriceForm}>Change price</button>
        {inStock ? (
          <button className="stock primary" onClick={toggleStock}>In Stock</button>
        ) : (
          <button className="stock" onClick={toggleStock}>Out of Stock</button>
        )}
        <button className="trash" onClick={handleDelete}>🗑️</button>
      </div>
        {isPriceForm ? <PriceForm plant={plant} updatePlants={updatePlants} togglePriceForm={togglePriceForm} /> : null}
  
    </li>
  );
}

export default PlantCard;
