import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, options } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  options = options;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    })
  }

  addToCart(product: Product, i:number) {
    if(product.quantity > 0) {
      product.quantity = this.products[i].quantity;
      this.cartService.addToCart(product);
      window.alert(`${product.name} has been added to cart!`);
    } else {
      window.alert(`Cannot add 0 of ${product.name} to the cart`) 
    }
  }
}
