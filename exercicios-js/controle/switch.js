const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // Math.floor() arredonda para baixo
        case 10: // If nota == 10
        case 9:
            console.log("Quadro de Honra");
            break; // Break para não executar o próximo case
        case 8: case 7:
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.2)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)