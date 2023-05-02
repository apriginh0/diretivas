import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {

  estilo:string = "disable";
  corFundo:string = "red";
  corDaFonte:string = "white";

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
