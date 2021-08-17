
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
const insertnumber = document.querySelector("#text-count");
document.querySelector("#btn-count-increase").addEventListener("click", increase)
document.querySelector("#btn-count-decrease").addEventListener("click", decrease)
insertnumber.textContent = 5;
function increase() {
	if(insertnumber.textContent < 10){
		insertnumber.textContent = Number(insertnumber.textContent) + 1;
	}
}
function decrease(){
	if(insertnumber.textContent > 0){
		insertnumber.textContent = Number(insertnumber.textContent) - 1;
	}
}
/* if(insertnumber.textContent <= 0){
	document.querySelector("#btn-count-increase").setAttribute("disabled", true);
	document.querySelector("#btn-count-decrease").setAttribute("disabled", true);
}else {
	document.querySelector("#btn-count-increase").removeAttribute("disabled");
	document.querySelector("#btn-count-decrease").removeAttribute("disabled");
} */
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

}); // Afslutter: DOMContentLoaded