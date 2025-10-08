var diasLaborables=new Array();
diasLaborables[0]=new Array("Lunes","Martes","Miercoles","Jueves","Viernes");
diasLaborables[1]=new Array("Monday","Tuesday","Wednesday","Thursday","Friday");
diasLaborables[2]=new Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi");
diasLaborables[3]=new Array("Montag","Dienstag","Mittwoch","Donnerstag","Freitag");
console.log("La semana empieza en "+diasLaborables[0][0]);
console.log("Week ends on "+diasLaborables[1][4]);

for (let i=0;i<diasLaborables.length;i++){
	for (let j=0;j<diasLaborables[i].length;j++){
		const element=diasLaborables[i][j];
		console.log(element);
	}
}

console.table(diasLaborables);