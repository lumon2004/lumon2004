// apri e chiudi menu laterale 
function openMenu() {
    if (document.body.offsetWidth >= 415) {
        document.getElementById("sideMenu").style.width="20%";
        document.getElementById("sideMenu").style.marginRight="80%";
    } else if (document.body.offsetWidth <= 414) {
        document.getElementById("sideMenu").style.width="100%";
        document.getElementById("sideMenu").style.marginRight="0%";
    }
};
function closeMenu() {
    document.getElementById("sideMenu").style.width="0%";
    document.getElementById("sideMenu").style.marginRight="100%";
};