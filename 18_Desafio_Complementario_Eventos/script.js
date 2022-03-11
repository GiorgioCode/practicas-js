window.addEventListener("DOMContentLoaded", () => {
	//escucha evento de carga de contenido
	const celdas = Array.from(document.querySelectorAll(".celda"));
	const JugadorDisplay = document.querySelector(".mostrar-jugador");
	const botonReset = document.querySelector("#reset");
	const anunciador = document.querySelector(".anunciador");

	let tablero = ["", "", "", "", "", "", "", "", ""];
	let jugadorActual = "X";
	let juegoActivo = true;

	const JugadorX_GANA = "JugadorX_GANA";
	const JugadorO_GANA = "JugadorO_GANA";
	const EMPATE = "EMPATE";

	/*
        Posiciones de las celdas en el Tablero
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

	/*
        Ejemplo posicion ganadora [1, 4, 7]
        [0] [X] [2]
        [3] [X] [5]
        [6] [X] [8]
    */

	const condicionesGanadoras = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	function validaResultado() {
		let roundGANA = false;
		for (let i = 0; i <= 7; i++) {
			const condicionGanar = condicionesGanadoras[i];
			const a = tablero[condicionGanar[0]];
			const b = tablero[condicionGanar[1]];
			const c = tablero[condicionGanar[2]];
			if (a === "" || b === "" || c === "") {
				continue;
			}
			if (a === b && b === c) {
				roundGANA = true;
				break;
			}
		}

		if (roundGANA) {
			anunciar(jugadorActual === "X" ? JugadorX_GANA : JugadorO_GANA);
			juegoActivo = false;
			return;
		}

		if (!tablero.includes("")) anunciar(EMPATE);
	}

	const anunciar = (tipoAnuncio) => {
		switch (tipoAnuncio) {
			case JugadorO_GANA:
				anunciador.innerHTML = '<span class="JugadorO">O</span> GANA';
				break;
			case JugadorX_GANA:
				anunciador.innerHTML = '<span class="JugadorX">X</span> GANA';
				break;
			case EMPATE:
				anunciador.innerText = "EMPATE";
		}
		anunciador.classList.remove("esconder");
	};

	const esAccionValida = (celda) => {
		if (celda.innerText === "X" || celda.innerText === "O") {
			return false;
		}

		return true;
	};

	const actualizaTablero = (index) => {
		tablero[index] = jugadorActual;
	};

	const cambiaJugador = () => {
		JugadorDisplay.classList.remove(`Jugador${jugadorActual}`);
		jugadorActual = jugadorActual === "X" ? "O" : "X";
		JugadorDisplay.innerText = jugadorActual;
		JugadorDisplay.classList.add(`Jugador${jugadorActual}`);
	};

	const accionUsuario = (celda, index) => {
		if (esAccionValida(celda) && juegoActivo) {
			celda.innerText = jugadorActual;
			celda.classList.add(`Jugador${jugadorActual}`);
			actualizaTablero(index);
			validaResultado();
			cambiaJugador();
		}
	};

	const resettablero = () => {
		tablero = ["", "", "", "", "", "", "", "", ""];
		juegoActivo = true;
		anunciador.classList.add("esconder");

		if (jugadorActual === "O") {
			cambiaJugador();
		}

		celdas.forEach((celda) => {
			celda.innerText = "";
			celda.classList.remove("JugadorX");
			celda.classList.remove("JugadorO");
		});
	};

	//ESCUCHAR EVENTOS DE CLICK SOBRE CELDAS O SOBRE BOTON RESET
	celdas.forEach((celda, index) => {
		celda.addEventListener("click", () => accionUsuario(celda, index));
	});

	botonReset.addEventListener("click", resettablero);
});
