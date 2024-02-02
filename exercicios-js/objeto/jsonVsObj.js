const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c; }};
console.log(JSON.stringify(obj)); // Converte o objeto para JSON

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")); // Formato inválido
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")); // Formato inválido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // Converte o JSON para objeto
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) // Converte o JSON para objeto