function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar();

obj2.nome = "Rafael";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Estabelece a relação de protótipo entre os objetos
obj3.nome = "Obj3";
obj3.falar();

// Resumo:
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // O objeto criado a partir de uma função tem como protótipo a função
console.log(MeuObjeto.__proto__ === Function.prototype); // A função tem como protótipo a função
console.log(Function.prototype.__proto__ === Object.prototype); // A função tem como protótipo o objeto
console.log(Object.prototype.__proto__ === null); // O último objeto não tem protótipo
