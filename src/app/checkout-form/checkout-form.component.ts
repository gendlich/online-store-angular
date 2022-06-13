import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderedService } from '../ordered.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  @Input() totalPrice: number = 0;

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
      Validators.pattern("^[0-9]*$"),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private orderedBuilder: OrderedService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    window.alert(`Your order has been submitted ${this.checkoutForm.value['fullName']}`);
    this.orderedBuilder.setData(
      this.checkoutForm.value['fullName'],
      this.checkoutForm.value['address'],
      this.totalPrice);
    this.router.navigate(['./ordered']);
  }
}
