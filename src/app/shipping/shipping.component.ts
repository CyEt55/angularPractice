import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
})
export class ShippingComponent implements OnInit {
  
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void{
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  constructor(private cartService: CartService){

  }
}
