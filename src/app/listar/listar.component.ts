import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Output() eventoEditarProduto = new EventEmitter<Produto>();
  listaProdutos: Produto[];

  constructor(private web : WebService) { }

  carregarProdutos() : void {
    this.web.getProdutos().subscribe(res => {
      this.listaProdutos = res;
    });
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  editar(produto : Produto) {
    this.eventoEditarProduto.emit(produto);
  }

  deletar(produto : Produto) {
    this.web.deletarProduto(produto).subscribe(res => {
      if(res.ok == true) {
        alert("Produto removido com sucesso");
      } else {
        alert("A remocao não foi realizada!");
      }
    })
  }

}
