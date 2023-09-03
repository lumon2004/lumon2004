function openAbout() {
    document.getElementById('about').style.display="block";
    document.getElementById('downloads').style.display="none";
    document.getElementById('doc').style.display="none";
}

function openDownloads() {
    document.getElementById('about').style.display="none";
    document.getElementById('downloads').style.display="block";
    document.getElementById('doc').style.display="none";
}

function openDocumentation() {
    document.getElementById('about').style.display="none";
    document.getElementById('downloads').style.display="none";
    document.getElementById('doc').style.display="block";
}

function explainC() {
    var displayExplanationC = document.getElementById('explC').style.display;

    if (displayExplanationC == 'none') {
        document.getElementById('explC').style.display = 'block';
        document.getElementById('openCloseExpl').innerHTML = 'Close';
    } else if (displayExplanationC == 'block') {
        document.getElementById('explC').style.display = 'none';
        document.getElementById('openCloseExpl').innerHTML = 'What\'s C?';
    }
}

// Definisci uno stato globale per il pannello di introduzione
var introductionState = false;

function introductionCommandLineInterface() {
    var expandIcon = document.getElementsByClassName('expand')[0];
    var introductionC = document.getElementById('introductionC');

    // Controlla lo stato del pannello di introduzione
    if (!introductionState) {
        expandIcon.style.transform = 'rotate(90deg)';
        introductionC.style.display = 'block';
        introductionState = true;
    } else {
        expandIcon.style.transform = 'rotate(0deg)';
        introductionC.style.display = 'none';
        introductionState = false;
    }
}

// Definisci uno stato globale per tenere traccia dello stato dei pannelli
var panelStates = {};

function instructions(i) {
    var expandIcon = document.querySelectorAll('.expand')[i];
    var instructionPanel = document.querySelectorAll('.instructions')[i - 1];
    
    // Controlla lo stato del pannello corrente
    if (!panelStates[i]) {
        expandIcon.style.transform = 'rotate(90deg)';
        instructionPanel.style.display = 'block';
        panelStates[i] = true;
    } else {
        expandIcon.style.transform = 'rotate(0deg)';
        instructionPanel.style.display = 'none';
        panelStates[i] = false;
    }
}


function downloadOptions(i) {
    var downloadOptions = document.getElementsByClassName('downloadOptions')[i-1];

    if (downloadOptions.style.display == 'none') {
        if (window.innerWidth <= 415) {
            downloadOptions.style.display = 'grid';
        } else {
            downloadOptions.style.display = 'flex';
        }
    } else {
        downloadOptions.style.display = 'none';
    }
}

function closeAlert() {
    document.getElementById('alert').style.display = 'none';
}