// checks if the site is scrolled more than 100px from the top, if not the up button stays hidden
window.onscroll = function () {
	magic()
};

function magic() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("toppen").style.display = "block";
    } else {
        document.getElementById("toppen").style.display = "none";
    }
}
// when you click the up-button it triggers the function which then takes you to the top of the page
function tiptopp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// deletes what ever is in the email slot, gives the costumer the idea that something has happend and the site works
function slett() {
	document.getElementById("email").value = "";
}

// Added function to the input so it reacts to when ENTER is pressed and not only the button.
function handle(e) {
    if (e.keyCode === 13) {
        myBtn.click();
    }
}

function lukk(){
    document.getElementById("openNav").checked = false;
}

//closes the navigationbar
/*function lukk(){
    var d = document.getElementsByClassName("d");
    for(var i = 0; i < d.length; i++) {
          d[i].style.display = "none";
    }
}

function open(){
    var d = document.getElementsByClassName("d");
    for(var i = 0; i < d.length; i++) {
          d[i].style.display = "block";
    }
}
*/

// Font-size changer

const topp = document.querySelector("#main");
const changer = document.querySelector("#changer");

function changefont() {
    if(topp.style.fontSize == "large") {
        changer.innerHTML = "Text extra large";
        topp.style.fontSize = "x-large";
    }
    else if(topp.style.fontSize == "x-large") {
        changer.innerHTML = "Text small";
        topp.style.fontSize = "initial";
    } else {
        changer.innerHTML = "Text large";
        topp.style.fontSize = "large";
    }

}

/* carousel */

var i = 0;
const images = [];
const changeTime = 4000;

images[0] = 'bilder/jakke.png';
images[1] = 'bilder/jakke3.png';
images[2] = 'bilder/jakke4.png';
images[3] = 'bilder/jakke2.png';

function changeImage() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++
    }
    else {
        i = 0;
    }

    setTimeout("changeImage()", changeTime);
}

window.onload = changeImage;
