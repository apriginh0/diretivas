import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = [];
  menuType:string = "superuser";

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("Diego")
  }

  remover(){
    this.produtos.pop()
  }

  quantidade(index:number){
    alert(`quantidade de estoque é ${(index+10)/(index+1)}`)
  }

  remove(index:number){
    this.produtos.splice(index, 1)
  }

}
