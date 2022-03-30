import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/services/cadastro.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(produto =>{
      console.log(produto);
    });
  }

}
