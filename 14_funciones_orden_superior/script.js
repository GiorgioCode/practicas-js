//FUNCIONES DE ORDEN SUPERIOR
//AYUDA EN VIDEO (CANAL YOUTUBE XK WEB): https://www.youtube.com/watch?v=JW8E0YSNZ7o

//CALLBACK: ES UNA FUNCION QUE RECIBE COMO PARAMETRO OTRA FUNCION

//FUNCIONES DE ORDEN SUPERIOR O HIGH ORDER FUNCTIONS: SON FUNCIONES 
//QUE RETORNAN OTRA FUNCION Y QUE RECIBEN COMO ARGUMENTO OTRA FUNCION.

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
console.log('**      FUNCIONES DE ORDEN SUPERIOR    **');
console.log('**                                     **');
console.log('**      forEach                        **');
console.log('**      map                            **');
console.log('**      filter                         **');
console.log('**      find                           **');
console.log('**      some                           **');
console.log('**      every                          **');
console.log('**      reduce                         **');
console.log('**                                     **');
console.log('*****************************************');
console.log('      ');

console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (forEach)  **');
console.log('*****************************************');
console.log('      ');

//LA FUNCION forEach RECORRE TODOS LOS ELEMENTOS DE UN ARRAY ESPECIFICADO, 
//APLICANDO LA FUNCION QUE SE LE ORDENE

const productos = [
	{id: 1, titulo: 'iphone1', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'iphone2', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'iphone3', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'iphone4', precio:4000,  stock:15, descuento:20},
]

productos.forEach(elemento => console.table(elemento))

function precioConDescuento (precio, descuento) {
	return precio - ((precio * descuento)/100)
}

productos.forEach(e => {
	precioDescuento=e.precio*e.descuento/100;
	console.log('el precio del ' +e.titulo+' es de: '+precioConDescuento( e.precio, e.descuento));

})


console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (map)      **');
console.log('*****************************************');
console.log('      ');
//RECORRE EL ARRAY AL IGUAL QUE EL forEach PERO NOS RETORNA UN OBJETO NUEVO 
//PARA EVITAR MODIFICAR EL ARRAY U OBJETOS INICIALES
const productos2 = [
	{id: 1, titulo: 'xiaomi', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'huawei', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'samsung', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'apple', precio:4000,  stock:15, descuento:20},
]

productos2.map(elemento => console.log(elemento.titulo.toUpperCase()))

console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (filter)   **');
console.log('*****************************************');
console.log('      ');
//FILTRA Y EXTRAE EL/LOS OBJETOS DE UN ARRAY QUE CUMPLEN UNA DETERMINADA CONDICION
const productos3 = [
	{id: 1, titulo: 'xiaomi', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'huawei', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'samsung', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'apple', precio:4000,  stock:15, descuento:20},
]
//AQUI SE EXTRAEN LOS OBJETOS CON PRECIO MENOR A 3000 Y SE PRESENTAN EN UNA TABLA
let resultadoFiltrado = productos3.filter(elemento => elemento.precio < 3000)
console.table(resultadoFiltrado)


console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (find)     **');
console.log('*****************************************');
console.log('      ');
//DEVUELVE EL PRIMER OBJETO DE UN ARRAY QUE CUMPLA CON UNA DETERMINADA CONDICION
const productos4 = [
	{id: 1, titulo: 'xiaomi', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'huawei', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'samsung', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'apple', precio:4000,  stock:15, descuento:20},
]

let resultadoFiltrado2 = productos4.find(elemento => elemento.precio < 3000)
console.table(resultadoFiltrado2)

console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (some)     **');
console.log('*****************************************');
console.log('      ');
//DEVUELVE VALOR BOOLEANO (True o False) SI EXISTE AL MENOS UNO DE LOS OBJETOS DEL ARRAY
//QUE CUMPLE LA CONDICION ESTABLECIDA
const productos5 = [
	{id: 1, titulo: 'xiaomi', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'huawei', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'samsung', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'apple', precio:4000,  stock:15, descuento:20},
]

let resultadoFiltrado3 = productos5.some(elemento => elemento.precio < 3000)
console.log(resultadoFiltrado3)

console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (every)    **');
console.log('*****************************************');
console.log('      ');

//DEVUELVE VALOR BOOLEANO (True o False) SI TODOS LOS OBJETOS DEL ARRAY
//CUMPLEN LA CONDICION ESTABLECIDA
const productos6 = [
	{id: 1, titulo: 'xiaomi', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'huawei', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'samsung', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'apple', precio:4000,  stock:15, descuento:20},
]

let resultadoFiltrado4 = productos6.every(elemento => elemento.precio < 3000)
console.log(resultadoFiltrado4)

console.log('      ');
console.log('*****************************************');
console.log('** FUNCIONES ORDEN SUPERIOR (reduce)   **');
console.log('*****************************************');
console.log('      ');
//JUNTA SEGUN LA CONDICION ESTABLECIDA LOS OBJETOS DE UN ARRAY
//POR EJEMPLO, SIRVE PARA SUMAR LOS PRECIOS DE LOS PRODUCTOS
const productos7 = [
	{id: 1, titulo: 'xiaomi', precio:1000,  stock:5, descuento:50},
	{id: 2, titulo: 'huawei', precio:2000,  stock:7, descuento:40},
	{id: 3, titulo: 'samsung', precio:3000,  stock:10, descuento:30},
	{id: 4, titulo: 'apple', precio:4000,  stock:15, descuento:20},
]
//en este caso, se guarda en sumaPrecios la acumulacion de los precios de todos los objetos del array, 
//tomando como valor de inicio de la suma el numero 0
let sumaPrecios = productos7.reduce((acumulador, elemento) => acumulador + elemento.precio,0)
console.log(sumaPrecios)
//en este caso, se guarda en sumaPrecios2 la acumulacion de los precios de todos los objetos del array,
//tomando como valor de inicio de la suma el numero 1000 (esto ultimo se puede usar para concatenar sumas de
//la misma propiedad de distintos arrays de objetos)
let sumaPrecios2 = productos7.reduce((acumulador2, elemento2) => acumulador2 + elemento2.precio,1000)
console.log(sumaPrecios2)

//Por ejemplo, tengo dos array de objetos, uno con autos nacionales y otro con autos importados:
const autosImportados = [
	{id: 1, titulo: 'Toyota', precio:1000000,  stock:5, descuento:20},
	{id: 2, titulo: 'Mitsubishi', precio:600000,  stock:7, descuento:10},
	{id: 3, titulo: 'Nissan', precio:300000,  stock:10, descuento:15},
	{id: 4, titulo: 'Volvo', precio:400000,  stock:15, descuento:20},
]
const autosNacionales = [
	{id: 1, titulo: 'Fiat', precio:180000,  stock:5, descuento:20},
	{id: 2, titulo: 'Renault', precio:200000,  stock:7, descuento:30},
	{id: 3, titulo: 'Ford', precio:300000,  stock:10, descuento:30},
	{id: 4, titulo: 'Chevrolet', precio:400000,  stock:15, descuento:20},
]
//y deseo saber cual es el total de la suma de los precios de los dos arrays sin tener que juntarlos
//arrancamos sumando los precios desde 0
let sumador1 = autosImportados.reduce((sumas1, autosImp) => sumas1 + autosImp.precio,0)
console.log('la suma de los precios de los autos importados es: '+sumador1)
//ahora arrancamos sumando los precios de los autos nacionales a partir del resultado de sumador1
let sumaTotal = autosNacionales.reduce((sumas2, autosNac) => sumas2 + autosNac.precio,sumador1)
console.log('la suma de los precios de los autos importados mas los nacionales es: '+sumaTotal)