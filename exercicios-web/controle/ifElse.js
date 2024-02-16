const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log("Aprovado!");
  } else {
    console.log("Reprovado!");
  }
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("Epa!"); // Cuidado! JavaScript é fracamente tipado, então não dá erro, mas não é o esperado'
