//FUNCIONES DE ORDEN SUPERIOR
//retornar funcion

console.log('      ');
console.log('*****************************************');
console.log('************* RETORNAR FUNCIONES ********');
console.log('*****************************************');
console.log('      ');

function regresaFuncion() {
	return () => {console.log('Hola mundo');}
}

regresaFuncion()()

const nuevaFuncion = regresaFuncion()
//va a contener
//()=> {console.log('Hola mundo');}
console.log('******** separador resultados nuevaFuncion() ********');
nuevaFuncion()
nuevaFuncion()
nuevaFuncion()

console.log('******** separador resultados multiplicarPor() ********');

function multiplicarPor(multiplicador) {
	return numero => { return numero * multiplicador } 
}

const multiplicarPor10 = multiplicarPor(10) //establece parametro multiplicador * 10
console.log(multiplicarPor10(8)); //multiplica 10 * 8 = 80
const multiplicarPor12 = multiplicarPor(12) //establece parametro multiplicador * 12
console.log(multiplicarPor12(8)); //multiplica 12 * 8 = 96
const multiplicarPorPI = multiplicarPor(3.144) //establece parametro multiplicador * PI
console.log(multiplicarPorPI(8)); //multiplica PI * 8 = 25.152

console.log('******** separador resultados saludador() ********');

function saludador(nombre) {
	return() => {console.log('Hola '+ nombre)}
}

const saludarJuan = saludador('Juan');
saludarJuan();
const saludarAna = saludador('Ana')
saludarAna();

console.log('      ');
console.log('*****************************************');
console.log('******** FUNCIONES POR PARAMETRO ********');
console.log('*****************************************');
console.log('      ');


const nombreClaseJS = ['Jorge', 'Juan', 'Pedro', 'Esmeralda', 'Christian', 'Diego'];

function transformarNombres(nombres, transformador) {
	let nuevosNombres = [];
	for (const nombre of nombres) {
		nuevosNombres.push(transformador(nombre))
	}
	return nuevosNombres
}

convertirMayusculas = texto => texto.toUpperCase();
console.log('******** separador resultados transformarNombres() ********');

const nombresMayus = transformarNombres(nombreClaseJS, convertirMayusculas)
console.log(nombresMayus.join('-'))

const nombresMinus = transformarNombres(nombreClaseJS, t=>t.toLowerCase())

console.log(nombresMinus.join('-'))


console.log('      ');
console.log('*****************************************');
console.log('************ METODOS ARRAYS (forEach)****');
console.log('*****************************************');
console.log('      ');

const productos = [
	{id: 1, titulo: 'iphone1', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'iphone2', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'iphone3', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'iphone4', precio:4000,  stock:15, descuento:20},
]

productos.forEach(elemento => {
	console.log(elemento)
})

productos.forEach(e => {
	precioDescuento=e.precio*e.descuento/100;
	console.log('el precio del ' +e.titulo+' es de: '+precioConDescuento( e.precio, e.descuento));

})

function precioConDescuento (precio, descuento) {
	return precio - ((precio * descuento)/100)
}