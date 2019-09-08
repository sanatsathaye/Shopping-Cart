import { ShoppingCartItem } from './shopping-cart-item';
export class ShoppingCart{

  /**
   *
   */
  constructor(public items: ShoppingCartItem[]) { }

  get totalItemsCount(): number{
    let count = 0;
    for(let productId in this.items)
      count += this.items[productId].quantity
    return count;
  }

  get productIds(){
    return Object.keys(this.items);
  }
}
