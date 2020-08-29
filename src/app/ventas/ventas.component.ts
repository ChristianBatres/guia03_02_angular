import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
//crear las siguientes variables
tipo;
opcionSeleccionado: string ;
cantidad:number;
venta:number;
 constructor() {

}
ngOnInit() {
//inicializar las variables
this.tipo = ["Regular","Especial","Diesel"];
this.opcionSeleccionado="Selecciona";
this.cantidad=0;
this.venta=0;
}
//funcion que realiza los calculos
capturar() {
  if (this.cantidad>=0.05) {
    switch(this.opcionSeleccionado){
      case'Regular':
      this.venta=this.cantidad* 4.25;
      break;
      case'Especial':
      this.venta=this.cantidad*4.05;
      break;
      case'Diesel':
      this.venta=this.cantidad*3.96;
      break;
      }
  } else {
    this.venta=0
  }

}

}
