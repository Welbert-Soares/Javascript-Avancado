function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (err) {
      reject(err);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((valor) => console.log(valor))
  .then((valor) => consol.log(valor)),
  (err) =>
    console
      .log(`Erro: ${err}`)
      .catch((err) => console.log(`Erro: ${err}`))
      .then(() => console.log("Fim!"));
