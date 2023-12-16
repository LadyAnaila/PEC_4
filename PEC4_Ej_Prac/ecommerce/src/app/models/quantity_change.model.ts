import { Bouquet } from '../models/bouquet.model';

export interface QuantityChange {
    article: Bouquet;
    quantity: number;
  }
  