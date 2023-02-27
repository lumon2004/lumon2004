// per links
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
// per il portfolio
function openNavMenu() {
    document.getElementsByTagName('navmenu')[0].style.marginTop="0%";
    document.getElementById('menuScritta').style.display="none";
    document.getElementById('closeScritta').style.display="inline-flex";
}
function closeNavMenu() {
    document.getElementsByTagName('navmenu')[0].style.marginTop="-100vh";
    document.getElementById('menuScritta').style.display="inline-flex";
    document.getElementById('closeScritta').style.display="none";
}
function openProjectsMenu() {
    document.getElementsByTagName("projmenu")[0].style.marginTop="-13vh";
}
function closeProjectsMenu() {
    document.getElementsByTagName("projmenu")[0].style.marginTop="100vh";
}
function bringsToProjects() {
    closeNavMenu();
    openProjectsMenu();
}