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
// lingua
function italiano() {
    $(document).ready(function(){
        $("p:lang(it)").css("display", "block");
    });
    $(document).ready(function(){
        $("p:lang(en)").css("display", "none");
    });
    $(document).ready(function(){
        $("a:lang(it)").css("display", "block");
    });
    $(document).ready(function(){
        $("a:lang(en)").css("display", "none");
    });
    $(document).ready(function(){
        $("h2:lang(it)").css("display", "block");
    });
    $(document).ready(function(){
        $("h2:lang(en)").css("display", "none");
    });
};
function english() {
    $(document).ready(function(){
        $("p:lang(it)").css("display", "none");
    });
    $(document).ready(function(){
        $("p:lang(en)").css("display", "block");
    });
    $(document).ready(function(){
        $("a:lang(it)").css("display", "none");
    });
    $(document).ready(function(){
        $("a:lang(en)").css("display", "block");
    });
    $(document).ready(function(){
        $("h2:lang(it)").css("display", "none");
    });
    $(document).ready(function(){
        $("h2:lang(en)").css("display", "block");
    });
};
var language = document.documentElement.lang;
function switchLanguage() {
    document.documentElement.setAttribute("lang", "en")
    if (language === "it") {
        english();
    } else if (language === "en") {
        italiano();
    };
};
switchLanguage()
var imgLang = document.getElementsByTagName("img");
imgLang[29].setAttribute("lang", "it en");