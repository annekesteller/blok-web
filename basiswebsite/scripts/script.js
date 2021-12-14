
var dropDownFooter = document.querySelector("footer img");
var ulElement = document.querySelector("footer ul");
var hamburgerMenu = document.querySelector("nav button"); 
var toegevoegd = document.querySelector("main button");
var h1Element = document.querySelector("h1");

var kerstBelletjes = new Audio();
kerstBelletjes.src = "sounds/jinglebells.mp3"


//  er wordt een geluid afgespeeld zodra er op het logo wordt geklikt. 
function geluid(){

	kerstBelletjes.play(); 

}

// Deze functie zorgt ervoor dat de footer in en uitgeklapt kan worden. 
function neerEnOp(){
	dropDownFooter.classList.toggle("dropdown");
	ulElement.classList.toggle("menu"); 
}


// de tekst van de button veranderd zodra er op de knop wordt gedrukt
function inWinkelwagen(){
	winkelwagen.textContent = "Toegevoegd"; 

}

// met deze functie wordt er gezorgd dat je het hamburger menu uit en in kan klappen zodra er op de button wordt geklikt

function menuTonen(){
    var menu = document.querySelector("header nav");
	menu.classList.toggle("toonMenu");	
	
    
	
}

h1Element.addEventListener("click", geluid);
toegevoegd.addEventListener("click", inWinkelwagen); 
dropDownFooter.addEventListener("click", neerEnOp);
hamburgerMenu.addEventListener("click", menuTonen);