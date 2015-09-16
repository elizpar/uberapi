


// create placeholder variables
var userLatitude
  , userLongitude
  , partyLatitude = 41.002692 
  , partyLongitude = -74.106663;

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    console.log(position);
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});


