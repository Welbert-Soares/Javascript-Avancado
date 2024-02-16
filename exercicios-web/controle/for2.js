const notas = [6.7, 7.4, 9.8, 8.2, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let attributes in pessoa) {
    console.log(`${attributes} = ${pessoa[attributes]}`)
}