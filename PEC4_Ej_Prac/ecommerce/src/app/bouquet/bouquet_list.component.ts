import { Component } from '@angular/core';
import { Bouquet } from '../models/bouquet.model';
import { QuantityChange } from '../models/quantity_change.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  
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


onArticleQuantityChange(articleQuantityChange: QuantityChange): void {
  // Manejar el cambio de cantidad del artículo
  console.log('Article Quantity Change:', articleQuantityChange);
}
}