import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings]=useState([]);
  const[search,  setSearch] =useState('')
  
useEffect(() => {
fetch('http://localhost:6001/listings')
  .then(response => response.json())
  .then(listings => setListings(listings))
}, [])

const filteredListings = [...listings].filter((el) => {
  return el.description.toLowerCase().includes(search.toLowerCase())
})

//let's say the search deliverable is similar to  Planeteers - if the db.json description matches the search, return it or if the db.json location matches the search, return that also. if not, don't it will have:
// const filteredListings = [...listings].filter((el) => {
//   return el.description.toLowerCase().includes(search.toLowerCase()) || el.location.     toLowerCase().includes(search.toLowerCase());
// })
  return (
    <div className="app">
      <Header setSearch={setSearch} search={search}  />
      <ListingsContainer listings={filteredListings}/>
    </div>
  );
}

export default App;

//search usestate is in app because i need to  be able to access db.json which lives here