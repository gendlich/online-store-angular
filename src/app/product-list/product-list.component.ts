import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products, options } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;

  options = options;

  constructor(
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      description: product.description,
      quantity: product.quantity,
    });
    console.log(product.quantity)
    window.alert(`${product.name} das been added to cart!`); 
  }
}
