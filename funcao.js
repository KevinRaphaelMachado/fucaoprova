// declara um array de notas, sendo o array
// composto de valores númericos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

let soma = 0 // ref A
let maiorNota = notas[0] // reb B
let menorNota = notas[0] // ref B
let notasAcimaMedia = 0 // ref C
let notasAbaixoMedia = 0 // ref E


function media(notas){

    for(let i = 0; i < notas.length; i++) {
        soma += notas[i];
        
    return soma / notas.length
    }
}

function maiorNota(notas) {

for (let i = 0; i < notas.length; i++) {
    
    if (notas[i] > maiorNota) {
        maiorNota = notas[i]
        return(maiorNota)
    }
}
}

function menorNota(notas) {
    for (let i = 0; i < notas.length; i++) {
    if(notas[i] < menorNota) {
        menorNota = notas[i]
    }
    }
}
    if(notas[i] >= 6) {
        console.log(notas[i])
        notasAcimaMedia++
    } else { 
        notasAbaixoMedia++
    }


console.log(soma / notas.length) // ref A
console.log(maiorNota, menorNota) // ref B
console.log(notasAcimaMedia) // ref C
console.log("reprovados:", notasAbaixoMedia) // ref E

notas.push(8.0) // ref D

// ref D
for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
