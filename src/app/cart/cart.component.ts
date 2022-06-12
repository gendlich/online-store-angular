import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  totalPrice = this.cartService.getTotal();

  checkoutForm = this.formBuilder.group({
    fullName: '',
    address: '',
    creditCardNumber: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert(`Your order has been submitted ${this.checkoutForm.value}`);
    this.checkoutForm.reset();
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
