import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  totalPrice = this.cartService.getTotal();

  checkoutForm = this.formBuilder.group({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    address: new FormControl('', [
      Validators.required, 
      Validators.minLength(6),
    ]),
    creditCardNumber: new FormControl('', [
      Validators.required, 
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    window.alert(`Your order has been submitted ${this.checkoutForm.value['fullName']}`);
    this.items = this.cartService.clearCart();
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
