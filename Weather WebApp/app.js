var position = document.getElementById("location");
function getLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        position.innerHTML="GeoLocation is not supported by this browser."
    }
}
function showPosition(position) {
    position.innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}