/*function openNav() {
    document.getElementsById("myNavMenu").style.visibility = "visible";
    document.getElementsById("main").style.zIndex = "0";
    document.main.style.backgroundColor = "rgba(0,0,0,0.4)";
};
function closeNav() {
    document.getElementsById("myNavMenu").style.visibility = "hidden";
    document.getElementById("main").style.zIndex = "0";
    document.body.style.backgroundColor = "initial";
}
const searchButton = document.querySelector("header ul li .buttons.search-button");
const closeButton = document.querySelector(".searchContainer .closeInnerSearchLogo");
const header = document.querySelector("header ul .buttonsUl");
const searchContainer = document.querySelector(".searchContainer.hide");
const overlay = document.querySelector(".overlay");
searchButton.addEventListener("click", () => {
    header.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
});
closeButton.addEventListener("click", () => {
    header.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
});
overlay.addEventListener("click", () => {
    header.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
});
function openSearchBar () {
    document.getElementsByClassName("buttonsUl").classList.add("hide");
    document.getElementsByClassName("searchContainer").classList.remove("hide");
    document.getElementsByClassName("overlay").classList.add("show");
};
function closeSearchBar () {
    document.getElementsByClassName("buttonsUl").classList.remove("hide");
    document.getElementsByClassName("searchContainer").classList.add("hide");
    document.getElementsByClassName("overlay").classList.remove("show");
}
document.getElementsByClassName("search-button").addEventListener("click", openSearchBar ());
document.getElementsByClassName("closeInnerSearchLogo").addEventListener("click", closeSearchBar ());*/
/*$(document).ready(function() {
    $(".search-button").click(function() {
        $(".buttonsUl").hide();
        $(".searchContainer.hide").show();
    });
});
$(document).ready(function () {
    $(".closeInnerSearchLogo").click(function() {
        $(".searchContainer").hide();
        $(".buttonsUl").show();
    });
});*/