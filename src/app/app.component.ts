import { Component } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorialWebservice';
  produtoEditar : Produto;

  edicao(produto : Produto) {
    this.produtoEditar = produto;
  }
}
