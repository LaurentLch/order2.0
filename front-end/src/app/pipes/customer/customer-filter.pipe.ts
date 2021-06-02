import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customers: any[], searchText: string): any[] {

    //if no items -> return empty array
    if(!customers){
      return [];
    }

    //if no search text -> return all customers
    if(!searchText){
      return customers;
    }

    //transform searchText into lowercase
    searchText = searchText.toLocaleLowerCase();

    //check if customer last name includes search text
    return customers.filter(customer => {
      return customer.lastname.toLocaleLowerCase().includes(searchText);
    });
  }

}
