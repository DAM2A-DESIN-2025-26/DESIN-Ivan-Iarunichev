
const edificio1 = new Edificio("Calle Melancolía", );

edificio1.agregaPlantasYPuertas(2, 3);

console.warn("Nuevos propietarios");
edificio1.agragaPropietario("Edu", 0, 0);
edificio1.agragaPropietario("Antonio", 0, 1);
edificio1.agragaPropietario("Erik", 0, 2);

edificio1.agragaPropietario("Mayte", 1, 0);
edificio1.agragaPropietario("Monica", 1, 1);
edificio1.agragaPropietario("Santiago", 1, 2);

edificio1.imprimePlantas();