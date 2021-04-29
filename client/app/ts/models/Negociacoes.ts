import { Imprimivel } from './Imprimivel.js';
import { Igualavel } from './Igualavel.js';
import { Negociacao } from './Negociacao.js';


export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

    // private _negociacoes:Array<Negociacao> = new Array<Negociacao>();
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        // return (new Array<Negociacao>()).concat(this._negociacoes);
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('-- Negociacoes --');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}