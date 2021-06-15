import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, setPlantData}) {
  console.log(plantData)
  let plantArr = plantData.map(obj => {
    return <PlantCard name={obj.name} img={obj.image} price={obj.price} key={obj.id} />
  })

  return (
    <ul className="cards">{plantArr}</ul>
  );
}

export default PlantList;
