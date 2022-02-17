let nombre = prompt("Cual es tu nombre?");

let edad = prompt("Cual es tu edad?");

let pais = prompt("Cual es tu pais de origen?");

if (nombre == "jorge") {
	alert(
		"Bienvenido " +
			nombre +
			"! sabemos que tu edad es de " +
			edad +
			" años y que vives en " +
			pais +
			"."
	);
} else {
	alert(
		"tu no eres jorge, eres " +
			nombre +
			" y NO estas autorizado a usar este programa"
	);
}
