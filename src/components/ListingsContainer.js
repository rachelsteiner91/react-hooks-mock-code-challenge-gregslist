import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  return (
    <main>
      <ul className="cards">
        {
          listings.map((el) => {
          return <ListingCard key={el.id} listing={el} />
         })}
      </ul>
    </main>
  );
}

export default ListingsContainer;

//CORE DELIVERABLE 1
//When the app starts, I can see all listings.
  // .map return all listings when the aapp starts
  /* use the ListingCard component to display listings */