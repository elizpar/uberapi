


// create placeholder variables
var userLatitude
  , userLongitude;


navigator.geolocation.watchPosition(function(position) {
    console.log(position);

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});