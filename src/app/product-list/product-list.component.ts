import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit{
    products?: Product[];

    constructor(private productService: ProductService){}

    ngOnInit(): void{
        this.retrieveProducts();
    }

    retrieveProducts(): void{
        this.productService.getAll().subscribe({
            next: (data) => {
                this.products = data;
                console.log(data);
            },
            error: (e) => console.error(e)
        });
    }

    share(){
        window.alert('The product has been shared');
    }

    onNotify(){
        window.alert('You will be notified when the product goes on sale');
    }
}