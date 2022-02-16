let opcion = prompt("A - Generador de Tablas de multiplicar \n B - Generador de Secuencia Fibonacci.\n ******** \nPor favor, ingrese A o B (MAYUSCULAS) para comenzar:");

switch (opcion) {
    case "A":
        alert("Bienvenido al Generador de Tablas de multiplicar!!")
        let number = parseInt(prompt("la tabla de qué numero deseas generar?:"))

        for (let i = 1; i <= 10; i++) {
        let resultado = number * i;
        document.write(`${number} x ${i} = ${resultado} | `);
        }
        break;
    case "B":
        alert("Bienvenido al Generador de Secuencia de Fibonacci!!")
        function fibonacci(num) {
            if(num < 2) {
                return num;
            }
            else {
                return fibonacci(num-1)+fibonacci(num-2);
            }
        }
        let termino = parseInt(prompt("ingrese numero de terminos:"))
        if (termino <= 0) {
            alert("debe ingresar un entero positivo");
        }
        else {
            for(let i = 0; i < termino; i++) {
                document.write(`${fibonacci(i)} | `);
            }
        }
        break;        
    default:
        alert('Opcion seleccionada no valida.')
        break;
}