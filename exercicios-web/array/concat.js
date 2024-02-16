const filhas = ["Anne", "Laura"];
const filhos = ["Enzo", "Bernardo"];
const todos = filhos.concat(filhas, "Fulano");
console.log(todos, filhas, filhos, todos.length);

console.log([].concat([1, 2], [3, 4], 5, [[16, 7]]));
