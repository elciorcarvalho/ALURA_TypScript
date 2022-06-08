import { NegociacoesView } from './../views/negociacaoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        // Criamos um model que encapsula as negociacoes
        this.negociacoes = new Negociacoes();
        // Instancia de NegociacoesView() eh criada passando para ela o seletor pai da renderizacao no DOM
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        /// Captura os inputs do form HTML ao criar a classe NegociacaoController
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        /// Ao criar a pagina o templete será carregado no seletor passado na criação de NegociacoesView()
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        const negociacoes = this.negociacoes.lista();
        // Atualiza o view quando nova negociacao eh adicionada
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        /// Formatando a data, que vem em value no formato '1111-11-11', para '1111,11,11'
        /// que eh como o metodo Date obtem seu valor, ex. new Date('1111,11,11');
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        // Cria um model que encapsula os valores da negociacao
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
