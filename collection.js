var specialoffer = document.getElementById("special-offer")
var offerbar = document.getElementById("offer-bar")
offerbar.addEventListener("click", function(){
    specialoffer.style.display="none"
})
var bars = document.querySelector(".side-navbar")
var menuicon= document.getElementById("side-navbar-activate")
var closenav = document.getElementById("side-navbar-close")
menuicon.addEventListener("click",function(){
    bars.style.right=0
})
closenav.addEventListener("click", function(){
    bars.style.right="-60%"
})
var container = document.getElementById("pro-section");
var search = document.getElementById("search");
var productselector = container.querySelectorAll("div");

search.addEventListener("keyup", function() {
    var enteredvalue = this.value.toUpperCase(); // Corrected method name
    for (var count = 0; count < productselector.length; count++) { // Changed condition from <= to <
        var productnameElement = productselector[count].querySelector("h3");
        if (productnameElement) { // Check if h1 element exists
            var productname = productnameElement.textContent || "";
            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                productselector[count].style.display = "none";
            } else {
                productselector[count].style.display = "block";
            }
        }
    }
});
