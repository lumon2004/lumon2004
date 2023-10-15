/* VARIABILI DATA */
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
/* COSTANTI COLORI */
const bianco = "#fff";
const nero = "#000";
const rossoNatalizio = "#E74C3C";
const verdeAbete = "#2ECC71";
const rossoScuro = "#C0392B";
const verdePino = "#27AE60";
const rossoBordeaux = "#922B21";
const verdeSalvia = "rgb(0, 121, 97)";
/* COSTANTI ELEMENTI */
const header = document.getElementsByTagName("header")[0];
const underHeaderWorks = document.getElementsByClassName("underHeader")[0];
const underHeaderServices = document.getElementsByClassName("underHeader")[1];
const underHeaderContacts = document.getElementsByClassName("underHeader")[2];
const underHeaderWorksMobile = document.getElementsByClassName("underHeader")[3];
const underHeaderServicesMobile = document.getElementsByClassName("underHeader")[4];
const underHeaderContactsMobile = document.getElementsByClassName("underHeader")[5];
const mobileMenu = document.getElementsByClassName("mobileMenu")[0];
const main = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

if ((day >= 8 && month == 12) || (day <= 6 && month == 1)) {
    var Christmas = 1;
}
function Xmas() {
    /* SISTEMAZIONI DI BASE PER DESKTOP */
    header.style.backgroundColor = rossoNatalizio;
    header.style.color = bianco;
    header.getElementsByTagName("a")[0].style.color = bianco;
    header.getElementsByTagName("a")[9].style.color = bianco;
    underHeaderWorks.style.backgroundColor = rossoNatalizio;
    underHeaderContacts.style.backgroundColor = rossoNatalizio;
    underHeaderServices.style.backgroundColor = rossoNatalizio;
    for (i = 0; i <= 7; i++) {
        underHeaderWorks.getElementsByTagName("a")[i].style.color = bianco;
        if (i == 7) {
            underHeaderWorks.getElementsByTagName("p")[0].style.color = "rgb(0, 115, 10)";
            underHeaderWorks.getElementsByTagName("p")[1].style.color = "rgb(0, 115, 10)";
            underHeaderWorks.getElementsByTagName("p")[2].style.color = "rgb(0, 115, 10)";
        }
    }
    for (i = 0; i <= 3; i++) {
        underHeaderContacts.getElementsByTagName("a")[i].style.color = bianco;
        if (i == 3) {
            underHeaderContacts.getElementsByTagName("p")[0].style.color = "rgb(0, 115, 10)";
        }
    }
    for (i = 0; i <= 2; i++) {
        underHeaderServices.getElementsByTagName("a")[i].style.color = bianco;
        if (i == 2) {
            underHeaderServices.getElementsByTagName("p")[0].style.color = "rgb(0, 115, 10)";
        }
    }

    /* AGGIUSTAMENTI PER MOBILE */
    if (window.innerWidth <= 415) {
        mobileMenu.style.backgroundColor = rossoNatalizio;
        for (i = 0; i <= 7; i++) {
            mobileMenu.getElementsByClassName("material-symbols-rounded")[i].style.color = bianco;
        }
        /*mobileMenu.getElementsByTagName("p")[0].style.color = bianco;*/
        for (i = 0; i <= 8; i++) {
            mobileMenu.getElementsByTagName("p")[i].style.color = bianco;
        }
    }
}
if (Christmas) {
    Xmas();
}