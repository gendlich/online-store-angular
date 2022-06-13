import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { Product, options } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = []
  options = options;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService,
    ) { }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.product = this.products.find(product => product.id === productIdFromRoute);
    })
  }

  quantity: number = 0;
  addToCart(product: Product) {
    if(this.quantity <= 0) {
      window.alert(`Cannot add ${this.quantity} of ${product.name} to the cart`)
    } else {
    product.quantity = this.quantity;
    this.cartService.addToCart(product);
    window.alert(`${product.name} das been added to cart!`); 
    }
  }
}
