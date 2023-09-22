/* GESTIONE ALTEZZA EDITOR DI TESTO */

function setMainHeight() {
    var headerHeight = document.querySelector("header").scrollHeight;
    var mainHeight = window.innerHeight - headerHeight;
    document.getElementsByTagName("main")[0].style.height = mainHeight + "px";
}
setMainHeight();
window.addEventListener("resize", setMainHeight);


/* GESTIONE PANNELLO DI INTRODUZIONE */

var introductionPanel = document.getElementsByClassName("introduction")[0];

function introduction() {
    if (window.innerWidth >= 415) {
        introductionPanel.style.top = '20vh';
    } else {
        introductionPanel.style.top = '22.5vh';
    }
}

introduction();

var shadowPanel = document.getElementById("shadow");

function start() {
    introductionPanel.style.top = "100vh";
    introductionPanel.style.transitionDuration = "1s";
    shadowPanel.style.backgroundColor="transparent";
    setTimeout(function() {
        shadowPanel.style.display = "none";
    }, 1000);
}