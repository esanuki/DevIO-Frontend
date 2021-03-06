import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BaseService } from "src/app/shared/services/base.service";
import { Supplier } from "src/app/supplier/models/supplier";
import { Product } from "../models/product";

@Injectable()
export class ProductService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    getSuppliers(): Observable<Supplier[]>{
        return this.http
            .get<Supplier[]>(this.url + '/fornecedores', this.getAuthHeaderJson())
            .pipe(catchError(this.serviceError));
    }

    getbyId(id: string): Observable<Product> {
        return this.http
            .get<Product>(this.url + '/produtos/' + id, this.getAuthHeaderJson())
            .pipe(catchError(this.serviceError));

    }

    getAll(): Observable<Product[]> {
        return this.http
            .get<Product[]>(this.url + '/produtos', this.getAuthHeaderJson())
            .pipe(catchError(this.serviceError));
    }

    addProduct(product: Product): Observable<Product> {
        return this.http
            .post(this.url + '/produtos', product, this.getAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }

    editProduct(product: Product): Observable<Product> {
        return this.http
            .put(this.url + '/produtos', product,this.getAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }

    removeProduct(id: string): Observable<Product> {
        return this.http
            .delete(this.url + '/produtos?id=' + id, this.getAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }
}