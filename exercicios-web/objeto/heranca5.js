console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
  return this.split("").reverse().join(""); // (split) Separa a string em um array, (reverse) inverte o array e (join) junta os elementos
};

console.log("Escola Cod3r".reverse());

Array.prototype.first = function () {
  return this[0]; // Retorna o primeiro elemento do array
};

console.log([1, 2, 3, 4, 5].first()); // Retorna o primeiro elemento do array
console.log(["a", "b", "c", "d", "e"].first());

String.prototype.toString = function () { // Sobrescreve o método toString !! CUIDADO !!
  return "Lascou tudo"; // Sobrescreve o método toString 
};

console.log("Escola Cod3r".reverse());
// Não é recomendado sobrescrever métodos que já existem na linguagem, pois isso pode causar efeitos colaterais indesejados
// O ideal é criar métodos que não existem na linguagem

