function agregar() {
	//definicion de objeto Item
	function Item(cantidad, medida, descripcion) {
		this.cantidad = cantidad;
		this.medida = medida;
		this.descripcion = descripcion;
	}
	//capturar ingresos del formulario
	cantidadItem = document.getElementById("cantidad").value;
	medidaItem = document.getElementById("medida").value;
	descripcionItem = document.getElementById("descripcion").value;
	//condicional para no generar elementos vacios
	if (descripcionItem != 0 && descripcionItem != undefined) {
		nuevoItem = new Item(cantidadItem, medidaItem, descripcionItem);
		console.log(nuevoItem);
		listar();
	}
}
//generador de array de objetos y agregador de items de tabla
listaCompras = [];
function listar() {
	listaCompras.push(nuevoItem);
	document.getElementById("tabla").innerHTML +=
		'<tbody class="bg-white text-black"><td>' +
		nuevoItem.cantidad +
		"</td><td>" +
		nuevoItem.medida +
		"</td><td>" +
		nuevoItem.descripcion +
		"</td></tbody>";
}
//funcion para impresion de elementos del HTML
function imprimirElemento(elemento) {
	var recuperarPagina = document.body.innerHTML;
	var imprimirContenido = document.getElementById(elemento).innerHTML;
	document.body.innerHTML = imprimirContenido;
	window.print();
}
