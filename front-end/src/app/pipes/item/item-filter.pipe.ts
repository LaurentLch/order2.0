import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    //if no items -> return empty array
    if(!items){
      return [];
    }

    //if no searchtext -> return all items
    if(!searchText){
      return items;
    }

    //transform searchText into lowercase
    searchText = searchText.toLocaleLowerCase();

    //check if item name includes search text
    return items.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
