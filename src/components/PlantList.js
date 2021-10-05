import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, removePlant, updatePlants }) {
  return (
    <ul className="cards">
      {
        plants.map(plant => {
          return <PlantCard key={plant.id} plant={plant} removePlant={removePlant} updatePlants={updatePlants} />
        })
      }
    </ul>
  );
}

export default PlantList;
