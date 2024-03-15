// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexical = () => console.log(this === exports);
const lexical2 = lexical.bind({});
lexical();
lexical2();

// Parametro default
function log(texto = "Node") {
  console.log(texto);
}

log("Sou mais forte");

// Operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5));
