import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  @Input('nome') titulo = '';
  @Input() listaProdutos: any[] = [];

 constructor() { }

 ngOnInit(): void {
 }

}

