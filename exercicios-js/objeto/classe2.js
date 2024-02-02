class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Herança de classe (Avo é a classe pai de Pai)
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Chama o construtor da classe pai
        this.profissao = profissao
    }
}

class Filho extends Pai { // Herança de classe (Pai é a classe pai de Filho)
    constructor() {
        super('Silva') // Chama o construtor da classe pai
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }