import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,)
  {}

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has beem submitted',this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
