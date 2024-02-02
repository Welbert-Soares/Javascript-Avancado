const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', { // Adiciona um método ao objeto
    value: function () { return Object.values(this) }, // Retorna os valores do objeto
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray);

