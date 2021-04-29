import { Negociacao, Negociacoes } from '../models/index.js';
import { MensagemView, NegociacoesView } from '../views/index.js';
import { domInject, throttle } from '../helpers/decorators/index.js';
import { NegociacaoService } from '../services/index.js';
import { imprime } from '../helpers/index.js';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    public constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle(500)
    public adiciona(): void {

        let data = new Date(this._inputData.val().replace(/-/g, '/'));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Negociações somente em dias úteis.');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }

    @throttle(500)
    public async importarDados() {
        try {
            const negociacoes: Negociacao[] = await this._service.obterNegociacoes();
            negociacoes.forEach(
                negociacao => {
                    this._negociacoes.adiciona(negociacao);
                }
            );
            this._negociacoesView.update(this._negociacoes);
        }
        catch(erro) {
            this._mensagemView.update(erro);
        }        
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
