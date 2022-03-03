const root = document.getElementById('root');
console.log(root);
console.log(root.innerHTML);

const title = document.getElementById('title');
title.innerText = 'Productos Nuevos'
title.className = 'lead bg-primary display-1'

const list = document.getElementsByTagName('li')

for (const element of list) {
	const newLi = `<strong>${element.innerText}</strong>`
	element.innerText = ''
	element.innerHTML = newLi
}

const productos = [
	{id: 1, titulo: 'Fiat', precio:180000,  stock:5, descuento:20},
	{id: 2, titulo: 'Renault', precio:200000,  stock:7, descuento:30},
	{id: 3, titulo: 'Ford', precio:300000,  stock:10, descuento:30},
	{id: 4, titulo: 'Chevrolet', precio:400000,  stock:15, descuento:20},
	{id: 5, titulo: 'Toyota', precio:1000000,  stock:6, descuento:20},
	{id: 6, titulo: 'Mitsubishi', precio:600000,  stock:7, descuento:10},
	{id: 7, titulo: 'Nissan', precio:300000,  stock:8, descuento:15},
	{id: 8, titulo: 'Volvo', precio:400000,  stock:20, descuento:20},
];

let contenedor = document.getElementById('listaAutos')
productos.forEach ((productos) => {
	contenedor.innerHTML += `<h3 class="m-2 textogradiente">marca: ${productos.titulo}</h3>
							<h4 class="text-primary m-3" >precio: ${productos.precio}</h4>
							<h4 class="text-primary m-3" >stock: ${productos.stock}</h4>
							<h4 class="text-primary m-3" >descuento: ${productos.descuento}</h4> <hr>`
})