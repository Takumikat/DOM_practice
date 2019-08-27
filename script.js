

//FONCTIONNALITE 1 : Faire apparaitre "Clique" lorsqu'on clique sur le footer"
var footerOnClick = document.getElementsByTagName("footer")[0];

console.log(footerOnClick);

footerOnClick.addEventListener('click',footerF);

function footerF() {
    console.log("Clique!")
};



//FONCTIONNALITE 1-bis : Faire apparaitre "Clique numéro x"
var footerOnClick = document.getElementsByTagName("footer")[0];

count = 0;
footerOnClick.onclick = function() {
  count += 1;
  console.log("Clique numéro " + count);
};

footerF();



//FONCTIONNALITE 2 : Le hamburger menu
var navbarWorking = document.getElementById("navbarHeader");
console.log(navbarWorking)

var hamburgerButton = document.getElementsByClassName("navbar-toggler-icon")[0];
hamburgerButton.addEventListener("click", inOutToggle);

function inOutToggle() {
    navbarWorking.classList.toggle("collapse")
    console.log(navbarWorking.className)
}



//FONCTIONNALITE 3 : Le texte en rouge en cliquant sur Edit
var firstText = document.getElementById("card1");
console.log(card1);

var editFirstText = firstText.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(editFirstText);

editFirstText.addEventListener("click", textInRed);
function textInRed() {
  firstText.style.color="red"
};


//FONCTIONNALITE 4 : Le texte en vert puis noir en cliquant sur Edit
var secondText = document.getElementById("card2");
console.log(card2);

var editSecondText = document.getElementById("card2").getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(editSecondText);

//editSecondText.addEventListener("click", textInGreen);
//function textInGreen() {
//  secondText.style.color="green"
//};

isGreen = false ;

card2.addEventListener("click", function() {
    if(isGreen){
       card2.style.color = "green";
    }
    else{
      card2.style.color = "black";
    }
    isGreen = !isGreen; 
});


//FONCTIONNALITE 5 : Suppression du CDN Boostrap
var navbar = document.getElementById("navbarHeader");
var cdn = document.querySelector("link");

navbar.addEventListener("dblclick", function() {
  cdn.href = "";
});

var cdnBack = document.getElementsByTagName("body")[0];
console.log(cdnBack);

cdnBack.addEventListener("click", function() {
  cdn.href =
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  location.reload(forcedReload);
});