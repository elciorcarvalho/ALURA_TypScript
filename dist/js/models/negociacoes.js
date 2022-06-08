export class Negociacoes {
    constructor() {
        /** Array<Negociacao> = Negociacao[] */
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /** ReadonlyArray<Negociacao> = readonly Negociacao[] */
    lista() {
        return this.negociacoes;
    }
}
