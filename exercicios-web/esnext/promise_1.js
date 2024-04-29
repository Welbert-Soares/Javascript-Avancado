const primeiroElemento = (arrayOuString) => arrayOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  // .then(valor => console.log(valor))
  .then(console.log);
