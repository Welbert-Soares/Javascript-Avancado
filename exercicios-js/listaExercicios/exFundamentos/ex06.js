// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxa, tempo) {
  let resultado = capital * taxa * tempo;

  return resultado;
}
let jurSimples = jurosSimples(1000, 0.02, 3).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function jurosComposto(capital, taxa, tempo) {
  let resultado = capital * (1 + taxa) ** tempo;

  return resultado;
}
let jurComposto = jurosComposto(100, 10/100, 2).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });


console.log(jurSimples);
console.log(jurComposto);
