const date = new Date();
var dateMonth = date.getMonth() + 1;
document.getElementById("date").innerHTML = date.getDate() + "/" + dateMonth;
//if (date.getDate() >= 8 && dateMonth == 12 || date.getDate() <= 6 && dateMonth == 1) {
if (1 == 2) {
    /*
        red = #BD0019;
        green = #146B3A;
        darkGreen = #165B33;
        yellow = F8B229;
        orange: #EA4630;
        alternativeRed = #BB2528;
    */
    function Christmas() {
        // sfondo
        document.getElementsByTagName("body")[0].style.backgroundColor="#146B3A";
        // colore icona menu
        document.getElementsByClassName("material-symbols-rounded")[0].style.color="#BD0019";
        document.getElementsByClassName("material-symbols-rounded")[1].style.color="#BD0019";
        // colore scritta menu
        document.getElementsByClassName("menu")[0].style.color="#BD0019";
        document.getElementsByClassName("menu")[1].style.color="#BD0019";
        // colore linee verdi
        document.getElementsByClassName("line")[0].style.borderColor="#BD0019";
        document.getElementsByClassName("line")[2].style.borderColor="#BD0019";
        document.getElementById("sentence").style.borderColor="#BD0019";
        // colore sfondo header
        document.getElementsByTagName("header")[0].style.backgroundColor="#165B33";
        // colore nome
        document.getElementsByTagName("h1")[0].style.background="linear-gradient(-45deg, #F8B229, #EA4630, #F8B229, #EA4630)";
        document.getElementsByTagName("h1")[0].style.backgroundClip="text";
        document.getElementsByTagName("h1")[0].style.backgroundSize="400% 400%";
        // colore credits
        document.getElementById("credits").style.color="#EA4630"
        document.getElementById("credits").style.borderColor="#EA4630";
        // scritte multi color projmenu
        const scritteMultiColor = document.getElementsByTagName("span");
        scritteMultiColor[9].style.backgroundImage="linear-gradient(90deg,#B80000,#7D0000)";
        scritteMultiColor[12].style.backgroundImage="linear-gradient(90deg,#B80000,#7D0000)";
        scritteMultiColor[13].style.backgroundImage="linear-gradient(90deg,#B80000,#7D0000)";
        // colore viewProjects
        document.getElementsByTagName("li")[9].style.color="rgb(166, 212, 255)";
        document.getElementById("projectLine").style.borderColor="rgb(166, 212, 255)";
    };
    Christmas();
}