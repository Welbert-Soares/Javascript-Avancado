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

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // concatena os objetos em um só e sobrescreve os valores iguais 

Object.freeze(obj);
obj.c = 1234;
console.log(obj);