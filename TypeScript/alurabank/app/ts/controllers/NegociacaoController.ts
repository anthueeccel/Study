import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject } from '../helpers/decorators/index';


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

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adicionar(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        
        if (this.isDiaUtil(data)) {
            this._mensagemView.update('Somente dia negociações em dias úteis');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adicionar(negociacao);

        /*depois de adicionar, atualiza a view novamente para refletir os dados*/
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');        
    };

    private isDiaUtil(data: Date): boolean {
        return data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo;
    }

    importaDados() {

        function isOk(response: Response){
            if(response.ok) {
                return response;
            } else {
                throw new Error(response.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
        .then(response => isOk(response))
        .then(response => response.json())
        .then((data: any[]) => {
            data
                .map(dado => new Negociacao((new Date),  dado.vezes, dado.montante))
                .forEach(negociacao => this._negociacoes.adicionar(negociacao))
            this._negociacoesView.update(this._negociacoes);
        })
        .catch(error => console.log(error.message));
        
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
