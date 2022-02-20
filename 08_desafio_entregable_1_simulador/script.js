function calcular() {
	let peso=document.getElementById("peso").value;
	let medicamento=document.getElementById("medicamento").value;
	let hora=document.getElementById("hora").value;

	if (peso != 0) {
		switch (medicamento) {
			case "ventolin":
				dosis = parseInt(peso * 0.2)
				document.getElementById("recomendacion").innerHTML = "Usted ha seleccionado VENTOLIN, indicado para el control de broncoespasmo cronico que no responde al tratamiento convencional o para el tratamiento del asma severo agudo. El peso del paciente es de "+peso+" kilogramos, por lo tanto, se deben administrar "+dosis+" ml por toma, VIA NEBULIZADA, cada 8 horas"
				document.getElementById("recomendacion2").innerHTML = "el medicamento, se deberá administrar en los horarios de:"
	
				for (let i = 0; i < 3; i++) {
				let tomas = parseInt(hora) + i*8;
				if (tomas >= 24) {
					mostrar = tomas - 24
				} else {
					mostrar = tomas
				}
				document.getElementById("recomendacion3").innerHTML+= `${mostrar}:00 , `
				}
				break;
			case "benadryl":
				dosis = parseInt(peso * 0.65)
				document.getElementById("recomendacion").innerHTML = "Usted ha seleccionado BENADRYL, un antihistaminico y antialergico indicado para conjuntivitis alergica , manifestaciones alergicas de la piel u otras reacciones alergicas. El peso del paciente es de "+peso+" kilogramos, por lo tanto, se deben administrar "+dosis+" ml por toma, VIA ORAL, cada 8 horas"
				document.getElementById("recomendacion2").innerHTML = "el medicamento, se deberá administrar en los horarios de:"
	
				for (let i = 0; i < 3; i++) {
				let tomas = parseInt(hora) + i*8;
				if (tomas >= 24) {
					mostrar = tomas - 24
				} else {
					mostrar = tomas
				}
				document.getElementById("recomendacion3").innerHTML+= `${mostrar}:00 , `
				}
				break;
			case "febratic":
				dosis = parseInt(peso * 0.3)
				document.getElementById("recomendacion").innerHTML = "Usted ha seleccionado FEBRATIC, un antipiretico y analgésico indicado para el tratamiento sintomarico del dolor leve. El peso del paciente es de "+peso+" kilogramos, por lo tanto, se deben administrar "+dosis+" ml por toma, VIA ORAL, cada 8 horas"
				document.getElementById("recomendacion2").innerHTML = "el medicamento, se deberá administrar en los horarios de:"
	
				for (let i = 0; i < 3; i++) {
				let tomas = parseInt(hora) + i*8;
				if (tomas >= 24) {
					mostrar = tomas - 24
				} else {
					mostrar = tomas
				}
				document.getElementById("recomendacion3").innerHTML+= `${mostrar}:00 , `
				}
				break;
			}}
		else {
			alert("Introduzca el peso correcto del paciente")
		}

}