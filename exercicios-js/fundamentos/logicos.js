function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = ou
    const comprarTv50 = trabalho1 && trabalho2 // && = e
    //const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // != = diferente
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true)) // { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, true)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, false)) // { comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true }