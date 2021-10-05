import React, {useState} from "react";

function NewPlantForm({ addNewPlant }) {
  const [newPlantData, setNewPlantData] = useState({
    name: '',
    image: '',
    price: 0,
  })

  function updateForm(e){
    const name = e.target.name
    const value = e.target.value 
    const newPlant = {...newPlantData, [name]: value}
    setNewPlantData(newPlant)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    addNewPlant(newPlantData)
    setNewPlantData({
      name: '',
      image: '',
      price: 0,
    })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" value={newPlantData.name} placeholder="Plant name" onChange={updateForm} />
        <input type="text" name="image" value={newPlantData.image} placeholder="Image URL" onChange={updateForm} />
        <input type="number" name="price" value={newPlantData.price} step="0.01" placeholder="Price" onChange={updateForm} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
