/* APRI E CHIUDI HEADER MENU */

function openMobileMenu() {
    document.getElementsByClassName('mobileMenu')[0].style.width = '100%';
    document.getElementsByClassName('mobileMenu')[0].style.maxHeight = '100vh';
    document.getElementsByClassName('mobileMenu')[0].style.transitionDuration = '1.5s';
}

function closeMobileMenu() {
    document.getElementsByClassName('mobileMenu')[0].style.width = '0';
    document.getElementsByClassName('mobileMenu')[0].style.maxHeight = '0vh';
    document.getElementsByClassName('mobileMenu')[0].style.transitionDuration = '.5s';
}

/* APRI E CHIUDI MENU LATERALE INTERNO HEADER MENU */

function openSideMenu(i, j) {
    document.getElementsByClassName('sideMenu')[i].style.display="block";
    if (i==0 && j==22) {
        for (j=j+1; j<=51; j++) {
            if (!(j>=24 && j<=34)) {
                document.getElementsByTagName('li')[j].style.display = "none";
            }
        }
    } else if (i==1 && j==35) {
        document.getElementsByTagName('li')[23].style.display = "none";
        document.getElementsByTagName('li')[35].style.display = "none";
        for (j=j+1; j<=51; j++) {
            if ((!(j>=37 && j<=43))) {
                document.getElementsByTagName('li')[j].style.display = "none";
            }
        }
    } else if (i==2 && j==44) {
        document.getElementsByTagName('li')[23].style.display = "none";
        document.getElementsByTagName('li')[35].style.display = "none";
        document.getElementsByTagName('li')[36].style.display = "none";
        document.getElementsByTagName('li')[44].style.display = "none";
        for (j=j+1; j<=51; j++) {
            if ((!(j>=46 && j<=51))) {
                document.getElementsByTagName('li')[j].style.display = "none";
            }
        }
    }
}

function closeSideMenu(i, j) {
    document.getElementsByClassName('sideMenu')[i].style.display="none";
    if (i==0 && j==22) {
        for (j=j+1; j<=51; j++) {
            if (!(j>=24 && j<=34)) {
                document.getElementsByTagName('li')[j].style.display = "flex";
            }
        }
    } else if (i==1 && j==35) {
        document.getElementsByTagName('li')[23].style.display = "flex";
        document.getElementsByTagName('li')[35].style.display = "flex";
        for (j=j+1; j<=51; j++) {
            if ((!(j>=37 && j<=43))) {
                document.getElementsByTagName('li')[j].style.display = "flex";
            }
        }
    } else if (i==2 && j==44) {
        document.getElementsByTagName('li')[23].style.display = "flex";
        document.getElementsByTagName('li')[35].style.display = "flex";
        document.getElementsByTagName('li')[36].style.display = "flex";
        document.getElementsByTagName('li')[44].style.display = "flex";
        for (j=j+1; j<=51; j++) {
            if ((!(j>=46 && j<=51))) {
                document.getElementsByTagName('li')[j].style.display = "flex";
            }
        }
    }
}