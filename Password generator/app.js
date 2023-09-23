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
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validCharset.length);
        password += validCharset[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    const passwordText = passwordField.value;

    if (!navigator.clipboard) {
        // Clipboard API non è supportato dal browser
        alert("Copiare negli appunti non è supportato da questo browser. Puoi copiare manualmente il testo.");
        return;
    }

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            // Copia riuscita
            copyIcon.textContent = "done";
            console.log("Password copiata negli appunti con successo!");
        })
        .catch(err => {
            copyIcon.textContent = "error";
            console.error("Errore nella copia negli appunti:", err);
            alert("Si è verificato un errore durante la copia negli appunti.");
        });
}