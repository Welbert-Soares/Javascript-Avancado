const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
let formataReais = json => `R$ ${parseFloat(json).toFixed(2)}`
let precos = carrinho.map(item => JSON.parse(item).preco).map(formataReais);
console.log(precos)

