import React, { useState } from 'react';

function MyComponent() {
  
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {

    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(prevFoods => [...prevFoods, newFood]);
  }

  function handleRemoveFood(index) {

    setFoods(prevFoods => prevFoods.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="my-container">
        <h2 className='my-heading'>List of Food</h2>
        <ul className="my-list">
          {foods.map((food, index) => (
            <li className="my-list-items" key={index} onClick={() => handleRemoveFood(index)} className="my-list-item">
              {food}
            </li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" className="my-input" />
        <button onClick={handleAddFood} className="my-button">Add Food</button>
      </div>
    </>
  );
}

export default MyComponent;
