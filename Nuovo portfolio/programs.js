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

function introductionCommandLineInterface() {
    var expandIcon = document.getElementsByClassName('expand')[0];
    var introductionC = document.getElementById('introductionC');

    if (expandIcon.style.transform == 'rotate(0deg)') {
        expandIcon.style.transform = 'rotate(90deg)';
        introductionC.style.display = 'block';
    } else {
        expandIcon.style.transform = 'rotate(0deg)';
        introductionC.style.display = 'none';
    }
}

function instructions(i) {
    var expandIcon = document.getElementsByClassName('expand')[i];
    var instructionPanel = document.getElementsByClassName('instructions')[i-1];

    if (expandIcon.style.transform == 'rotate(0deg)') {
        expandIcon.style.transform = 'rotate(90deg)';
        instructionPanel.style.display = 'block';
    } else {
        expandIcon.style.transform = 'rotate(0deg)';
        instructionPanel.style.display = 'none';
    }
}