/* INTRODUZIONE */

function howToUse() {
    var tutorial = document.getElementById("tutorial");
    var arrow = document.getElementsByClassName("material-symbols-rounded")[0];
    if (tutorial.style.display === "none") {
        tutorial.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
    } else if (tutorial.style.display === "block") {
        tutorial.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
}

/* GENERATORE PASSWORD */

function placeholderPassword() {
    // Ottieni riferimenti agli elementi DOM
    const lengthInput = document.getElementById("length");
    const passwordInput = document.getElementById("password");

    // Aggiungi un gestore di eventi per rilevare i cambiamenti nella lunghezza
    lengthInput.addEventListener("input", updatePlaceholder);

    // Funzione per aggiornare il placeholder
    function updatePlaceholder() {
        const length = parseInt(lengthInput.value); // Ottieni il valore come numero

        // Crea un placeholder con un numero di pallini corrispondente alla lunghezza
        const placeholder = "•".repeat(length);

        // Imposta il placeholder nell'input password
        passwordInput.placeholder = placeholder;
    }

    // Chiamalo inizialmente per impostare il placeholder in base al valore predefinito
    updatePlaceholder();
}

placeholderPassword();

var copyIcon = document.getElementsByClassName("material-symbols-rounded")[1];

function generatePassword() {
    copyIcon.textContent = "content_copy";

    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const charset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const symbolsCharset = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validCharset = charset;
    if (includeUppercase) validCharset += uppercaseCharset;
    if (includeNumbers) validCharset += numbersCharset;
    if (includeSymbols) validCharset += symbolsCharset;

    let password = "";
    let currentIndex = 0; // Indice per tener traccia della lettera corrente

    function generateLetter() {
        if (currentIndex < length) {
        const randomIndex = Math.floor(Math.random() * validCharset.length);
        password += validCharset[randomIndex];
        document.getElementById("password").value = password;
        currentIndex++;

        // Richiedi il prossimo frame dell'animazione
        requestAnimationFrame(generateLetter);
        }
    }

    // Inizia l'animazione
    generateLetter();
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    const passwordText = passwordField.value;
  
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordText)
        .then(() => {
            // Copia riuscita
            console.log("Password copiata negli appunti con successo!");
            copyIcon.textContent = "done";
        })
        .catch(err => {
            // Fallback per la copia manuale
            copyManually(err);
        });
    } else {
        // Fallback per la copia manuale
        copyManually();
    }
}
  
function copyManually(err) {
    copyIcon.textContent = "error";
    console.error("Errore nella copia negli appunti:", err);
    alert("Ops! Si è verificato un errore durante la copia negli appunti. Dovrai copiarla manualmente");
}