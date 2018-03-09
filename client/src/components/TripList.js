import React from "react";
import Trip from './Trip'; 

 const TripList = ({ trips, updateTrip, deleteTrip, showTrip, locations }) => (
    <div className="row cards">
      { trips.map( trip => 
        <Trip 
          key={trip.id}
          {...trip}
          updateTrip={updateTrip}
          deleteTrip={deleteTrip}
          showTrip={showTrip}
          locations={locations}
        /> 
        )
      }
    </div> 
  )

export default TripList;  