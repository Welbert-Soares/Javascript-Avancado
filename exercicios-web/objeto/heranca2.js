// cadeia de protótipos (prototype chain)

Object.prototype.attr0 = "0"; // não faça isso em casa!

const avo = { attr1: "A" }; // avo tem como protótipo Object.prototype
const pai = { __proto__: avo, attr2: "B" }; // pai tem como protótipo avo
const filho = { __proto__: pai, attr3: "C" }; // filho tem como protótipo pai
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },

  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  }
};

const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing
};
const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`; // super referencia o protótipo
  }
};

Object.setPrototypeOf(ferrari, carro); // estabelece a relação de protótipo
Object.setPrototypeOf(volvo, carro); // estabelece a relação de protótipo

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status()); 

ferrari.acelerarMais(300);
console.log(ferrari.status());

