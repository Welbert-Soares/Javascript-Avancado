function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;

    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegoSena(qtdeNumeros, tentativas = 1) {
  const numeros = [];
   
    try {
      for (let _ of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros));
      }
      resolve(numeros);
    } catch (err) {
      if (tentativas > 10) {
        reject("Não deu certo!");
      } else {
        return gerarMegoSena(qtdeNumeros, tentativas + 1);
      }
    }
}

gerarMegoSena(15)
    .then(console.log)
    .catch(console.log);