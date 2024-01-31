function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 };

console.log(getPreco.call(carro)); // call receives parameters separated by comma
console.log(getPreco.apply(carro));// call and apply are similar, but apply receives parameters in an array

console.log(getPreco.call(carro, 0.17, "$")); // call receives parameters separated by comma
console.log(getPreco.apply(global, [0.17, "$"])); // apply receives parameters in an array