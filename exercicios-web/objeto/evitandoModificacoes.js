//Object.preventExtensions

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});
console.log("Extensível:", Object.isExtensible(produto)); // Verifica se o objeto é extensível

produto.nome = "Borracha"; // Pode ser modificado
produto.descricao = "Borracha escolar branca"; // Não pode ser adicionado
delete produto.tag; // Pode ser deletado
console.log(produto);

//Object.seal
const pessoa = {
  nome: "Juliana",
  idade: 35,
};
Object.seal(pessoa); // Não pode adicionar ou remover atributos, mas pode modificar os valores dos atributos existentes
console.log("Selado:", Object.isSealed(pessoa)); // Verifica se o objeto é selado

pessoa.sobrenome = "Silva"; // Não pode ser adicionado
delete pessoa.nome; // Não pode ser deletado
pessoa.idade = 29; // Pode ser modificado
console.log(pessoa);

//Object.freeze = selado + valores constantes
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
};
Object.freeze(carro); // Não pode adicionar, remover ou modificar atributos
console.log("Congelado:", Object.isFrozen(carro)); // Verifica se o objeto é congelado

carro.cor = "preto"; // Não pode ser adicionado
delete carro.modelo; // Não pode ser deletado
carro.marca = "Chevrolet"; // Não pode ser modificado
console.log(carro);
