import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer";
import {Observable} from "rxjs";
import {Item} from "../../model/item";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:9000/customers'
  }

  // call at http://localhost:9000/customers
  getCustomerList(): Observable <Customer[]> {
    return this.httpClient.get<Customer[]>(this.url).pipe(map(response => response));
  }

  // call at http://localhost:9000/customer/:id
  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + '/' + id);
  }

}
