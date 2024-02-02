const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); //  pegar todas as chaves do objeto
console.log(Object.values(pessoa)); // pegar todos os valores do objeto
console.log(Object.entries(pessoa)); // pegar todas as chaves e valores do objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/01/2019",
    });