import React, { useState } from 'react'


function PriceForm({ plant, updatePlants, togglePriceForm }){
  const[plantPrice, setPlantPrice] = useState(plant.price)

  function handleUpdate(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        price: plantPrice
      }),
    })
    .then(res => res.json())
    .then(plant => {
      updatePlants(plant)
      togglePriceForm()
    })
  }
  return (
    <form>
      <input type="number" step="0.01" value={plantPrice} onChange={(e)=> setPlantPrice(e.target.value)} style={{
          backgroundColor: 'black',
          color: 'white',
          borderStyle: 'solid 1px black', 
          fontFamily: 'san serif',
          fontSize: '12px',
          width: '40%'
          }}
       />
      <button onClick={handleUpdate}>Submit</button>
    </form>
  )
}

export default PriceForm