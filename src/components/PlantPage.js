import React, { useState, useEffect } from 'react'
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState(null)
  const [fullPlantList, setFullPlantList] = useState(null)
  useEffect(() => {
    fetch('http://localhost:6001/plants/')
    .then(res => res.json())
    .then(plants => {
      setPlantList(plants)
      setFullPlantList(plants)
    })
  },[])

  function addNewPlant(newPlant){
    fetch('http://localhost:6001/plants/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(newPlant => {
      setFullPlantList([...fullPlantList, newPlant])
      setPlantList([...plantList, newPlant])
    })
  }

  function filterByName(search){
    const filtered = fullPlantList.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
    setPlantList(filtered)
  }

  function removePlant(selectedPlant){
    const filtered = fullPlantList.filter(plant => plant.id !== selectedPlant.id)
    setFullPlantList(filtered)
    setPlantList(filtered)
  }

  function updatePlants(selectedPlant){
    const filtered = fullPlantList.map(plant => {
      if(plant.id !== selectedPlant.id){
        return plant
      }else{
        return selectedPlant
      }
    })
    setFullPlantList(filtered)
    setPlantList(filtered)
  }


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search filterByName={filterByName} />
      {fullPlantList ? <PlantList plants={plantList} removePlant={removePlant} updatePlants={updatePlants} /> : <h2 style={{
        margin: '20px',
        textAlign: 'center', 
        border: 'solid'
        }}>Loading Plants...</h2> }
    </main>
  );
}

export default PlantPage;
