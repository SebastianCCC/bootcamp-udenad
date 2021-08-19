const names = ["Batman", "Robin", "Raven", "Beastboy", "Starfire", "Cyborg"];
const licontent = document.querySelector("#liste");
names.forEach((names) => { 
	licontent.innerHTML += `<li>${names}</li>`;
}
)
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

}); // Afslutter: DOMContentLoaded