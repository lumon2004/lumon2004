var isRunningTimer = false;
var intervalId;
var startTime = 0; // Variabile per memorizzare il timestamp iniziale quando si ferma il timer
const startStopBtn = document.getElementById("startStopBtnTimer");
const deleteBtn = document.getElementById("deleteBtn");

document.querySelector("input#hoursInput").min = 0;
document.querySelector("input#minutesInput").min = 0;
if (document.querySelector("input#minutesInput").min !== 0 || document.querySelector("input#hoursInput").min !== 0) {
    document.querySelector("input#secondsInput").min = 0;
} else {
    document.querySelector("input#secondsInput").min = 1;
}

function startTimer() {
    var hours = document.getElementById("hoursInput").value;
    var minutes = document.getElementById("minutesInput").value;    
    var seconds = document.getElementById("secondsInput").value;
    if (hours === 0 && minutes === 0 && seconds === 0) {
        document.getElementById("timerRunning").style.color = "red";
        document.getElementById("timerRunning").textContent = "Imposta una quantità di tempo valida!";
    } else {
        intervalId = setInterval(function() {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        // Il timer è scaduto
                        document.getElementById("timerRunning").textContent = "Timer finito!";
                        clearInterval(intervalId); // Interrompi l'intervallo quando il timer è finito
                        isRunningTimer = false;
                    }
                }
            }
    
            // Formatta i numeri per visualizzarli con lo zero iniziale se necessario
            var formattedHours = hours < 10 ? "0" + hours : hours;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    
            document.getElementById("timerRunning").textContent = formattedHours + ' : ' + formattedMinutes + ' : ' + formattedSeconds;
    
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    startTime = Date.now(); // Memorizza il timestamp quando si ferma il timer
    isRunningTimer = false;
    startStopBtn.textContent = "Ricomincia";
}

function deleteTimer() {
    /* FUNZIONALITÀ */
    stopTimer();

    /*  STILE */
    startStopBtn.style.backgroundColor = "rgb(0,230,0)";
    startStopBtn.textContent = "Avvia";
    deleteBtn.style.backgroundColor = "white";
    document.getElementById("timerRunning").textContent = '';
}

function startStopTimer() {
    if (isRunningTimer === false) {             // click su Avvia
        isRunningTimer = true;
        startStopBtn.style.backgroundColor = "orange";
        startStopBtn.textContent = "Stop";
        deleteBtn.style.backgroundColor = "red";
        /*if (startTime > 0) {
            // Se c'è un timestamp di inizio, calcola il tempo trascorso e sottrai dal tempo iniziale
            var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            var totalSeconds = (parseInt(document.getElementById("hoursInput").value) * 3600) +
                               (parseInt(document.getElementById("minutesInput").value) * 60) +
                               parseInt(document.getElementById("secondsInput").value);
            remainingTime = totalSeconds - elapsedTime;
            if (remainingTime < 0) {
                remainingTime = 0;
            }
        }*/
        startTimer();
    } else if (isRunningTimer === true) {       // click su Stop
        startStopBtn.style.backgroundColor = "rgb(0,230,0)";
        startStopBtn.textContent = "Avvia";
        deleteBtn.style.backgroundColor = "white";
        stopTimer();
    }
}