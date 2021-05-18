/*--menu--*/


var menu = document.getElementById("menu");

function closemenu() {

    menu.style.top = "-100vh";
}

function openmenu() {

    menu.style.top = "0";
}

/*--menu--*/

/*--galeria--*/

document.addEventListener("click", function (e) {
	if (e.target.classList.contains("gImg")) {
		const src = e.target.getAttribute("src");
		document.querySelector(".modal-img").src = src;
		const myModal = new bootstrap.Modal(document.getElementById('modalGaleria'));
		myModal.show();
	}
})

/*--galeria--*/


