var date = new Date();

/* DATA ATTUALE */
function giornoSettimana() {
    var giorno;
    var giornoSettimanaNumero = date.getDay();
    var settimana = [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica"
    ]
    giorno = settimana[giornoSettimanaNumero];
    return giorno;
}
var giornoNumero = date.getDate();
function mese() {
    var mese;
    var meseNumero = date.getMonth();
    var mesi = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
    ]
    mese = mesi[meseNumero];
    return mese;
}
var anno = date.getFullYear();
document.getElementById("date").innerHTML = giornoSettimana()+ " " + giornoNumero + " " + mese() + " " + anno;

/* ORARIO ATTUALE */
function updateClock() {
    var date = new Date();

    /* ORARIO ATTUALE */
    function ore() {
        var ore;
        var oraNumero = date.getHours();
        if (oraNumero < 10) {
            ore = "0" + oraNumero;
        } else {
            ore = oraNumero;
        }
        return ore;
    }
    function minuti() {
        var minuti;
        var minutiNumero = date.getMinutes();
        if (minutiNumero < 10) {
            minuti = "0" + minutiNumero;
        } else {
            minuti = minutiNumero
        }
        return minuti;
    }
    function secondi() {
        var secondi;
        var secondiNumero = date.getSeconds();
        if (secondiNumero < 10) {
            secondi = "0" + secondiNumero;
        } else {
            secondi = secondiNumero
        }
        return secondi;
    }
    document.getElementById("time").innerHTML = ore() + ":" + minuti() + ":" + secondi();
}
updateClock();
setInterval(updateClock, 1*1000);

/* SETTIMANA ATTUALE */
function getWeekNumber(date) {
    const currentDate = date || new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.floor((days + startOfYear.getDay()) / 7) + 1;
    return weekNumber;
}
const currentWeekNumber = getWeekNumber(new Date());
document.getElementById("week").innerHTML = "Settimana " + currentWeekNumber + "/52";

/* LUOGO */
luoghi = [
    "Los Angeles",
    "New York City",
    "Londra",
    "Roma",
    "Dubai",
    "Pechino",
    "Tokyo",
    "Sydney"
];
document.getElementById("place").innerHTML = luoghi[3];

function fuso(i, difference) {
    var date = new Date();
    function ore(difference) {
        var ore;
        var oraNumero = date.getHours()+difference;
        if (oraNumero < 10) {
            ore = "0" + oraNumero;
        } else {
            ore = oraNumero;
        }
        return ore;
    }
    function minuti() {
        var minuti;
        var minutiNumero = date.getMinutes();
        if (minutiNumero < 10) {
            minuti = "0" + minutiNumero;
        } else {
            minuti = minutiNumero
        }
        return minuti;
    }
    document.querySelectorAll(".city")[i].innerHTML = luoghi[i];
    document.querySelectorAll(".fuso")[i].innerHTML = ore(difference) + ":" + minuti();
}