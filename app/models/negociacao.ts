export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }
  
  /// readonly não permite atribuicao, mas prototype.Date.setDate(number), ainda é possivel ser feito
  get data() {
    // Cria-se um novo objeto com o valor da propriedade que nao deve ser alterada
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }


  /* 
  A classe poderia ter sido construida de maneira mais verboroza, mas explicita:

  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  } 
  */
}
