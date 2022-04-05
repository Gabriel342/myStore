import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/services/cadastro.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  produtos: Produto[];

  constructor(private service: CadastroService) { 
    this.produtos = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(produto => {
      console.log(produto);
    });
  }
}