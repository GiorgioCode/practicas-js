//Practica Objetos
console.log("*******CREACION Y MANIPULACION DE OBJETO*******");
const producto = {
	id: 1,
	titulo: "iphone",
	precio: 1000,
	stock: 5,
};

console.log(producto); /*mostrar en consola las propiedades del objeto*/
console.log(producto.stock); /*mostrar en consola una propiedad del objeto*/
producto.marca = "apple"; /*sumar una propiedad al objeto*/
console.log(producto);

console.log("*******FUNCION CONSTRUCTORA*******");

//function Alumno(nombre, edad, pais) {
//	this.name = nombre;
//	this.age = edad;
//	this.country = pais;
//}

const alumno1 = new Alumno("Mario", 36, "Argentina"); //crea objeto a partir de funcion constructora
console.log(alumno1);
const alumno2 = new Alumno("Ana", 41, "Argentina"); //crea otro objeto a partir de funcion constructora
console.log(alumno2);
//const alumno3 = new Alumno(
//	prompt("Inserte nombre"),
//	parseInt(prompt("Inserte edad")),
//	prompt("Inserte pais")
//); //crea otro objeto a partir de funcion constructora pidiendo datos al usuario
//console.log(alumno3);

console.log("*******METODO<>FUNCIÓN*******");
//los metodos son funciones asociadas a un tipo de objeto
let cadena = "hola coders";
console.log(cadena.length); //muestra cantidad de caracteres
console.log(cadena.toUpperCase); //VERIFICAR - convierte caracteres a mayusculas

function Alumno(nombre, edad, pais) {
	this.name = nombre;
	this.age = edad;
	this.country = pais;
	this.hablar = function () {
		console.log("Hola, soy " + this.name);
	};
	this.mostrarDatos = function () {
		console.log("Datos del alumno:", this.name, this.age, this.country);
	};
}

alumno2.hablar();
alumno1.hablar();

console.log("*******FOR IN*******");

for (const key in producto) {
	//los key value son las propiedades del objeto. en este bucle, se recorre cada una de las propiedades
	console.log(key, ":", producto[key]);
}
console.log("**************");
alumno1.mostrarDatos();
alumno2.mostrarDatos();

console.log("*******CLASES*******");
//en este ejemplo se genera una clase personaje, con diferentes caracteristicas y funciones internas para simular un juego
class Personaje {
	constructor(nombre, vida, poder) {
		this.nombre = nombre;
		this.vida = vida;
		this.poder = poder;
	}
	atacar(valor){
		
		this.poder = this.poder - valor;
	}
	recibirAtaque(valor2){
		if (this.vida <=0) {
			console.log(this.nombre, " murió")
		} else {
			this.vida = this.vida - valor2;
		}
		
	}
	mostrarDatos(){
		console.log(this.nombre, "EMPATEne: ",this.vida, " de vida y ",this.poder, "de poder.")
	}
}

const hobbit1 = new Personaje('Frodo', 10, 5);
const elfo = new Personaje('Legolas', 8, 60);
const elfo2 = new Personaje('dobbie', 9, 70);

elfo.mostrarDatos()
elfo.atacar(5)
elfo.mostrarDatos()
elfo2.recibirAtaque(10)
elfo2.mostrarDatos()
elfo2.recibirAtaque(10)
elfo2.mostrarDatos()



