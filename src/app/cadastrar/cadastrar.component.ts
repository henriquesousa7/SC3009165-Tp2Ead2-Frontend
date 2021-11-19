import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  produto = {title : "", price: 0.0, description: ""};
  @Input() produtoEditar : Produto;

  edicao : boolean = false;

  constructor(private web : WebService) { }

  cadastrar() {
    console.log(this.edicao)
    if(this.edicao) {
      if(this.produto.title != "" && this.produto.description != "" && this.produto.price != 0) {
        this.web.editarProduto(this.produto, this.produtoEditar._id).subscribe(res => {
          if(res.ok == true) {
            alert("Edicao realizada com sucesso");
          } else {
            alert("A edicao não foi realizada!");
          }
        });
      } else {
        alert("Há campos vazios que precisam ser preenchidos");
      }
      
    } else {
      if(this.produto.title != "" && this.produto.description != "" && this.produto.price != 0) {
        this.web.cadastrarProduto(this.produto).subscribe(res => {
          if(res.ok == true) {
            alert("O cadastro foi realizado com sucesso");
          } else {
            alert("O cadastro não foi realizado!");
          }
        });
      } else {
        alert("Há campos vazios que precisam ser preenchidos");
      }
      
    }
    
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.produtoEditar)
    if(this.produtoEditar) {
      this.edicao = true;
      this.produto.title = this.produtoEditar.titulo;
      this.produto.price = this.produtoEditar.preco;
      this.produto.description = this.produtoEditar.descricao;
    }
  }   

}
