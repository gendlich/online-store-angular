import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  totalPrice = this.cartService.getTotal();

  constructor(
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
  }



  onReset(): void {
    this.items = this.cartService.clearCart();
    this.totalPrice = this.cartService.getTotal();
    window.alert(`Your cart has been emptied`);
  }

  onDeleteButton(i: number) {
    this.cartService.deleteItem(i);
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotal();
    window.alert(`Your item has been removed`);
  }
}
