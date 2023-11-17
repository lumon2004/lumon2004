let crono;
let isRunningCrono = false;
let hundredths = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunningCrono) {
        clearInterval(crono);
        document.getElementById('startStopBtnCrono').textContent = 'Avvia';
        document.getElementById('startStopBtnCrono').style.padding = '2.25vw 1.5vw';
    } else {
        crono = setInterval(updateCrono, 10);
        document.getElementById('startStopBtnCrono').textContent = 'Stop';
        document.getElementById('startStopBtnCrono').style.padding = '2.25vw 1.75vw';
    }
    isRunningCrono = !isRunningCrono;
}

function reset() {
    clearInterval(crono);
    document.getElementById('crono').textContent = '00:00,00';
    isRunningCrono = false;
    hundredths = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('startStopBtnCrono').textContent = 'Avvia';
    document.getElementById('startStopBtnCrono').style.padding = '2.25vw 1.5vw';
}

function updateCrono() {
    hundredths++;
    if (hundredths === 60) {
        hundredths = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const displayHundredths = hundredths < 10 ? '0' + hundredths : hundredths;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displayHours = hours.toString();

    if (hours > 0 || minutes >= 60) {
        document.getElementById('crono').textContent = displayHours + ',' + displayMinutes + ':' + displaySeconds + ',' + displayHundredths;
    } else {
        document.getElementById('crono').textContent = displayMinutes + ':' + displaySeconds + ',' + displayHundredths;
    }
}

document.getElementById('startStopBtnCrono').addEventListener('click', startStop);
document.getElementById('resetBtn').addEventListener('click', reset);