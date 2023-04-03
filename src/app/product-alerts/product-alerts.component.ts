import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
})

export class ProductAlertsComponent {
  @Input() product : Product | any;
  @Output() notify = new EventEmitter();
}
