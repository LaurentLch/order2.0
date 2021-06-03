import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // @ts-ignore
  customer : Customer;
  // @ts-ignore
  id:number;


  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    // @ts-ignore
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.id = params.get('id');
    });

  }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    //get the id param string and convert string to a number using the + symbol

    this.customerService.getCustomer(this.id).subscribe(
      data => {
        this.customer = data;
      }
    )
  }

}
