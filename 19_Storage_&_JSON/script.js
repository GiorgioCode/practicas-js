console.log('JSON 1');

import {dataEnJson} from './data.js'

// const productos = [
//     {id: 1, titulo: 'iPhone', precio: 1000, stock: 5, descuento: 10},
//     {id: 2, titulo: 'Xiaomi', precio: 200, stock: 6, descuento: 20},
//     {id: 3, titulo: 'Samsung', precio: 800, stock: 7, descuento: 15},
//     {id: 4, titulo: 'Motorola', precio: 300, stock: 10, descuento: 30},
// ]

// localStorage.setItem('productos', JSON.stringify(productos) )

// const productosJson = localStorage.getItem('productos')

// console.log(typeof productosJson);
// console.log(productosJson);

console.log(dataEnJson);

const data = JSON.parse(dataEnJson)

data.forEach(e => {
    console.log(e.titulo);
});


//guardar fecha
console.log('Storage 1');

localStorage.setItem('fecha', new Date())

const fechaGuardada = localStorage.getItem('fecha')

console.log(fechaGuardada);