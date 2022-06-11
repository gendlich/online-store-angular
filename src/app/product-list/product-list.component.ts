import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;

  constructor(
    private cartService: CartService
    ) { }

  ngOnInit(): void {
  }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} das been added to cart!`); 
  }
}
