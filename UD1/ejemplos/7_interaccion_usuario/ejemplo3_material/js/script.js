let visible = true;

document.querySelector("#enlace1").addEventListener("click", e => {
	if(visible == true){
		document.querySelector("#parrafo1").style.opacity="0";
		document.querySelector("#enlace1").textContent = "Mostrar 1";
		
		document.querySelector("#enlace1").addEventListener("click", e => {
			document.querySelector("#parrafo1").style.opacity="1";
			document.querySelector("#enlace1").textContent = "Ocultar 1";
		});
	}
});

document.querySelector("#enlace2").addEventListener("click", e => {
	if(visible == true){
		document.querySelector("#parrafo2").style.opacity="0";
		document.querySelector("#enlace2").textContent = "Mostrar 2";
		
		document.querySelector("#enlace2").addEventListener("click", e => {
			document.querySelector("#parrafo2").style.opacity="1";
			document.querySelector("#enlace2").textContent = "Ocultar 2";
		});
	}
}); 