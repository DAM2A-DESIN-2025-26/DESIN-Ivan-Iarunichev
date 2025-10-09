function crearPersona(){
  //Nuevo array para las distintas posibles datos
  let infoUsuario = new Array();

  //Edad al no introducirlo por defecto es 0
  let edad = 0;
  infoUsuario[0] = ["Ivan", "Iarunichev"];
  infoUsuario[1] = ["Ivan", "Iarunichev", edad];
  infoUsuario[2] = ["Ivan", "Iarunichev", edad, "ivani94@educastur.es"];

  //Bucle que nos permite recorrer las diferentes array
  //Nueva variable como punto de partida
  let maxInfoUsuario = infoUsuario[0];

  //Si element es mayor que el maximo usuario entonces ese element lo guardamos en otra variable
  infoUsuario.forEach(element => {
    if(element.length > maxInfoUsuario.length){
      maxInfo = element;
    }
  });

  //Mostramos por pantalla
  console.log(maxInfo);
}
crearPersona();