const names = ["Batman", "Robin", "Raven", "Beastboy", "Starfire", "Cyborg"];
const namesnew = ["Spiderman", "Ironman", "Captan Amarica", "Dr. Strange", "Black Panther", "Thor"];
const licontent = document.querySelector("#liste");
function alistofnames(array){
	array.forEach((names) => { 
		licontent.innerHTML += `<li>${names}</li>`;
	}
	)
}
alistofnames(names);
alistofnames(namesnew);
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

}); // Afslutter: DOMContentLoaded