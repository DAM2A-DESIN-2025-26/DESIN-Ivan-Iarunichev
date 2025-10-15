document.getElementById("btnBoton").addEventListener("click", copiarTexto);

function copiarTexto(){
	let texto = document.querySelector("#taEntrada").value;
	document.getElementById("pSalida").innerHTML = texto;
}