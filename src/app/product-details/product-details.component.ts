import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product?: Product | any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(){
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('id'));

      this.productService.get(productIdFromRoute).subscribe({
        next: (data) => {
          this.product = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your product has benn added to the cart!");
  }
}
