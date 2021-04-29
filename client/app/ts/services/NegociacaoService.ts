import { Negociacao, NegociacaoParcial } from '../models/index.js';

export class NegociacaoService {

    obterNegociacoes(): Promise<any> {
        return fetch('http://localhost:8080/dados')
        .then(
            res => {
                if (res.ok) return res;
                else throw new Error(res.statusText);
            }
        )
        .then(res => res.json())
        .then((dados: NegociacaoParcial[]) =>
            dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)) 
        )
        .catch(err => {
            console.log(err);
            throw new Error('Não foi possivel importar as negociações')
        });
    }
}