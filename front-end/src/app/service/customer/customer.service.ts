import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private backendUrl = 'http://localhost:9000/customers'

  constructor(private httpClient: HttpClient) {
  }

  // call at http://localhost:9000/customers
  getCustomerList(): Observable <Customer[]> {
    const url = `${this.backendUrl}`;
    return this.httpClient.get<Customer[]>(url);
  }

  // call at http://localhost:9000/customer/:id
  getCustomer(theCustomerId: number): Observable<Customer> {
    //need to build URL based on item id
    const url = `${this.backendUrl}/${theCustomerId}`;
    return this.httpClient.get<Customer>(url);
  }

}
