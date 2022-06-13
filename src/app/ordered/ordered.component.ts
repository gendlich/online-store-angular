import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderedService } from '../ordered.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit {
  data = this.orderedService.getData();

  constructor(
    private orderedService: OrderedService,
    private cartService: CartService,
    ) { }
    
    ngOnInit(): void {
    }

  onReturnButton():void {
    this.data = this.orderedService.clearData();
    this.cartService.clearCart();
  }
}
