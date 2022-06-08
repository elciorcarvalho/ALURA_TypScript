export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /// readonly não permite atribuicao, mas prototype.Date.setDate(number), ainda é possivel ser feito
    get data() {
        // Cria-se um novo objeto com o valor da propriedade que nao deve ser alterada
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
