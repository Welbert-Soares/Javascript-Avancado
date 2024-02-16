function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min; // Math.random() gera um número aleatório entre 0 e 1
    return Math.floor(valor); // Math.floor() arredonda para baixo
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')