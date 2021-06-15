import React, {useState} from "react";

function PlantCard({name, img, price}) {
  const [isInStock, setIsInStock] = useState(true)

  function handleClick(){
    let currentAvailability = !isInStock
    setIsInStock(currentAvailability)
  }

  return (
    <li className="card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
