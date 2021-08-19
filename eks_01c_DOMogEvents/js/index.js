
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
const insertnumber = document.querySelector("#text-count");
const change = document.querySelectorAll("button");
/* document.querySelector("#btn-count-increase").addEventListener("click", increase)
document.querySelector("#btn-count-decrease").addEventListener("click", decrease) */
const numberincrease = 10;
const numberdecrease = 0;
insertnumber.textContent = 6;
for(let i=0; i < 2; i++){
    change[i].addEventListener("click", changenumber);
   }

   function changenumber(){
    console.log(this.getAttribute("id"));

    if(this.getAttribute("id")==="btn-count-increase"){
        if(insertnumber.textContent < numberincrease){
			insertnumber.textContent = Number(insertnumber.textContent) + 1;
		}
            }else{
				if(insertnumber.textContent > numberdecrease){
					insertnumber.textContent = Number(insertnumber.textContent) - 1;
				}
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