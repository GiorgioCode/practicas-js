let contador = 0;
parseInt(contador);

function sumar() {
	contador = contador + 1;
	return contador;
}

function restar() {
	if (contador != 0) {
		contador = contador - 1;
	} else {
		return contador;
	}
	return contador;
}

function reset() {
	contador = 0;
	return contador;
}
