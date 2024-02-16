console.log(typeof Array, typeof new Array(), typeof []); // function object object

let aprovados = new Array("Bia", "Carlos", "Ana");

console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = "Paulo"; // Adiciona um elemento no array
aprovados.push("Abia"); // Melhor forma de adicionar um elemento no array
console.log(aprovados.length);
console.log(aprovados);

aprovados[9] = "Rafael"; 
console.log(aprovados.length);
console.log(aprovados[8] === undefined); 
console.log(aprovados[8] === null);

console.log(aprovados);
console.log(aprovados.sort()); // Ordena o array
console.log(aprovados);

delete aprovados[1]; // Deleta o elemento do array
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1); // Adiciona e remove elementos do array
console.log(aprovados);
