import { Component, OnInit } from '@angular/core';
import { Bouquet } from '../models/bouquet.model';

@Component({
  selector: 'app-bouquet',
  templateUrl: './bouquet.component.html',
  styleUrls: ['./bouquet.component.css']
})
export class BouquetComponent implements OnInit {

  counter: number = 0;

  constructor() { }

  bouquetList: Bouquet[] = [
    {
      name: 'Ramo morado',
      imageUrl: 'https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_1280.jpg',
      price: 25,
      isOnSale: false,
      quantityInCart: 0,
    },
    {
      name: 'Bouquet primavera',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/23/00/31/bouquet-1851462_1280.jpg',
      price: 30,
      isOnSale: true,
      quantityInCart: 12,
    },
    {
      name: 'Ramo de girasoles',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/10/06/14/07/sunflowers-1719119_1280.jpg',
      price: 20,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
  }

  incrementCounter(bouquet: Bouquet) {
    bouquet.quantityInCart++;
  }

  decrementCounter(bouquet: Bouquet) {
    if (bouquet.quantityInCart > 0) {
      bouquet.quantityInCart--;
    }
  }
}
