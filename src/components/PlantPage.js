import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [reload, setReload] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlantData(data))
  }, [reload])

  function addNewPlant(e){
    let plantName = e.target[0].value
    let plantUrl = e.target[1].value
    let plantPrice = e.target[2].value
    e.preventDefault()
    // console.log(e)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: plantName,
        image: plantUrl,
        price: plantPrice
      })
    })
    
    setReload(!reload)
    
  }

  function filterPlants(e){
    
    if(e.target.value !== "") {
      let copyOfPlantData = [...plantData]
      let filteredList = copyOfPlantData.filter(plant => {
        const name = plant.name.toLowerCase()
        const query = e.target.value.toLowerCase()
        return name.includes(query)

      })
      setPlantData(filteredList)
    }
    else {
      setReload(!reload)
    }

  }

  return (
    <main>
      <NewPlantForm
        addNewPlant={addNewPlant}
      />
      <Search 
        filterPlants={filterPlants}
      />
      <PlantList 
        plantData={plantData}
        setPlantData={setPlantData}
      />
    </main>
  );
}

export default PlantPage;
