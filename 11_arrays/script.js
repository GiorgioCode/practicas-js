//ACLARACIÓN: ESTE EJEMPLO FALTA VERIFICAR Y TERMINAR DE EDITAR

//Array = objeto que permite generar una coleccion de datos.
//Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/*
const arrayA = [];
//se definen con corchetes
const arrayB = [1, 2];
const arrayC = ["C1", "C2", "C3"];
const arrayD = ["C1", true, 12];

console.log(arrayD[0]);
//propiedad length

const miArray = ["marca", 3, "palabra"];
console.log(miArray.length);
//push y unshift agregan
miArray.push("AgregadoelementoFinal"); //agrega elemento al final
console.log(miArray);
miArray.unshift("AgregadoelementoPrincipio"); //agrega elemento al principio
console.log(miArray);
//pop y shift (quitan)
miArray.pop() //quita elemento al final
console.log(miArray)
miArray.shift() //quita elemento al principio
console.log(miArray)
//splice elimina uno o varios elementos del array en cualquier posicion
miArray.splice(1);
console.log(miArray)
//join convierte un array en un string
miArray.join(" - ");
console.log(miArray);
*/

const calificaciones =[6, 7, 5, 9, 5];
//recorrer y mostrar elementos del array
for(let i=0; i < calificaciones.length; i++) {
	console.log(i, '-' , calificaciones[i])
}
console.log(calificaciones)
calificaciones.shift(); //quita primer elemento
console.log(calificaciones)
calificaciones.unshift(9); //agrega un primer elemento nuevo al principio
console.log(calificaciones)
let califQuitada = calificaciones.shift() //guarda valor quitado en califQuitada
console.log(califQuitada)
califQuitada++ //suma 1 al valor quitado
console.log(califQuitada)
calificaciones.unshift(califQuitada) //devuelve al string el valor sumado
console.log(calificaciones)
console.log(calificaciones.join(' _ ')); //convierte array en formato string con un separador
const calificacionesRestantes = [6, 7]
let todas = calificaciones.concat(calificacionesRestantes); //se le concatena el array al final
console.log(todas)
console.log(todas.indexOf(7));//busca posicion del numero 7
console.log(todas.indexOf(10));//busca posicion del numero 10 dentro del array
console.log(todas.includes(10)); //verifica si existe el numero 10 dentro del array

if (todas.includes(10)) { //verifica si tiene o no un 10 entre sus calificaciones del array para decidir si el alumno es o no BURRO =)
	console.log('No es burro');
} else {
	console.log('Es burro')
}

/*cargar array con entradas
const listaNombres = []
let cantidad = 5;

do {
	let entrada = prompt ("ingresar nombre");
	listaNombres.push(entrada.toUpperCase());
	console.log(listaNombres.length);

} while (listaNombres.lenght != cantidad) {
	const nuevaLista = listaNombres.concat(["ANA", "EMA"])
alert(nuevaLista.join("-"))
} */

//GENERADOR DE ARRAY DE OBJETOS

class Grade{
	constructor(name, score){
		this.name = name
		this.score = parseInt(score)
	}
}
const subjects = ['Matematica', 'Fisica', 'Quimica', 'Artes']
const grades = [];
for (const subject of subjects) {
	let score = prompt(`Calificación de ${subject}:`)
	grades.push(new Grade(subject, score))
}

console.log(grades);
//calcula promedio
let total = 0
grades.forEach(g=>{
	total+=g.score
})
console.log('promedio: ', total/grades.length);











