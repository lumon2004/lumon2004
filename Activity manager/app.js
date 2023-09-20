var introductionPanel = document.getElementsByClassName("introduction")[0];

function introduction() {
    introductionPanel.style.top = '20vh';
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

function fontSettings() {
    var fontSettings = document.getElementById("fontSettings");
    var computedStyle = window.getComputedStyle(fontSettings);

    if (computedStyle.display === "none") {
        fontSettings.style.display = "block";
    } else if (computedStyle.display === "block") {
        fontSettings.style.display = "none";
    }
}

function newNote() {
    var divRight = document.querySelector("main .right .noteContent");

    // Crea un elemento di input di tipo testo
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.placeholder = "Inserisci la tua nota...";

    // Aggiungi l'input al divLeft
    divRight.appendChild(inputElement);

    var divLeft = document.querySelector("main .left");
    var pElement = divLeft.querySelector("p");
    
    if (pElement && pElement.textContent === "Nessuna attività recente") {
        var nuovoP = document.createElement("p");
        nuovoP.textContent = "Nuova nota";
        divLeft.innerHTML = "";
        divLeft.appendChild(nuovoP);
    } else if (pElement && pElement.textContent === "Nuova nota") {
        console.log("Nota già aggiunta. Scrivi!");
    }
}

function deleteNote() {
    var divLeft = document.querySelector("main .left");
    var pElement = divLeft.querySelector("p");

    if (pElement && pElement.textContent !== "Nessuna attività recente"/* && pElement.textContent !== "Nuova nota"*/) {
        var nuovoP = document.createElement("p");
        nuovoP.textContent = "Nessuna attività recente";
        divLeft.innerHTML = "";
        divLeft.appendChild(nuovoP);
    }
}