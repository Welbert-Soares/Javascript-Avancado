function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000); // milissegundos para segundos
  });
}

falarDepoisDe(3, "A promessa foi cumprida!")
  .then((frase) => frase.concat("!!"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e)); // Tratamento de erro
