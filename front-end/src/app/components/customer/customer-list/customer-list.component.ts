import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  // @ts-ignore
  customers : Customer[];

  searchText: string = '';

  constructor(private customerService: CustomerService) {

  }


  ngOnInit(): void {
    this.listCustomer();
  }

  listCustomer() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    })
  }
}
