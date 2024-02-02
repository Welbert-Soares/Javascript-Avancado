function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 456);
console.log(aula1, aula2);

// Simulando o new
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Até breve", 456);
console.log(aula3, aula4);
// O operador new cria um novo objeto, tendo como protótipo a função que foi chamada
// A função construtora é chamada, passando o novo objeto como contexto (this)
// O novo objeto criado é retornado
// O operador new faz exatamente isso, mas de forma implícita
// O operador new é um atalho para a função novo
