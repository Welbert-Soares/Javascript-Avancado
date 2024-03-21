const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionarios => funcionarios.pais === 'China'
const mulheres = funcionarios => funcionarios.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salário?
    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario) // reduce() é uma função que serve para transformar um array em um único elemento
    console.log(funcionario)
})