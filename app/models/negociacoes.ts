import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  /** Array<Negociacao> = Negociacao[] */
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  /** ReadonlyArray<Negociacao> = readonly Negociacao[] */
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
