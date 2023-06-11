import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

/**/

const baseUrl = 'http://localhost:5223/api/products';
/*Change the address and port to match API*/

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    constructor(private http: HttpClient){}

    getAll(): Observable<Product[]>{
        return this.http.get<Product[]>(baseUrl);
    }

    get(id: any): Observable<Product>{
        return this.http.get<Product>(`${baseUrl}/${id}`);
    }
}
