import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  id: number;
  name: string;
  price: number;
  description: string;
  foto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Phone xl', price: 799, description: 'A large phone with one of the best screens', foto:'/assets/imagem0.jpg'},
  {id: 2, name: 'Phone mini', price: 699, description: 'A great phone with one of the best cameras', foto:'/assets/imagem1.jpg'},
  {id: 3, name: 'Phone standart', price: 299, description: 'A great phone with one of the best cameras', foto:'/assets/imagem2.jpg'},
]

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'description', 'foto'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}

