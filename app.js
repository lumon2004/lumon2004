/* APRI E CHIUDI HEADER MENU */

function openMobileMenu() {
    document.getElementsByClassName('mobileMenu')[0].style.maxHeight = '100vh';
    document.getElementsByClassName('mobileMenu')[0].style.transitionDuration = '1s';
}

function closeMobileMenu() {
    document.getElementsByClassName('mobileMenu')[0].style.maxHeight = '0vh';
    document.getElementsByClassName('mobileMenu')[0].style.transitionDuration = '.5s';
}

/* APRI E CHIUDI MENU LATERALE INTERNO HEADER MENU */

function openSideMenu(i) {
    document.getElementsByClassName('sideMenu')[i-1].style.display = 'block';
    document.getElementsByTagName('li')[22].style.display = 'none';     // works
    document.getElementsByTagName('li')[35].style.display = 'none';     // repository
    document.getElementsByTagName('li')[36].style.display = 'none';     // services
    document.getElementsByTagName('li')[42].style.display = 'none';     // contacts
}

function closeSideMenu(i) {
    document.getElementsByClassName('sideMenu')[i-1].style.display = 'none';
    document.getElementsByTagName('li')[22].style.display = 'flex';     // works
    document.getElementsByTagName('li')[35].style.display = 'flex';     // repository
    document.getElementsByTagName('li')[36].style.display = 'flex';     // services
    document.getElementsByTagName('li')[42].style.display = 'flex';     // contacts
}