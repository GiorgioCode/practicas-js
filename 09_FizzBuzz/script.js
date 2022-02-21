function fizzbuzz() {
	let terminos = document.getElementById("terminos").value;
	ciclos = parseInt(terminos);
	let mostrar = 0;

	for (let i = 1; i <= ciclos; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			mostrar = "FizzBuzz";
		} else if (i % 3 == 0) {
			mostrar = "Fizz";
		} else if (i % 5 == 0) {
			mostrar = "Buzz";
		} else {
			mostrar = i;
		}
		document.getElementById("sucesion").innerHTML += `${mostrar} - `;
	}
}
