let valor // não inicializada
console.log(valor); // undefined

valor = null; // ausência de valor
console.log(valor); // null
//console.log(valor.toString()); // TypeError

const produto = {};
console.log(produto.preco); // undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);