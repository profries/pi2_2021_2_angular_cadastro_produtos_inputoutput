import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-produtos';
  componenteTabela = "Tabela de Produtos";  
  produtos: any[] = [
    { id:1, nome: "Produto 1", preco: 10},
    { id:2, nome: "Produto 2", preco: 20},
  ];

  addProduto(produto: any) {
    this.produtos.push(produto);
  }
}
