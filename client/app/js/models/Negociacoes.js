export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
    paraTexto() {
        console.log('-- Negociacoes --');
        console.log(JSON.stringify(this._negociacoes));
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}
