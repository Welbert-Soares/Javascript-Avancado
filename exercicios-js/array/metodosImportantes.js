const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // remove o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona um elemento no array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona um elemento no início do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Remover
pilotos.splice(2, 1); // Remove um elemento do array
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Retorna um novo array com os elementos a partir do índice 2 até o final
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Retorna um novo array com os elementos do índice 1 até o índice 4 (não incluído)
console.log(algunsPilotos2);
