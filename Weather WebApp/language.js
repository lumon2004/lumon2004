var italianWords = document.getElementsByClassName("italiano");
var englishWords = document.getElementsByClassName("english");
function italiano() {
    italianWords[0].style.display="block";
    italianWords[1].style.display="block";
    italianWords[2].style.display="block";
    englishWords[0].style.display="none";
    englishWords[1].style.display="none";
    englishWords[2].style.display="none";
}
italiano()
function english() {
    italianWords[0].style.display="none";
    italianWords[1].style.display="none";
    italianWords[2].style.display="none";
    englishWords[0].style.display="block";
    englishWords[1].style.display="block";
    englishWords[2].style.display="block";
}
var weathConds = ["Soleggiato", "Parzialmente soleggiato", "Parzialmente nuvoloso", "Nuvoloso", "Pioviggine", "Pioggia", "Acquazzone", "Allerta diluvio", "Nevischio", "Nevoso", "Neve", "Grandine"]
var randomWeatherConditions = weathConds[Math.floor(Math.random()*weathConds.length)];
document.getElementById("weatherConditions").innerHTML= randomWeatherConditions; 
var tempValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9",
    "-10",
    "-11",
    "-12",
    "-13",
    "-14",
    "-15",
    "-16",
    "-17",
    "-18",
    "-19",
    "-20",
    "-21",
    "-22",
    "-23",
    "-24",
    "-25",
    "-26",
    "-27",
    "-28",
    "-29",
    "-30",
    "-31",
    "-32",
    "-33",
    "-34",
    "-35",
    "-36",
    "-37",
    "-38",
    "-39",
    "-40"
];
var randomTemperatureValue = tempValues[Math.floor(Math.random()*tempValues.length)];
document.getElementById("temperatureValue").innerHTML= randomTemperatureValue + "°";