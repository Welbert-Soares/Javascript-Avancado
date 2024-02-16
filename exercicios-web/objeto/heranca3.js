const pai = { nome: "Pedro", corCabelo: "preto" };

const filha1 = Object.create(pai); // Cria um objeto com protótipo pai
filha1.nome = "Ana"; // Adiciona um atributo ao objeto
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

console.log(filha2.nome);
filha2.nome = "Carla";

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
  // Percorre os atributos do objeto
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`); // Verifica se o atributo é do objeto ou veio por herança
}
