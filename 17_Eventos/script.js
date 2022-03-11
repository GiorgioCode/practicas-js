console.log('Ejemplo eventos');

const boton = document.getElementById('boton')
const entrada = document.getElementById('entrada')

boton.addEventListener('click', () => {
    console.log('Hola mundo desde eventos');
    console.log(new Date());
    console.log( entrada.value );
})

console.log(boton);

console.log('Eventos!');

const btn = document.getElementById('boton')
// const btn = document.querySelector('#boton')

// btn.addEventListener( 'click', onClickHandler )

// function onClickHandler() {
//     console.log('hiciste click en el botón');
// }

// btn.addEventListener('click', ()=>{console.log('hiciste click en el botón');})

const inp = document.getElementById('entrada')
inp.oninput = () => { console.log('Hubo cambio'); }

btn.onclick = () => {
    console.log('hiciste click en el botón')
    console.log( inp.value );
}

console.log('Eventos 2');

const boton = document.getElementById('boton')

boton.addEventListener('click', () => {
    const input = document.getElementById('entrada')
    const nombreProducto = input.value

    const nuevoProducto = document.createElement('li')
    nuevoProducto.innerText = nombreProducto
    
    const root = document.getElementById('root')
    root.appendChild(nuevoProducto)
})

console.log('Eventos3');

const link = document.getElementById('send')

// link.addEventListener('click', clickEnEnviar)
link.onclick = clickEnEnviar

function validarFormulario() {
    const user = document.getElementById('user')
    const password = document.getElementById('password')

    console.log(user.value);
    console.log(password.value);
}

function clickEnEnviar(evento) {
    evento.preventDefault()
    console.log('Click en el enlace');
    console.log(evento.target);
    validarFormulario()
}


console.log('Eventos4');

const enviar = document.getElementById('send')

enviar.onclick = e => {
    e.preventDefault()
    const parent = e.target.parentNode
    console.log( parent.children[0].value );
    console.log( parent.children[1].value );
    console.log(this);
}

