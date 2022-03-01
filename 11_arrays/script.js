console.log('Arreglos');

// es burro o no?
const calificaciones = [6, 7, 5, 9, 5, 7]

for( let i = 0; i < calificaciones.length; i++){
    console.log(i, calificaciones[i])
}

let califQuitada = calificaciones.shift()
califQuitada++

calificaciones.unshift(califQuitada)

console.log(califQuitada);
console.log(calificaciones.join('-*-'));

const calificacionesRestantes = [6, 7]

let todas = calificaciones.concat(calificacionesRestantes)
console.log(todas);

console.log(todas.indexOf(9));

if (todas.includes(9)) {
    console.log('No es burro');
} else {
    console.log('Es burro :(');
}

console.log('Arrays 2');

class Grade{
    constructor(name, score){
        this.name = name
        this.score = parseInt(score)
    }
}

let subjects = ['Matematica', 'Fisica', 'Química', 'Artes']
let grades = []

for (const subject of subjects) {
    let score = prompt(`Calificación de ${subject}`)
    grades.push(new Grade(subject, score))
}

console.log(grades);

let total = 0
grades.forEach( g => {
    total += g.score
})

console.log('promedio: ', total/grades.length);

