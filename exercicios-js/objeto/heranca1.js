const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.prototype); // undefined
console.log(ferrari.__proto__); // {}
console.log(ferrari.__proto__ === Object.prototype); // referência para o protótipo do objeto
console.log(volvo.__proto__ === Object.prototype); 
console.log(Object.prototype.__proto__); // referência para o proximo protótipo
console.log(Object.prototype.__proto__ === null); 

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype); 
