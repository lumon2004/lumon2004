/* INDEX PAGE MANAGER */
var indexLabel = document.querySelectorAll("#index li");
var oreLocaliPanel = document.getElementById("oreLocali");
var cronometroPanel = document.getElementById("cronometro");
var timerPanel = document.getElementById("timer");
function openMenu(i) {
    for (let j = 0; j < indexLabel.length; j++) {
        indexLabel[j].style.backgroundColor = j === i ? "var(--indexLabelHighlighted)" : "transparent";
    }
    oreLocaliPanel.style.display = i === 0 ? "block" : "none";
    cronometroPanel.style.display = i === 1 ? "block" : "none";
    timerPanel.style.display = i === 2 ? "block" : "none";
}
openMenu(2);