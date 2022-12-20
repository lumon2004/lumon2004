function openMenu() {
    if (document.body.offsetWidth >= 415) {
        document.getElementById("sideMenu").style.width="20%";
        document.getElementById("sideMenu").style.marginLeft="80%";
        // document.body.style.width="70%";
        // document.body.style.marginRight="30%";
        document.getElementById("main").style.opacity=".1";
        document.getElementById("header").style.opacity=".1";
        document.getElementById("index").style.opacity=".1";
    } else if (document.body.offsetWidth <= 414) {
        document.getElementById("sideMenu").style.width="100%";
        document.getElementById("sideMenu").style.marginLeft="0%";
    }
};
function closeMenu() {
    document.getElementById("sideMenu").style.width="0%";
    document.getElementById("sideMenu").style.marginLeft="100%";
    document.getElementById("main").style.opacity="1";
    document.getElementById("header").style.opacity="1";
    document.getElementById("index").style.opacity="1";
};