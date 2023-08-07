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