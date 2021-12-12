
var dropDownFooter = document.querySelector("footer img");
var ulElement = document.querySelector("footer ul");
var hamburgerMenu = document.querySelector("nav button"); 




function neerEnOp(){
	console.log("hey"); 
	dropDownFooter.classList.toggle("dropdown");
	ulElement.classList.toggle("menu"); 
}



function menuTonen(){
	console.log("hey")
    var menu = document.querySelector("header nav");
	menu.classList.toggle("toonMenu");	
	
    
	
}

dropDownFooter.addEventListener("click", neerEnOp);
hamburgerMenu.addEventListener("click", menuTonen);