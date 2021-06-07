import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  data: Date;

  transferir() {
    console.log('Solicitada nova transferência');

    const emitir = { valor: this.valor, destino: this.destino};
    this.aoTranferir.emit(emitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
