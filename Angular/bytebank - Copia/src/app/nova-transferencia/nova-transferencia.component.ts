import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number;
  destino: number;

  constructor() { }


  transferir() {
    console.log('Ok');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
