import React from "react";

function Search({setSearch, search}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
function handleChange(e) {
  setSearch(e.target.value);
}
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
//I can search for listings by their name.
/////SEARCH AND FILTER
//1. create state for search
//2. filter through db.json comparaing element name to search value (or in this case, description)
//3. declare filtered version of original state
//4. pass down vaariable and function props all the way down to the child
//5. what is search doing? changing the status of the original state