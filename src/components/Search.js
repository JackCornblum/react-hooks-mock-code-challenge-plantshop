import React from "react";

function Search({filterPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={filterPlants}
      />
    </div>
  );
}

export default Search;
