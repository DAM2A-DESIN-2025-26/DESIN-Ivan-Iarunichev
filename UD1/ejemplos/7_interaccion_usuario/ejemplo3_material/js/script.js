let visible = true;

let enlace1 = document.querySelector("a");

enlace1.addEventListener("click", e => {
	enlaces = document.getElementById("parrafo1").style.display="none";
	document.getElementById("pSalida").innerHTML = texto;
});