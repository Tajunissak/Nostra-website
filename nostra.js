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
var slide = document.querySelector(".Slider-container, .Slider-bars")
var items = document.querySelector(".Slider-container, .Slider-bars ,.slides")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")

/*let active=0;
let lengthitems = items.length - 1;
next.onclick =function(){
    

    if (active + 1 > lengthitems) {
        active = 0
    } else {
        active = active + 1;
    }
    reloadSlider()
}
function reloadSlider(){
    let leftcheck = items[active].offsetLeft;
    slide.style.left = -leftcheck + 'px';
}
*/

var submit = document.querySelector(".btns-new")
submit.addEventListener("click", function(){
    event.preventDefault()
    var passregex =/^[a-zA-z]*$/
    var emailregex=/^[a-zA-z0-9]+@gmail\.com/
    var msgregex =/^[a-zA-z0-9]*$/

    var email=document.getElementById("emailbox")
    var pass = document.getElementById("passwordbox")
    var msgbox = document.getElementById("msgbox")

    if(emailregex.test(email.value)==false){
        document.querySelector(".email-error").style.display="inline"
        validate = false
    }
    else{
        document.querySelector(".email-error").style.display="none"
    }
    if(passregex.test(pass.value)==false){
        document.querySelector(".pass-error").style.display="inline"
        validate = false
    }
    else{
        document.querySelector(".pass-error").style.display="none"
    }
    if(msgregex.test(msgbox.value)==false){
        document.querySelector(".msg-error").style.display="inline"
        validate = false
    }
    else{
        document.querySelector(".msg-error").style.display="none"
    }
    if(validate==true){
        alert("you have entered the correct mail")
    }
})