import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://sc3009165-henriquesousa.glitch.me/api";

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "/produtos");
  }

  cadastrarProduto(produto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.title);
    body = body.set("preco", String(produto.price));
    body = body.set("descricao", produto.description);
    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"});
  }

  deletarProduto(produto) : Observable<any>{
    return this.http.delete(this.baseURL + "/produtos/" + produto._id, {observe: "response"});
  }

  editarProduto(produto, idProduto) : Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.title);
    body = body.set("preco", String(produto.price));
    body = body.set("descricao", produto.description);
    return this.http.put(this.baseURL + "/produtos/" + idProduto, body, {observe: "response"});
  }

  constructor(private http : HttpClient) { }
}
