import React, {useState} from "react";

function ListingCard({listing}) {
  //I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
  const[isFavorited, setIsFavorited] = useState(true)

  function handleStarClick(e) {
    setIsFavorited(!isFavorited)
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img value={listing.id}src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={(e) => handleStarClick(e)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={(e) => handleStarClick(e)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.locaton}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

/* "id": 1,
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"*/

//CORE DELIVERABLE 1 - but needs to render the listing cards
//When the app starts, I can see all listings.

//CORE DELIVERABLE 2
//I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.