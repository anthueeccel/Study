import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencias.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output()
  aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  data: Date;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Solicitada nova transferência');

    const emitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.service.adicionar(emitir).subscribe(
      (resultado) => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
