function italiano() {
    document.getElementsByTagName("p")[0].style.display="block"; // Meteo
    document.getElementsByTagName("p")[1].style.display="none"; // Weather
    document.getElementsByTagName("p")[2].style.display="none"; // IT
    document.getElementsByTagName("p")[3].style.display="block"; // EN 
}
italiano()
function english() {
    document.getElementsByTagName("p")[0].style.display="none"; // Meteo
    document.getElementsByTagName("p")[1].style.display="block"; // Weather
    document.getElementsByTagName("p")[2].style.display="block"; // IT
    document.getElementsByTagName("p")[3].style.display="none"; // EN 
}