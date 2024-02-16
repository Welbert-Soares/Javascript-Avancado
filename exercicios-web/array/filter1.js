const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Ipad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 6.49, fragil: false },
];

console.log(
  produtos.filter((p) => {
    return false;
  })
);

console.log(
  produtos.filter((produto) => produto.preco > 2000 && produto.fragil === true)
);

let caro = (produto) => produto.preco >= 2000;
let fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
